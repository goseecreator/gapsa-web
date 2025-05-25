
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Alert status="error">
        <AlertIcon />
        Project not found.
      </Alert>
    );
  }

  return (
    <Box p={8}>
      <Heading mb={4}>{project.title}</Heading>
      <Text fontSize="lg" mb={6}>{project.description}</Text>

      <Image
        src={project.image}
        alt={project.title}
        borderRadius="md"
        mb={6}
        maxH="400px"
        objectFit="cover"
      />

      {project.snippets && project.snippets.length > 0 && (
        <Box mt={10}>
          <Heading size="md" mb={4}>Related Snippets</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {project.snippets.map(snippet => (
              <Box key={snippet.id} bg="gray.50" p={4} borderRadius="md">
                <Heading size="sm" mb={2}>{snippet.title}</Heading>
                <Box as="iframe"
                  src={snippet.videoUrl}
                  width="100%"
                  height="200"
                  allowFullScreen
                  title={snippet.title}
                  style={{ borderRadius: "8px" }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
