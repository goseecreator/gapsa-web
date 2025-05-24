import {
    Box,
    Heading,
    Text,
    Image,
    VStack,
    Button,
    Divider,
    useColorModeValue,
    Link
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  
  export default function DonatePage() {
    const sectionBg = useColorModeValue("whiteAlpha.50", "gray.900");
    const dividerColor = useColorModeValue("gray.300", "gray.600");
  
    return (
      <VStack spacing={10} align="center" p={6} maxW="4xl" mx="auto">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          bg={sectionBg}
          p={6}
          rounded="md"
          shadow="md"
          w="full"
        >
          <Heading size="lg" color="brand.gold.500" mb={4}>
            Donate with PayPal
          </Heading>
          <Image
            src="/donation-qr-optimized.png"
            alt="PayPal QR Code"
            maxW="300px"
            mx="auto"
            mb={4}
            rounded="md"
            border="2px solid"
            borderColor="brand.blue.500"
          />
          <Link href="https://www.paypal.com/ncp/payment/FX8WFVKFZNGGC" isExternal>
            <Button
              size="lg"
              colorScheme="yellow"
              bg="brand.gold.500"
              _hover={{ bg: "brand.gold.600" }}
            >
              Donate via PayPal
            </Button>
          </Link>
        </MotionBox>
  
        <Divider borderColor={dividerColor} />
  
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          bg={sectionBg}
          p={6}
          rounded="md"
          shadow="md"
          w="full"
        >
          <Heading size="lg" color="brand.gold.500" mb={4}>
            Donate via WorldRemit Mobile Money
          </Heading>
          <Text color="gray.300" fontSize="md" lineHeight="tall">
            Send donations directly using the WorldRemit app with the following steps:
            <br />
            <br />
            1. Download and install the WorldRemit App for Android or iOS. <br />
            2. Create an account or log in. <br />
            3. Select <strong>Uganda</strong> as the recipient country. <br />
            4. Choose <strong>Mobile Money</strong> as the transfer method. <br />
            5. Enter the phone number: <strong>+256 767 780 426</strong>. <br />
            6. Enter the amount you wish to send. <br />
            7. Review and confirm the transaction details. <br />
            8. Track your transfer status in the app until received. <br />
            <br />
            WorldRemit is secure and regulated, ensuring your donation is safely processed.
          </Text>
        </MotionBox>
      </VStack>
    );
  }
  