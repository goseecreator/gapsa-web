import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Text,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const bg = useColorModeValue("gray.50", "gray.900");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Bot honeypot check (Formspree uses _gotcha)
    const honeypot = (e.target as HTMLFormElement)['_gotcha']?.value;
    if (honeypot) {
      setSubmitting(false);
      return; // Bot detected
    }

    try {
      const response = await fetch("https://formspree.io/f/xkgrlgzr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We’ll be in touch within 72 hours.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Formspree request failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box bg={bg} minH="100vh" py={12} px={6}>
      <Box maxW="lg" mx="auto" bg="whiteAlpha.100" borderRadius="lg" p={8} boxShadow="lg">

        <Heading
          mb={6}
          size="lg"
          bgGradient="linear(to-r, brand.gold.400, brand.blue.400)"
          bgClip="text"
          textAlign="center"
        >
          Contact GAPSA
        </Heading>

        <Text fontSize="md" color="gray.400" textAlign="center" mb={6}>
          We'd love to hear from you. You can expect a response within 72 hours.
        </Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" value={formData.message} onChange={handleChange} />
            </FormControl>

            {/* Honeypot CAPTCHA */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <Button
              type="submit"
              size="lg"
              width="full"
              bg="brand.gold.500"
              color="gray.900"
              fontWeight="bold"
              _hover={{ bg: "brand.gold.600", boxShadow: "0 0 10px rgba(251, 191, 36, 0.6)" }}
              isLoading={submitting}
              loadingText="Sending"
            >
              Send Message
            </Button>
          </VStack>
        </form>

        {/* Privacy Disclaimer */}
        <Text fontSize="xs" color="gray.400" mt={3} textAlign="center">
          Your information will only be used to respond to your message. We do not share your details.
        </Text>
        <Box mt={8} textAlign="center">
  <Text fontSize="sm" color="gray.400">
    Found a bug or something confusing on the site?{" "}
    <a
      href="https://forms.gle/xFfStEDWSJYNiKeZ8"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#FBBF24", textDecoration: "underline" }}
    >
      Click here to give feedback
    </a>
    .
  </Text>
</Box>

        {/* Social Media Icons */}
        <VStack mt={10} spacing={3} align="center">
          <Heading size="sm" color="gray.500">Follow & Connect</Heading>
          <Box display="flex" gap={6} fontSize="2xl">
            <Tooltip label="Opens Facebook in a new tab" aria-label="Facebook">
              <a
                href="https://www.facebook.com/profile.php?id=100084468948655"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
              >
                <FaFacebook />
              </a>
            </Tooltip>
            <Tooltip label="Opens Instagram in a new tab" aria-label="Instagram">
              <a
                href="https://www.instagram.com/grobalalliancepeacesolidaritya?igsh=YzljYTk1ODg3Zg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
              >
                <FaInstagram />
              </a>
            </Tooltip>
            <Tooltip label="Opens YouTube in a new tab" aria-label="YouTube">
              <a
                href="https://www.youtube.com/@arsenekibukila"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on YouTube"
              >
                <FaYoutube />
              </a>
            </Tooltip>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
