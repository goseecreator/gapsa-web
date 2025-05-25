import {
  Box,
  Heading,
  Text,
  VStack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { projects } from "../data/projects";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MobileFooter from "../components/MobileFooter";


const MotionBox = motion(Box);

export default function SnippetsPage() {
  const allSnippets = projects.flatMap(p =>
    p.snippets ? p.snippets.map(s => ({ ...s, relatedProject: p.title, description: s.description || "No description available" })) : []
  );

  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      overflowY="auto"
      scrollSnapType="y mandatory"
      position="relative"
    >
      <VStack spacing={0} align="stretch">
        {allSnippets.length > 0 ? (
          allSnippets.map(snippet => (
            <VideoCard
              key={snippet.id}
              title={snippet.title}
              url={snippet.videoUrl}
              project={snippet.relatedProject}
              cardBg={cardBg}
              description={snippet.description}
            />
          ))
        ) : (
          <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
            <Text fontStyle="italic" color="gray.500">
              ✨ Stories are always unfolding. Check back soon to discover new moments of peace, power, and play.
            </Text>
          </Box>
        )}
      </VStack>
      <Box position="fixed" bottom={0} left={0} right={0} zIndex={10}>
        <MobileFooter />
      </Box>
    </Box>
  );
}

function VideoCard({
  title,
  url,
  project,
  cardBg,
  description,
}: {
  title: string;
  url: string;
  project: string;
  cardBg: string;
  description: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (inView) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [inView]);

  return (
    <Box
      ref={ref}
      height="auto"
      width="100%"
      bg={cardBg}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      scrollSnapAlign="start"
      px={4}
      py={6}
      position="relative"
    >
      {/* Full-Screen Video */}
      <video
        ref={videoRef}
        src={url}
        controls
        muted
        playsInline
        loop
        style={{
          width: "100%",
          height: "50vh", // Reduced height for better display
          maxHeight: "none",
          borderRadius: "12px",
          objectFit: "cover",
          marginBottom: "16px", // Space below video to prevent overlap with text
        }}
      />

      {/* Title and Description Overlay */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        position="relative"
        zIndex={1}
        mb={4} // Added margin bottom for better spacing
      >
        <Heading
          size="lg"
          color="white"
          mb={2} // Reduced margin bottom
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          {title}
        </Heading>
        <Text fontSize="md" color="white" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)">
          {description}
        </Text>
      </MotionBox>

      {/* Project Tag */}
      <VStack spacing={1} mt={4} align="center">
        <Tag size="sm" colorScheme="purple">
          {project}
        </Tag>
      </VStack>
    </Box>
  );
}
