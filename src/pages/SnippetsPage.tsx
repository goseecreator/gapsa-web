
import {
  Box,
  Heading,
  Text,
  AspectRatio,
  VStack,
  Tag,
  useColorModeValue,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const MotionBox = motion(Box);

export default function SnippetsPage() {
  const allSnippets = projects.flatMap(p =>
    p.snippets ? p.snippets.map(s => ({ ...s, relatedProject: p.title })) : []
  );

  const cardBg = useColorModeValue("gray.100", "gray.700");
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box px={4} py={8}>
      <VStack spacing={2} textAlign="center" mb={10}>
        <Heading
          size="2xl"
          bgGradient="linear(to-r, brand.blue.400, brand.gold.400)"
          bgClip="text"
        >
          Snippets
        </Heading>
        <Text color="gray.500" fontSize="md">
          Watch short clips and highlights from our community programs.
        </Text>
      </VStack>

      {allSnippets.length > 0 ? (
        isMobile ? (
          <VStack
            spacing={0}
            align="stretch"
            scrollSnapType="y mandatory"
            sx={{
              '& > div': {
                scrollSnapAlign: 'start',
              },
            }}
          >
            {allSnippets.map(snippet => (
              <MotionBox
                key={snippet.id}
                py={8}
                px={4}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AspectRatio ratio={9 / 16} maxW="sm" mx="auto" mb={4} borderRadius="md" overflow="hidden">
                  <iframe
                    src={snippet.videoUrl}
                    title={snippet.title}
                    allowFullScreen
                  />
                </AspectRatio>
                <VStack spacing={2} align="center">
                  <Heading size="sm">{snippet.title}</Heading>
                  <Tag size="sm" colorScheme="purple">
                    {snippet.relatedProject}
                  </Tag>
                </VStack>
              </MotionBox>
            ))}
          </VStack>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {allSnippets.map(snippet => (
              <MotionBox
                key={snippet.id}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                p={4}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AspectRatio ratio={16 / 9} borderRadius="md" overflow="hidden" mb={3}>
                  <iframe
                    src={snippet.videoUrl}
                    title={snippet.title}
                    allowFullScreen
                  />
                </AspectRatio>
                <VStack spacing={1} align="start">
                  <Heading size="sm">{snippet.title}</Heading>
                  <Tag size="sm" colorScheme="purple">
                    {snippet.relatedProject}
                  </Tag>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        )
      ) : (
        <Box py={12} textAlign="center">
          <Text fontStyle="italic" color="gray.500">
            ✨ Stories are always unfolding. Check back soon to discover new moments of peace, power, and play.
          </Text>
        </Box>
      )}
    </Box>
  );
}
