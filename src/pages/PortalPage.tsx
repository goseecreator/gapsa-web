import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  useColorModeValue,
  GridItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard"; // Update the path to match the correct file location
import { projects } from "../data/projects";

const MotionBox = motion(Box);

export default function PortalPage() {
  const tileBg = useColorModeValue("gray.100", "gray.700");

  const recent = projects.filter(p => p.category === "recent").slice(0, 4);

  return (
    <Box px={6} py={12}>
      {/* Portal Hero */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading
          size="2xl"
          bgGradient="linear(to-r, brand.gold.400, brand.blue.400)"
          bgClip="text"
        >
          Portal
        </Heading>
        <Text fontSize="lg" color="gray.500" maxW="2xl">
          Step into a living archive of GAPSA projects and events— from bold beginnings to future frontiers.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
        {/* Side Column: Archive + Future */}
        <VStack spacing={8} align="stretch">
          <MotionBox
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            bg={tileBg}
            p={5}
            borderRadius="lg"
            boxShadow="lg"
          >
            <Heading size="md" color="purple.500" mb={2}>Archive</Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
              A history of impact — projects and events that have shaped our path.
            </Text>
            <Button
              as={RouterLink}
              to="/portal/past"
              variant="outline"
              colorScheme="purple"
              size="sm"
            >
              View Archive
            </Button>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            bg={tileBg}
            p={5}
            borderRadius="lg"
            boxShadow="lg"
          >
            <Heading size="md" color="green.500" mb={2}>See What's Next</Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
              Our vision forward. These projects are on the horizon and need your spark.
            </Text>
            <Button
              as={RouterLink}
              to="/portal/future"
              variant="ghost"
              colorScheme="green"
              size="sm"
            >
              See What’s Next
            </Button>
          </MotionBox>
        </VStack>

        {/* Center Grid: Recent */}
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {recent.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
