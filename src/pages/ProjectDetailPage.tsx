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
import PeaceTournamentDetail from "../components/projectDetails/PeaceTournamentDetail";


export default function ProjectDetailPage() {
  const { projectId } = useParams(); // match route param name
  const project = projects.find(p => p.slug === projectId); // use projectId here

  if (!project) {
    return (
      <Alert status="error" mt={8}>
        <AlertIcon />
        Project not found. Please return to the portal and try again.
      </Alert>
    );
  }

  return (
    <Box p={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
  <Heading mb={4}>{project.title}</Heading>
  {project.slug === "peace-tournament-2025" ? (
  <PeaceTournamentDetail />
) : (
  <Text fontSize="lg" mb={6}>{project.fullDescription}</Text>
)}

  {project.images && project.images.length > 0 && (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={6}>
  {project.snippets?.map((snippet) => (
    <Box
      key={snippet.id}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
    >
      <Image
        src={snippet.thumbnail}
        alt={snippet.title}
        objectFit="cover"
        height="180px"
        width="100%"
      />
      <Box p={4}>
        <Heading size="sm" mb={2}>{snippet.title}</Heading>
        <Text fontSize="sm" color="gray.600">
          {snippet.description && snippet.description}
        </Text>
      </Box>
    </Box>
  ))}
</SimpleGrid>

  )}

    </Box>
  );
}
