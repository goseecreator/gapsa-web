import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// ✅ Define prop types
interface ProjectCardProps {
  title: string;
  image: string;
  shortDescription: string;
  slug: string;
}

export default function ProjectCard({
  title,
  image,
  shortDescription,
  slug,
}: ProjectCardProps) {
  return (
    <Box borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
      <Image src={image} alt={title} objectFit="cover" width="100%" height="200px" />
      <VStack align="start" p={4} spacing={3}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray.600">
          {shortDescription}
        </Text>
        <Button
          as={RouterLink}
          to={`/projects/${slug}`}
          variant="outline"
          size="sm"
          colorScheme="blue"
        >
          Read More
        </Button>
      </VStack>
    </Box>
  );
}
