import {
    Box,
    Heading,
    Text,
    VStack,
    Icon,
    useColorModeValue,
    SimpleGrid,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import {
    FaDove,
    FaHandsHelping,
    FaTint,
    FaBaby,
    FaBook,
    FaLeaf,
    FaUsers,
  } from "react-icons/fa";
  
  const MotionBox = motion(Box);
  
  const whatWeDo = [
    {
      title: "Peacebuilding",
      description: "Facilitating dialogue and reconciliation to cultivate lasting peace.",
      icon: FaDove,
    },
    {
      title: "Health & Wellness",
      description: "Promoting well-being through access to healthcare and hygiene.",
      icon: FaHandsHelping,
    },
    {
      title: "Water & Sanitation",
      description: "Ensuring clean water access and dignified sanitation.",
      icon: FaTint,
    },
    {
      title: "Maternal & Child Care",
      description: "Supporting mothers and children with essential care and nutrition.",
      icon: FaBaby,
    },
    {
      title: "Education & Empowerment",
      description: "Providing inclusive education, especially for girls and youth.",
      icon: FaBook,
    },
    {
      title: "Environmental Stewardship",
      description: "Protecting natural resources for future generations.",
      icon: FaLeaf,
    },
    {
      title: "Economic & Social Empowerment",
      description: "Equipping women and youth with skills to build strong communities.",
      icon: FaUsers,
    },
  ];
  
  export default function AboutPage() {
    const sectionBg = useColorModeValue("gray.50", "gray.800");
  
    return (
      <Box maxW="6xl" mx="auto" px={6} py={12}>
        <MotionBox
          height={{ base: "300px", md: "400px" }}
          position="relative"
          borderRadius="md"
          overflow="hidden"
          mb={12}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            as="img"
            src="/images/hero-about.svg"
            alt="About Hero"
            objectFit="cover"
            width="100%"
            height="100%"
            filter="brightness(0.3)"
          />
  
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={6}
            textAlign="center"
          >
            <VStack spacing={4}>
              <Heading size="2xl" color="white">
                Who We Are
              </Heading>
              <Text color="gray.100" fontSize="lg" maxW="2xl">
                “We are the hands of peace, the hearts of solidarity, and the voice of Africa’s future.”
              </Text>
            </VStack>
          </Box>
        </MotionBox>
  
        <VStack align="start" spacing={10} bg={sectionBg} p={6} borderRadius="md" boxShadow="md">
          <Box width="100%">
            <Heading size="lg" mb={6}>What We Do</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {whatWeDo.map((item, idx) => (
                <MotionBox
                  key={idx}
                  p={5}
                  borderWidth="1px"
                  borderRadius="md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  bg={useColorModeValue("white", "gray.700")}
                >
                  <Icon as={item.icon} boxSize={6} color="teal.400" mb={2} />
                  <Heading size="md" mb={1}>{item.title}</Heading>
                  <Text fontSize="sm">{item.description}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
          <Box width="100%">
  <Heading size="lg" mb={4} color="teal.500">
    Our Mission
  </Heading>
  <Text fontSize="lg" lineHeight="taller">
    At GAPSA, our mission is to ignite peace, solidarity, and sustainable development across Africa —
    with a heart-centered focus on children and women. We build bridges of opportunity and empowerment
    that strengthen communities from the inside out.
  </Text>
</Box>

<Box width="100%">
  <Heading size="lg" mt={10} mb={4} color="teal.500">
    Our Objectives
  </Heading>
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
    {[
      "Promote peace and stability through community dialogue.",
      "Ensure access to clean water, sanitation, and hygiene.",
      "Support inclusive education, especially for girls.",
      "Protect our natural environment for generations to come.",
      "Empower women through entrepreneurship and training.",
      "Equip youth with social-emotional and leadership skills.",
    ].map((goal, idx) => (
      <MotionBox
        key={idx}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        whileHover={{ scale: 1.02 }}
        bg={useColorModeValue("white", "gray.700")}
        transition={{ duration: 0.3 }}
      >
        <Text fontSize="md">🌿 {goal}</Text>
      </MotionBox>
    ))}
  </SimpleGrid>
</Box>

<Box width="100%">
  <Heading size="lg" mt={10} mb={4} color="teal.500">
    The Impact We Aim For
  </Heading>
  <Text fontSize="lg" lineHeight="taller">
    Through every act of service, education, and unity, we’re shaping a more just, joyful, and
    opportunity-filled future for Africa’s refugee and rural populations. We envision thriving
    communities where peace isn’t just the goal — it’s the culture.
  </Text>
</Box>

        </VStack>
      </Box>
    );
  }
  