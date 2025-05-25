import { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Collapse,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
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
  // { path: "search", icon: FaSearch },
  { path: "/videos", icon: FaPlayCircle },
  { path: "/projects/peace-tournament-2025", icon: FaBell },
];

export default function MobileFooter() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isOpen: isSearchOpen,
    onToggle: toggleSearch,
  } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position="fixed" bottom="0" width="100%" zIndex="sticky">
      {/* Slide-In Search Bar */}
      {/* <Collapse in={isSearchOpen} animateOpacity={true}>
        <>
          <Box
            px={4}
            py={3}
            bg={useColorModeValue("gray.100", "gray.700")}
            borderTop="1px solid"
            borderColor="gray.300"
          >
            <InputGroup size="md">
              <Input
                placeholder="Search the website..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="white"
                color="black"
                borderRadius="md"
              />
              <InputRightElement width="5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => alert(`Searching for: ${searchQuery}`)}
                  colorScheme="blue"
                >
                  Submit
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </>
      </Collapse> */}

      {/* Footer Navigation */}
      <Box
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
          {footerIcons.map(({ path, icon: IconComp }) => {
            const isSearch = path === "search";
            return isSearch ? (
              <Box key={path} onClick={toggleSearch} cursor="pointer">
                <Icon as={IconComp} boxSize={5} color="white" />
              </Box>
            ) : (
              <Link as={RouterLink} to={path} key={path}>
                <Icon as={IconComp} boxSize={5} color="white" />
              </Link>
            );
          })}
        </HStack>
        <Text fontSize="xs" color="gray.400" textAlign="center">
          © {new Date().getFullYear()} Global Alliance for Peace and Solidarity Africa. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
