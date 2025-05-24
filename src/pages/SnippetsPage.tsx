
import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  AspectRatio
} from "@chakra-ui/react";
import { projects } from "../data/projects";

export default function SnippetsPage() {
  // Flatten all snippets across projects
  const allSnippets = projects.flatMap(p =>
    p.snippets ? p.snippets.map(s => ({ ...s, relatedProject: p.title })) : []
  );

  return (
    <Box p={8}>
      <Heading textAlign="center" mb={6}>Watch Snippets</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {allSnippets.map(snippet => (
          <VStack key={snippet.id} align="start" spacing={2} bg="gray.800" p={4} borderRadius="md">
            <AspectRatio ratio={16 / 9} w="100%">
              <iframe
                src={snippet.videoUrl}
                title={snippet.title}
                allowFullScreen
                style={{ borderRadius: "8px" }}
              />
            </AspectRatio>
            <Text fontWeight="bold" color="white">{snippet.title}</Text>
            {snippet.relatedProject && (
              <Text fontSize="sm" color="gray.300">
                Related to: {snippet.relatedProject}
              </Text>
            )}
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
