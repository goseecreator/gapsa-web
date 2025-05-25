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
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headingColor = useColorModeValue("brand.blue.600", "brand.blue.300");

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
        <Button colorScheme="blue" mr={4}>Donate</Button>
        <Button colorScheme="teal">Contact</Button>
      </Box>

      <Heading size="lg" mb={4} color={headingColor}>
        Peace Tournament 2025
      </Heading>

      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        The Peace Tournament Project hosts our 3rd edition of the Peace Tournament in Nakivale Refugee Camp, Uganda, Africa.
        It begins 20th May to 20th June 2025. Donations are welcomed in all forms.
      </Text>

      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        The Nakivale Community strongly believes that our football, art, and music tournaments align with our mission of promoting solidarity through community service.
        The youth tournaments bring together the whole community in a spirit of collaboration and competition, allowing the diverse cultures, languages, and challenges of the Nakivale population into unity.
      </Text>

      <Heading size="md" mt={8} mb={2} color={headingColor}>
        Objectives
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        The main objective of organizing the Peace Tournament in the Refugee Community is to provide a platform for refugee families to showcase their sporting, musical, and arts’ prowess,
        and promote unity, understanding, and integration within the international community that comprises the Nakivale Settlement.
      </Text>
      <UnorderedList spacing={2} mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        <ListItem>Forge bonds and break down barriers</ListItem>
        <ListItem>Create a sense of solidarity</ListItem>
        <ListItem>Host tournaments with 16 football teams and 8 visual/musical groups</ListItem>
        <ListItem>Award trophies, medals, equipment, and unity-based honors</ListItem>
      </UnorderedList>

      <Heading size="md" mt={8} mb={2} color={headingColor}>
        Importance
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        The Peace Tournament provides physical activity, skill development, and peace education through sessions on conflict resolution, non-violent communication,
        and inclusion. Games for children and families promote interaction and fun.
      </Text>

      <Heading size="md" mt={8} mb={2} color={headingColor}>
        Impact
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        The tournament unites refugee children and fosters peaceful relationships. It challenges stereotypes and nurtures a welcoming environment.
        Youth learn peace-building through modeled adult behavior, building hope and strengthening the community fabric.
      </Text>

      <Heading size="md" mt={8} mb={2} color={headingColor}>
        Conclusion
      </Heading>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        More than a sporting event, the Peace Tournament is a testimony to the resilience, strength, and potential of refugees.
        Supporting this initiative empowers youth in Nakivale to shape their futures with pride and peace.
      </Text>

      <Text fontWeight="bold" mb={6} fontSize={{ base: "sm", md: "md" }} color={textColor}>
        Thank you for supporting The Alliance for Peace & Solidarity for Africa and the Nakivale Refugee Settlement in Uganda.
      </Text>

      {/* Bottom CTAs */}
      <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
        <Button colorScheme="green">Contact</Button>
        <Button colorScheme="purple">Donate</Button>
      </Stack>
    </MotionBox>
  );
}
