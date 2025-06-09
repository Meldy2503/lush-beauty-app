"use client";

import { Box, Heading, VStack } from "@chakra-ui/react";
import heroImg from "../../assets/images/about-bg.webp";

const AboutHeroSection = () => {
  return (
    <Box
      bgImage={`url(${heroImg.src})`}
      bgPos={"top"}
      bgRepeat="no-repeat"
      height="60vh"
      bgSize="cover"
      mt="10rem"
    >
      <VStack
        textAlign="center"
        px="2rem"
        bg="rgb(0, 0, 0, 0.55)"
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
