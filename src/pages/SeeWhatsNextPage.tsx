// src/pages/SeeWhatsNextPage.tsx

import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    Button,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { projects } from "../data/projects"; // Assuming you're importing your data here
  
  export default function SeeWhatsNextPage() {
    const futureProjects = projects.filter((p) => p.category === "future");
    const tileBg = useColorModeValue("gray.100", "gray.700");
  
    return (
      <Box px={6} py={12}>
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading size="2xl" bgGradient="linear(to-r, brand.gold.400, brand.blue.400)" bgClip="text">
            See What's Next
          </Heading>
          <Text fontSize="lg" color="gray.500" maxW="2xl">
            Our future projects, focused on shaping a better tomorrow.
          </Text>
        </VStack>
  
        {/* Display Future Projects */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {futureProjects.map((project) => (
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
  }
  