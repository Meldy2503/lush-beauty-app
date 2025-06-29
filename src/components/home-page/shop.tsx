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
import Image, { StaticImageData } from "next/image";
import academy1 from "../../assets/images/academy-1.webp";
import academy2 from "../../assets/images/academy-2.webp";
import academy3 from "../../assets/images/academy-3.webp";
import academyBg from "../../assets/images/academy-bg.webp";
import Button from "../ui/button";
import Wrapper from "../ui/wrapper";

interface CardData {
  id: number;
  imageUrl: StaticImageData;
  heading: string;
  amount?: string;
}

const ShopSection = () => {
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
            fontSize={{ base: "10rem", md: "13rem", lg: "16rem" }}
            color="gray.50"
            fontFamily="allura"
            fontWeight="300"
            lineHeight={{ base: 0.8, md: 0.4 }}
          >
            Our Store
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
            fontFamily="playfair"
            color="white"
            mt={{ base: "4rem", md: "7rem" }}
            mb="2rem"
          >
            SHOP NOW
          </Heading>
          <Text maxW="450px" mx="auto" mb="5rem">
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
              <VStack>
                <Heading
                  as="h4"
                  color="white"
                  mt={{ base: "1rem", md: "2rem" }}
                  fontSize="1.7rem"
                >
                  {card.heading}
                </Heading>
                <Text color="yellow.50" textAlign="center" fontWeight={"500"}>
                  {card.amount}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
        <Flex mt="6rem" alignItems={"center"} justifyContent={"center"}>
          <Button href="/services" bg="yellow.150">
            See All
          </Button>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default ShopSection;

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
