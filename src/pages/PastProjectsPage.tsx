import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Alert,
  AlertIcon,
  Stack,
} from "@chakra-ui/react";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Alert status="error" mt={10}>
        <AlertIcon />
        Project not found.
      </Alert>
    );
  }

  return (
    <Box px={{ base: 4, md: 10 }} py={10}>
      <Heading mb={4}>{project.title}</Heading>

      <Text fontSize="lg" mb={6} color="gray.700">
        {project.fullDescription}
      </Text>

      {/* Project Image Gallery */}
      <Stack direction={{ base: "column", md: "row" }} spacing={4} wrap="wrap" mb={10}>
        {project.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${project.title} image ${index + 1}`}
            borderRadius="md"
            objectFit="cover"
            maxW={{ base: "100%", md: "48%" }}
            maxH="300px"
          />
        ))}
      </Stack>

      {/* Optional Snippets */}
      {project.snippets && project.snippets.length > 0 && (
        <Box mt={10}>
          <Heading size="md" mb={4}>
            Related Snippets
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {project.snippets.map(snippet => (
              <Box key={snippet.id} bg="gray.50" p={4} borderRadius="md">
                <Heading size="sm" mb={2}>{snippet.title}</Heading>
                <Box
                  as="iframe"
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
