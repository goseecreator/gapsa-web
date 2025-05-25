import {
  Box,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function PeaceTournamentDetail() {
  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.800", "gray.100");
  const heading = useColorModeValue("brand.blue.600", "brand.blue.300");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      p={{ base: 4, md: 6 }}
      bg={bg}
      borderRadius="md"
      boxShadow="md"
      mt={6}
    >
      {/* Top CTAs */}
      <Box mb={6}>
        <Button colorScheme="blue" mr={4}>
          Donate
        </Button>
        <Button variant="outline" borderColor="brand.blue.500" color="brand.blue.500">
          Contact
        </Button>
      </Box>

      <Heading size="lg" mb={4} color={heading}>
        Peace Tournament 2025
      </Heading>

      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        The Peace Tournament Project hosts our 3rd edition of the Peace Tournament in Nakivale Refugee Camp, Uganda. It begins 20th May to 20th June 2025. Donations are welcomed in all forms.
      </Text>

      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        The Nakivale Community believes that our football, art, and music tournaments align with our mission of promoting solidarity through community service. The youth tournaments unify diverse cultures, languages, and challenges into harmony.
      </Text>

      <Heading size="md" mt={8} mb={2} color={heading}>
        Objectives
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        The tournament offers a platform to showcase talents and foster integration and peace within the international refugee community.
      </Text>
      <UnorderedList spacing={2} mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        <ListItem>Forge bonds and break down barriers</ListItem>
        <ListItem>Create a sense of solidarity</ListItem>
        <ListItem>Host 16 football teams and 8 art/music groups</ListItem>
        <ListItem>Award honors that celebrate unity</ListItem>
      </UnorderedList>

      <Heading size="md" mt={8} mb={2} color={heading}>
        Importance
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        Beyond sports, this initiative provides physical activity, peace education, and promotes inclusive community games.
      </Text>

      <Heading size="md" mt={8} mb={2} color={heading}>
        Impact
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        Children build peaceful relationships and grow into community-minded leaders. It fosters hope and resilience.
      </Text>

      <Heading size="md" mt={8} mb={2} color={heading}>
        Conclusion
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={text}>
        The Peace Tournament is a celebration of resilience, potential, and peace. Supporting it helps shape futures rooted in unity.
      </Text>

      <Text fontWeight="bold" mb={6} fontSize={{ base: "sm", md: "md" }} color={text}>
        Thank you for supporting The Alliance for Peace & Solidarity for Africa and the Nakivale Refugee Settlement.
      </Text>

      {/* Bottom CTAs */}
      <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
        <Button variant="outline" borderColor="brand.gold.500" color="brand.gold.500">
          Contact
        </Button>
        <Button colorScheme="blue">
          Donate
        </Button>
      </Stack>
    </MotionBox>
  );
}
