"use client";

import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import academy1 from "../../assets/images/academy-1.webp";
import academy2 from "../../assets/images/academy-2.webp";
import academy3 from "../../assets/images/academy-3.webp";
import academyBg from "../../assets/images/academy-bg.webp";
import Button from "../button";
import Wrapper from "../wrapper";

interface CardData {
  id: number;
  imageUrl: StaticImageData;
  heading: string;
  amount?: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: academy1,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 2,
    imageUrl: academy2,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 3,
    imageUrl: academy3,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 4,
    imageUrl: academy1,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
];

const OurStoreSection = () => {
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
            fontSize={{ base: "7rem", md: "8rem", lg: "10rem" }}
            color="gray.50"
            fontFamily="pinyon"
            fontWeight="300"
            lineHeight={1}
          >
            Our Store
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3rem", md: "4rem" }}
            fontFamily="playfair"
            color="white"
            mt="3rem"
          >
            SHOP NOW
          </Heading>
          <Text maxW="400px" mx="auto" mb="5rem">
            Your go-to destination for premium beauty products that enhance your
            natural radiance.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="4rem 2rem"
        >
          {cardData.map((card) => (
            <GridItem key={card.id} w="100%">
              <Image
                src={card.imageUrl}
                alt={card.heading}
                style={{ position: "relative" }}
                width={1000}
                height={1000}
              />
              <VStack fontSize="2rem">
                <Heading as="h4" fontFamily="playfair" color="white" mt={{base: "1rem", md: "2rem"}}>
                  {card.heading}
                </Heading>
                <Text color="yellow.50" textAlign="center">
                  {card.amount}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
        <Box textAlign="center" mt="6rem">
          <Button href="/services" px="5rem">
            See All
          </Button>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default OurStoreSection;
