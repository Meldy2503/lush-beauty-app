"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import academy1 from "../../assets/images/academy-1.webp";
import academy2 from "../../assets/images/academy-2.webp";
import academy3 from "../../assets/images/academy-3.webp";
import academy4 from "../../assets/images/academy-4.webp";
import academy5 from "../../assets/images/academy-5.webp";
import academy6 from "../../assets/images/academy-6.webp";
import academyBg from "../../assets/images/academy-bg.webp";
import Button from "../ui/button";
import Wrapper from "../ui/wrapper";

interface CardDataType {
  id: number;
  imageUrl: StaticImageData;
  heading: string;
  bodyText: string;
}

const HomeCtaSection = () => {
  return (
    <Box
      bgImage={`url(${academyBg.src})`}
      backgroundPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Wrapper bg="rgb(0, 0, 0, 0.3)" color="white" pb="10rem">
        <VStack textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3rem", md: "4rem", lg: "5rem" }}
            fontFamily="playfair"
            color="white"
          >
            LUSH & LUXE
          </Heading>
          <Text maxW="500px" mx="auto" my="5rem">
            Indulge in unparalleled luxury. Discover a world of exquisite beauty
            treatments tailored just for you
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: "2rem", md: "3rem" }}
        >
          {cardData.map((card) => (
            <GridItem key={card.id} w="100%">
              <Flex
                direction="column"
                position="relative"
                backgroundImage={`url(${card.imageUrl.src})`}
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="md"
                overflow="hidden"
                boxShadow="lg"
                h="100%"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="yellow.100"
                  opacity="0.75"
                  zIndex="0"
                />

                {/* Content Wrapper */}
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  p={{ base: "1.5rem", lg: "3rem" }}
                  position="relative"
                  zIndex="1"
                  h="100%"
                  color="black"
                >
                  <VStack gap="1rem" alignItems="flex-start" flexGrow={1}>
                    <Heading
                      as="h3"
                      fontSize={{ base: "2rem", md: "2.3rem" }}
                      fontFamily="playfair"
                      fontWeight="600"
                    >
                      {card.heading}
                    </Heading>
                    <Box pb="5rem" pt="1rem">
                      <Text fontWeight="400">{card.bodyText}</Text>
                    </Box>
                  </VStack>

                  <Button href="/services" bg="black" color="white">
                    Learn More
                  </Button>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Wrapper>
    </Box>
  );
};

export default HomeCtaSection;

const cardData: CardDataType[] = [
  {
    id: 1,
    imageUrl: academy1,
    heading: "Makeup and Skincare",
    bodyText: "Bespoke makeup artistry, Luxurious, glowing skincare.",
  },
  {
    id: 2,
    imageUrl: academy2,
    heading: "Nail Art & Technology",
    bodyText: "Exquisite nail designs, Meticulous care, latest tech.",
  },
  {
    id: 3,
    imageUrl: academy3,
    heading: "Facial Treatments",
    bodyText: "Advanced facial therapies, Restore balance, reveal glow.",
  },
  {
    id: 4,
    imageUrl: academy4,
    heading: "Hair Styling & Design",
    bodyText: "Precision cuts, vibrant color, Chic styling, elegant updos.",
  },
  {
    id: 5,
    imageUrl: academy5,
    heading: "Lash and Eyebrow Treatment",
    bodyText: "Sculpted brows, luscious lashes, Captivating, beautiful eyes.",
  },
  {
    id: 6,
    imageUrl: academy6,
    heading: "Holistic Wellness & Beauty",
    bodyText: "Serene wellness therapies, Nourishing, natural treatments.",
  },
];
