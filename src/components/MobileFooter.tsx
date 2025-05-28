import { useEffect, useState } from "react";
import { Box, HStack, Icon, Text, Link } from "@chakra-ui/react";
import {
  FaHome,
  FaHeart,
  FaPlayCircle,
  FaBell,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const footerIcons = [
  { path: "/", icon: FaHome },
  { path: "/donate", icon: FaHeart },
  { path: "/projects/peace-tournament-2025", icon: FaBell },
  { path: "/snippets", icon: FaPlayCircle },
];

export default function MobileFooter() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      zIndex="sticky"
      bg={scrolled ? "rgba(15, 23, 42, 0.8)" : "gray.800"}
      backdropFilter={scrolled ? "blur(8px)" : "none"}
      transition="all 0.3s ease"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={2}
      borderTop="1px solid"
      borderColor="gray.700"
    >
      <HStack spacing={8} mb={1}>
        {footerIcons.map(({ path, icon: IconComp }) => (
          <Link as={RouterLink} to={path} key={path}>
            <Icon as={IconComp} boxSize={5} color="white" />
          </Link>
        ))}
      </HStack>
      <Text fontSize="xs" color="gray.400" textAlign="center">
        © {new Date().getFullYear()} Global Alliance for Peace and Solidarity Africa. All rights reserved.
      </Text>
    </Box>
  );
}
