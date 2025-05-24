
import {
  Box,
  SimpleGrid,
  Heading,
  VStack,
  Text,
  Divider,
  GridItem,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function PortalPage() {
  const recent = projects.filter(p => p.category === "recent");
  const past = projects.filter(p => p.category === "past");
  const future = projects.filter(p => p.category === "future");

  return (
    <Box p={8}>
      <Heading textAlign="center" mb={6}>Projects Portal</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {/* Left Intro or Featured */}
        <Box display={{ base: "none", md: "block" }}>
          <VStack align="start" spacing={4}>
            <Heading size="md">Welcome to the Portal</Heading>
            <Text fontSize="sm" color="gray.600">
              Explore ongoing, past, and upcoming GAPSA projects that build peace, education, and creative leadership.
            </Text>
          </VStack>
        </Box>

        {/* Center Grid: Recent */}
        <GridItem colSpan={1}>
          <Heading size="sm" mb={4} textAlign="center">Most Recent Projects</Heading>
          <SimpleGrid columns={1} spacing={4}>
            {recent.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </SimpleGrid>
        </GridItem>

        {/* Sidebar: Past + Future */}
        <VStack align="start" spacing={6}>
          <Box>
            <Heading size="sm" mb={2}>Past Projects</Heading>
            {past.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </Box>
          <Divider />
          <Box>
            <Heading size="sm" mb={2}>Future Projects</Heading>
            {future.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
