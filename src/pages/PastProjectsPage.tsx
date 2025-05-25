// src/pages/PastProjectsPage.tsx

import { Box, Heading, SimpleGrid, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { projects } from "../data/projects"; // Assuming you're importing your data here

const PastProjectsPage = () => {
  const pastProjects = projects.filter((p) => p.category === "past");
  const tileBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box px={6} py={12}>
      <Heading textAlign="center" size="2xl" mb={8}>
        Past Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {pastProjects.map((project) => (
          <Box
            key={project.slug}
            bg={tileBg}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgImage={`url(${project.image})`}
              bgSize="cover"
              bgPosition="center"
              borderRadius="lg"
              height="200px"
              width="100%"
            />
            <Heading size="md" mt={4} mb={2}>
              {project.title}
            </Heading>
            <Text mb={4} color="gray.600">
              {project.description}
            </Text>
            <Button as="a" href={`/projects/${project.slug}`} variant="outline" colorScheme="blue">
              View Project
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PastProjectsPage; // Ensure default export here
