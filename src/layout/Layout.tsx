
import {
  Box,
  Flex,
  VStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { Outlet, Link as RouterLink } from "react-router-dom";
import MobileFooter from "../components/MobileFooter";

const sidebarLinks = [
  { label: "Home", path: "/", icon: <FaHome /> },
  { label: "About", path: "/about", icon: <FaInfoCircle /> },
  { label: "Portal", path: "/portal", icon: <MdDashboardCustomize /> },
  { label: "Snippets", path: "/snippets", icon: <BsCollectionPlay /> },
  { label: "Contact", path: "/contact", icon: <FaEnvelope /> },
  { label: "Donate", path: "/donate", icon: <FaHeart /> },
];

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Flex
        as="header"
        bg="gray.800"
        color="white"
        p={4}
        justify="space-between"
        align="center"
      >
        <IconButton
          icon={<HamburgerIcon boxSize={6} />}
          onClick={onOpen}
          aria-label="Open Menu"
          bg="whiteAlpha.200"
          _hover={{ bg: "whiteAlpha.300" }}
          borderRadius="full"
          boxShadow="md"
          size="lg"
          color="white"
        />
        <Text fontSize="xl" fontWeight="bold">
          GAPSA
        </Text>
      </Flex>

      {/* Sidebar Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <VStack p={6} spacing={5} align="start" mt={10}>
            {sidebarLinks.map((item) => (
              <Link
                key={item.path}
                as={RouterLink}
                to={item.path}
                onClick={onClose}
                fontSize="lg"
                display="flex"
                alignItems="center"
                gap={3}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box as="main" flex="1" p={4}>
        <Outlet />
      </Box>

      {/* Mobile Footer - only visible on small screens */}
      <MobileFooter />
    </Flex>
  );
}
