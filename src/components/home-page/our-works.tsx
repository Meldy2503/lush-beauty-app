"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ourWorkImg1 from "../../assets/images/our-works-1.webp";
import ourWorkImg2 from "../../assets/images/our-works-7.webp";
import ourWorkImg3 from "../../assets/images/our-works-3.webp";
import ourWorkImg4 from "../../assets/images/our-works-4.webp";
import ourWorkImg5 from "../../assets/images/our-works-5.webp";
import ourWorkImg6 from "../../assets/images/our-works-6.webp";

interface ourWorksCardData {
  id: number;
  imageUrl: StaticImageData;
}

const OurWorkSection = () => {
  return (
    <Box
      width="100%"
      data-testid="our-works-section"
      pb="3rem"
      pt={{ base: "7rem", md: "13rem" }}
    >
      <VStack textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "10rem", md: "13rem", lg: "16rem" }}
          color="yellow.100"
          fontFamily="allura"
          fontWeight="300"
          lineHeight={{ base: 0.6, md: 0.4 }}
        >
          Follow our{" "}
        </Heading>
        <Text
          mx="auto"
          fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
          fontFamily={"playfair"}
          mt="2.5rem"
        >
          LATEST WORK{" "}
        </Text>
      </VStack>
      <HStack
        direction="row"
        gap="1rem"
        alignItems="center"
        justifyContent="center"
        pb="3rem"
        mt="1rem"
        borderBottomWidth="10px"
        borderBottomColor="yellow.100"
      >
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            as={FaFacebook}
            boxSize="2.5rem"
            _hover={{ color: "yellow.50" }}
            transition="all 0.3s ease"
          />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            as={FaInstagram}
            boxSize="2.5rem"
            _hover={{ color: "yellow.50" }}
            transition="all 0.3s ease"
          />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            as={FaTwitter}
            boxSize="2.5rem"
            _hover={{ color: "yellow.50" }}
            transition="all 0.3s ease"
          />
        </Link>
      </HStack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={0}
      >
        {OurWorksData.map((works) => {
          return (
            <GridItem
              key={works.id}
              minH={{ base: "280px", md: "320px", lg: "350px" }}
              bg={`url(${works.imageUrl?.src})`}
              backgroundSize="cover"
              backgroundPosition="center"
              borderWidth={{
                base: "0px 10px 10px 10px",
                md: "0px 5px 10px 5px",
              }}
              borderColor="yellow.100"
              position="relative"
              color="white"
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurWorkSection;

const OurWorksData: ourWorksCardData[] = [
  {
    id: 1,
    imageUrl: ourWorkImg4,
  },
  {
    id: 2,
    imageUrl: ourWorkImg5,
  },
  {
    id: 3,
    imageUrl: ourWorkImg6,
  },
  {
    id: 4,
    imageUrl: ourWorkImg1,
  },
  {
    id: 5,
    imageUrl: ourWorkImg3,
  },
  {
    id: 6,
    imageUrl: ourWorkImg2,
  },
];
