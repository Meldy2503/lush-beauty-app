"use client";

import { Box, Heading, VStack } from "@chakra-ui/react";
import salonImg from "../../assets/images/visit-us.webp";

const AboutHeroSection = () => {
  return (
    <Box
      bgImage={`url(${salonImg.src})`}
      bgPos={"center"}
      bgRepeat="no-repeat"
      height={{ base: "65vh", "2xl": "50vh" }}
      bgSize="cover"
    >
      <VStack
        textAlign="center"
        px="2rem"
        bg="rgb(0, 0, 0, 0.6)"
        color="white"
        height={"100%"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          as="h2"
          fontSize={{ base: "10rem", md: "13rem", lg: "16rem" }}
          color="gray.50"
          fontFamily="allura"
          fontWeight="300"
          lineHeight={{ base: 0.8, md: 0.4 }}
          pt="9rem"
        >
          About Us
        </Heading>
        <Heading
          as="h3"
          fontSize={{ base: "3rem", md: "4rem" }}
          fontFamily="playfair"
          color="white"
          mt={{ base: "1rem", md: "3rem" }}
          lineHeight={1.4}
        >
          LUSH & LUXE
        </Heading>
      </VStack>
    </Box>
  );
};

export default AboutHeroSection;
