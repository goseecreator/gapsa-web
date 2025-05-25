import {
  Box,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Stack,
  useColorModeValue,
  Container,
  VisuallyHidden,
  Image,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const MotionBox = motion(Box);

const galleryByDay = [
  {
    day: "Day 1",
    images: [
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/stedBoysFC.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/sheVitaClub.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/+football8.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/KashojwaGilsFC.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football10.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football12.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football10.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football13.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football14.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football15.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football2.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football3.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football4.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football6.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football7.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/football9.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/mazee.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/peaceTour.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/peaceTour1.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/peaceTour12.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/peaceTour13.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/peaceTour5.jpeg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day1/peaceTour7.jpeg",
    ],
  },
  {
    day: "Day 2",
    images: [
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peace3.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peace4.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peace6.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peace74.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peaceday.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peaceday2.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peacedayforever.jpg",
      "https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/day2/peacetourday2.jpeg",

    ],
  },
  // Add more days as needed
];

export default function PeaceTournamentDetail() {
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const tabBg = useColorModeValue("gray.50", "gray.700");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <Container maxW="3xl" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        bg={bg}
        borderRadius="md"
        boxShadow="md"
        p={{ base: 4, md: 6 }}
        role="region"
        aria-labelledby="peace-tournament-heading"
      >
        <Image
  src="https://gapsafrica-uganda.s3.us-east-1.amazonaws.com/images/gallery/gapsaContent/peaceTournament/peaceTour2025/marketing.jpeg"
  alt="Peace Tournament 2025 Hero Image"
  borderRadius="md"
  objectFit="cover"
  w="100%"
  maxH="400px"
  mb={6}
  boxShadow="md"
/>

        {/* Top CTAs */}
        <Stack direction={{ base: "column", sm: "row" }} spacing={4} mb={6} aria-label="Top Call To Actions">
          <Button as={RouterLink} to="/donate" colorScheme="blue" aria-label="Donate to Peace Tournament">
            Donate
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="teal" aria-label="Contact the Peace Tournament Team">
            Contact
          </Button>
        </Stack>

        <Heading id="peace-tournament-heading" size="lg" mb={4} color={headingColor}>
          Peace Tournament 2025
        </Heading>

        <VisuallyHidden as="p">
          Detailed description of the Peace Tournament in Nakivale Refugee Camp, Uganda. Focused on sports, music, and unity.
        </VisuallyHidden>

        <Stack spacing={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
          <Text>
            The Peace Tournament Project hosts our 3rd edition of the Peace Tournament in Nakivale Refugee Camp, Uganda, Africa.
            It begins 20th May to 20th June 2025. Donations are welcomed in all forms.
          </Text>

          <Text>
            The Nakivale Community strongly believes that our football, art, and music tournaments align with our mission of promoting solidarity through community service. The youth tournaments bring together the whole community in a spirit of collaboration and competition. Allowing the diverse cultures, languages, and challenges of the Nakivale population into unity.
          </Text>

          <Text>
            The Football Tournaments promote peace through fair play and healthy relating. The Arts and Musical Tournaments showcase and support the talents of refugee children. By fostering social cohesion and promoting peace among refugees, we aim to create an environment that allows children to thrive and find solace away from the stress associated with their displacement.
          </Text>

          {/* Enhanced Tabbed Section */}
        <Tabs variant="soft-rounded" colorScheme="blue" mt={10} isLazy>
          <TabList bg={tabBg} p={2} borderRadius="md" mb={4}>
            {["Objectives", "Importance", "Impact", "Conclusion"].map((label, index) => (
              <Tab
                key={index}
                borderRadius="md"
                _selected={{
                  bg: "blue.500",
                  color: "white",
                  boxShadow: "md",
                  transform: "scale(1.05)",
                }}
                px={4}
                py={2}
                mx={1}
              >
                {label}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Stack spacing={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  <Text>
                    The main objective of organizing the Peace Tournament in the Refugee Community is to provide a platform for refugee families to not only showcase their sporting, musical, and arts’ prowess, but also to promote unity, understanding, and integration within the international community that comprises the Nakivale Settlement.
                  </Text>
                  <UnorderedList spacing={2}>
                    <ListItem>Forge bonds and break down barriers</ListItem>
                    <ListItem>Create a sense of solidarity</ListItem>
                    <ListItem>Host 16 football teams and 8 visual/musical groups</ListItem>
                    <ListItem>Award trophies, medals, equipment, and honors</ListItem>
                  </UnorderedList>
                </Stack>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Stack spacing={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  <Text>
                    The importance of organizing such an event cannot be overstated. Beyond the obvious benefits of physical activity and skill development, we offer community peace culture education sessions covering peace building, conflict resolution, non-violent communication, and inclusion.
                  </Text>
                  <Text>
                    We have also planned engaging games for children from each of the refugee communities of Nakivale for whole families to participate in throughout the event.
                  </Text>
                </Stack>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Stack spacing={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  <Text>
                    Fosters unity among refugee children, builds peaceful relationships, and nurtures community strength through adult role models.
                  </Text>
                  <Text>
                    Over time, supportive dialogue and unity have become the foundation of friendship and trust. The youth observe adults choosing peace, and that plants the seeds of hope.
                  </Text>
                </Stack>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Stack spacing={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  <Text>
                    More than sport—it is a testimony to the strength and resilience of the refugee community. Your support empowers youth to shape a peaceful future.
                  </Text>
                  <Text fontWeight="bold">
                    Thank you for supporting The Alliance for Peace & Solidarity for Africa and the Nakivale Refugee Settlement in Uganda.
                  </Text>
                </Stack>
              </motion.div>
            </TabPanel>
          </TabPanels>
        </Tabs>

          {/* === Photo Gallery === */}
          <Box as="section" mt={10}>
  <Heading size="md" mb={4} color={headingColor}>
    Photo Gallery
  </Heading>

  {galleryByDay.map((group, index) => (
    <Box key={index} mb={8}>
      <Heading as="h3" size="sm" mb={2} color={headingColor}>
        {group.day}
      </Heading>
      <SimpleGrid minChildWidth="150px" spacing={4}>
        {group.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Photo from ${group.day} - ${i + 1}`}
            objectFit="cover"
            borderRadius="md"
            loading="lazy"
            cursor="pointer"
            transition="all 0.2s"
            boxShadow="sm"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
              zIndex: 1,
            }}
            onClick={() => {
              setSelectedImage(src);
              onOpen();
            }}
          />
        ))}
      </SimpleGrid>
    </Box>
  ))}

  <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
    <ModalOverlay />
    <ModalContent bg="blackAlpha.800" maxW="6xl">
      <ModalBody p={4}>
        <Image
          src={selectedImage}
          alt="Enlarged preview"
          mx="auto"
          maxH="80vh"
          borderRadius="md"
        />
      </ModalBody>
    </ModalContent>
  </Modal>
</Box>

        </Stack>

        {/* Bottom CTAs */}
        <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={6} aria-label="Bottom Call To Actions">
          <Button as={RouterLink} to="/contact" colorScheme="green" aria-label="Contact the Peace Tournament Team Again">
            Contact
          </Button>
          <Button as={RouterLink} to="/donate" colorScheme="purple" aria-label="Donate Again to Peace Tournament">
            Donate
          </Button>
        </Stack>
      </MotionBox>
    </Container>
  );
}
