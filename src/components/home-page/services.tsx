"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import Button from "../button";
import serviceImg1 from "../../assets/images/service-1.webp";
import serviceImg2 from "../../assets/images/service-2.webp";
import serviceImg3 from "../../assets/images/service-3.webp";
import serviceImg4 from "../../assets/images/academy-2.webp";

interface ServiceCardData {
  id: number;
  imageUrl?: StaticImageData;
  heading: string;
}

const servicesData: ServiceCardData[] = [
  {
    id: 1,
    imageUrl: serviceImg1,
    heading: "HAIR STYLING & CUTS",
  },
  {
    id: 2,
    heading: "HAIR COLORING",
  },
  {
    id: 3,
    imageUrl: serviceImg4,
    heading: "MANICURE & PEDICURE",
  },
  {
    id: 4,
    heading: "LASH & BROW ARTISTRY",
  },
  {
    id: 5,
    heading: "WAX & HAIR REMOVAL",
  },
  {
    id: 6,
    imageUrl: serviceImg3,
    heading: "FACIAL TREATMENTS",
  },
  {
    id: 7,
    heading: "EYE LASH EXTENSIONS",
  },
  {
    id: 8,
    imageUrl: serviceImg2,
    heading: "MASSAGE THERAPY",
  },
];

const ServicesSection = () => {
  return (
    <Box
      width="100%"
      data-testid="services-section"
      pt={{ base: "7rem", md: "12rem" }}
    >
      <VStack gap={{ base: "2rem", md: "3rem" }} textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "10rem", md: "13rem", lg: "16rem" }}
          color="yellow.100"
          fontFamily="allura"
          fontWeight="300"
          lineHeight={{ base: 0.8, md: 0.4 }}
        >
          Services
        </Heading>
        <Text
          mx="auto"
          mb="3.5rem"
          fontSize={{ base: "2.5rem", md: "3rem" }}
          fontFamily={"playfair"}
        >
          SERVICE MENU
        </Text>
      </VStack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={0}
      >
        {servicesData.map((service, index) => {
          const isFirstRow = index < 4;
          let isImageCardPattern;
          if (isFirstRow) {
            isImageCardPattern = index % 2 === 0;
          } else {
            isImageCardPattern = (index - 4) % 2 !== 0;
          }

          const finalIsImageCard = isImageCardPattern && service.imageUrl;

          return (
            <GridItem
              key={service.id}
              minH={{ base: "280px", md: "320px", lg: "350px" }}
              bg={
                finalIsImageCard
                  ? `url(${service.imageUrl?.src})`
                  : "yellow.100"
              }
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative"
              color="white"
              _hover={
                finalIsImageCard
                  ? {
                      transform: "scale(1.02)",
                      transition: "transform 0.3s ease-in-out",
                    }
                  : {}
              }
            >
              {finalIsImageCard && (
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="rgba(0,0,0,0.45)"
                  zIndex="0"
                  transition="background-color 0.3s ease-in-out"
                  _hover={{ bg: "rgba(0,0,0,0.6)" }}
                />
              )}
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                h="100%"
                p={{ base: 4, md: 6, lg: 8 }}
                position="relative"
                gap="3rem"
                zIndex="1"
              >
                <Heading
                  as="h3"
                  fontSize={{ base: "1.8rem", md: "2.5rem" }}
                  fontFamily="playfair"
                  mb={3}
                  border={service.imageUrl ? "1.5px solid white" : "none"}
                  p={service.imageUrl ? "2rem 1.5rem" : 0}
                >
                  {service.heading}
                </Heading>

                <Button fontSize="1.9rem" bg="transparent">
                  Book Now
                </Button>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
