import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";


  
  const MotionText = motion(Text);
  const MotionHeading = motion(Heading);
  const MotionBox = motion<BoxProps>(Box);

  
  export default function HomePage() {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        overflow="hidden"
        bg="black"
        color="gray.100"
        zIndex={0}
      >
        {/* Background Video */}
        <Box
  as="video"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  objectFit="cover"
  position="absolute"
  top={0}
  left={0}
  width="100%"
  height="100%"
  zIndex={-1}
  opacity={0.5}
>
  <source src="/videos/gapsa_hero_cinematic.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</Box>

  
        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="blackAlpha.700"
          zIndex={0}
        />
  
        {/* Hero Content */}
        <VStack
          align="center"
          justify="center"
          spacing={6}
          height="100%"
          px={4}
          textAlign="center"
          position="relative"
          zIndex={1}
        >
          <MotionHeading
            size="2xl"
            bgGradient="linear(to-r, brand.gold.400, brand.blue.400)"
            bgClip="text"
            fontWeight="extrabold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Women and Children to Lead Africa Forward
          </MotionHeading>
  
          <MotionText
            fontSize="md"
            color="gray.300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Let the children play. Let the parents learn. Stand for peace and solidarity with GAPSA.
          </MotionText>
  
          <MotionText
            fontSize="lg"
            color="gray.100"
            maxW="3xl"
            fontWeight="medium"
            textShadow="0 0 6px rgba(66, 153, 225, 0.5)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            GAPSA is a global alliance of cultural educators, peacebuilders, and community leaders
            empowering women and children across Africa.
          </MotionText>
  
          <MotionBox
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  animate={{
    boxShadow: ["0 0 0px", "0 0 12px #FBBF24"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }}
>
  <ChakraLink as={RouterLink} to="/donate" _hover={{ textDecoration: "none" }}>
    <Button
      size="lg"
      colorScheme="yellow"
      bg="brand.gold.500"
      color="gray.900"
      _hover={{ bg: "brand.gold.600" }}
      fontWeight="bold"
    >
      Enter to Take Action
    </Button>
  </ChakraLink>
</MotionBox>


  
          <MotionText
            fontSize="sm"
            color="gray.400"
            fontStyle="italic"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            'The earth has an abundance of playgrounds for all of us to enjoy with.'
          </MotionText>
        </VStack>
      </Box>
    );
  }
  