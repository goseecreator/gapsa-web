
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ slug, title, description, image }: ProjectCardProps) {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHover = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={cardBg}
      transition="all 0.3s"
      _hover={{ bg: cardHover }}
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        width="100%"
        height="180px"
      />
      <VStack p={4} spacing={3} align="start">
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray.600" noOfLines={3}>
          {description}
        </Text>
        <Button
          as={RouterLink}
          to={`/portal/${slug}`}
          colorScheme="blue"
          variant="solid"
          size="sm"
        >
          Read More
        </Button>
      </VStack>
    </Box>
  );
}
