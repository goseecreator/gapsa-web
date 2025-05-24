
import { Box, Image, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ slug, title, description, image }: ProjectCardProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
      <Image src={image} alt={title} objectFit="cover" width="100%" height="200px" />
      <VStack p={4} spacing={3} align="start">
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" noOfLines={3}>{description}</Text>
        <Button
          as={RouterLink}
          to={`/portal/${slug}`}
          colorScheme="blue"
          variant="outline"
          size="sm"
        >
          Read More
        </Button>
      </VStack>
    </Box>
  );
}
