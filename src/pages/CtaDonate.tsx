// src/pages/CtaDonate.tsx
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  RadioGroup,
  Radio,
  Progress,
  useToast,
  Image,
} from "@chakra-ui/react";

const GOAL_AMOUNT = 1415;

const CtaDonate = () => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [amount, setAmount] = useState("5");
  const [donated, setDonated] = useState(0);
  const [showThanks, setShowThanks] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const renderPayPal = () => {
      if (!paypalRef.current || !(window as any).paypal) return;

      paypalRef.current.innerHTML = "";

      const parsedAmount = parseFloat(amount).toFixed(2);

      (window as any).paypal.Buttons({
        style: {
          color: "gold",
          shape: "pill",
          label: "donate",
        },
        createOrder: (_data: any, actions: any) =>
          actions.order.create({
            purchase_units: [{ amount: { value: parsedAmount } }],
          }),
        onApprove: async (_data: any, actions: any) => {
          const details = await actions.order.capture();
          const donorName = details.payer.name.given_name;

          await fetch(
            "https://ih9htyqyp8.execute-api.us-east-1.amazonaws.com/test/donation",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: donorName, amount: parseFloat(amount) }),
            }
          );

          setDonated((prev) => prev + parseFloat(amount));
          setShowThanks(true);
          toast({
            title: "Thank you!",
            description: `${donorName}, your donation was recorded.`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        onError: (err: any) => {
          console.error("PayPal error", err);
          toast({
            title: "Error",
            description: "Something went wrong with PayPal.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        },
      }).render(paypalRef.current);
    };

    const existingScript = document.querySelector(
      'script[src*="paypal.com/sdk/js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AY3aobkBlVtJzDsgg2uS_OR3A8_jCJOPNj6w1DFnTjtOsangqnEB7QP8NImo7fRXav6-t2-1bcWFHvip&currency=USD";
      script.async = true;
      script.onload = renderPayPal;
      document.body.appendChild(script);
    } else if ((window as any).paypal) {
      renderPayPal();
    }
  }, [amount]);

  return (
    <Box
      minH="100vh"
      bgImage="url('https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/peaceTour2025/football7_no_banner.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={10}
    >
      <VStack
        spacing={6}
        w="full"
        maxW="lg"
        bg="blackAlpha.500"
        color="white"
        boxShadow="xl"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        p={6}
        borderRadius="md"
        textAlign="center"
      >
        <Heading size="lg" color="brand.gold.500" textTransform="uppercase">
          TAKE ACTION FOR PEACE AND SOLIDARITY
        </Heading>

        <Text fontSize="lg" color="gray.300">
          Make Peace Possible—Give Now.
        </Text>

        <Image
          src="https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/gapsa-logo-trace-ready.svg"
          alt="GAPSA Logo"
          boxSize="70px"
          objectFit="contain"
          mx="auto"
        />

        <RadioGroup onChange={setAmount} value={amount} w="full">
          <VStack spacing={2} align="start" fontSize="sm">
            <Radio value="5">$5 — Every bit helps</Radio>
            <Radio value="25">$25 — Bring unity through sport</Radio>
            <Radio value="125">$125 — Fund a full initiative</Radio>
          </VStack>
        </RadioGroup>

        {/* ✅ Styled PayPal container, no wrapper */}
        <Box
          ref={paypalRef}
          w="full"
          bg="blackAlpha.600"
          p={4}
          borderRadius="md"
        />

        <Progress
          value={(donated / GOAL_AMOUNT) * 100}
          colorScheme="green"
          size="sm"
          w="full"
          borderRadius="sm"
          transition="all 0.6s ease-in-out"
        />
        <Text fontSize="xs" color="gray.300">
          ${donated.toFixed(2)} raised of ${GOAL_AMOUNT.toLocaleString()} goal
        </Text>
      </VStack>
    </Box>
  );
};

export default CtaDonate;
