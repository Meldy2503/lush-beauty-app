"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ctaImg from "../../assets/images/services-cta.webp";
import Button from "../button";

const CtaSection = () => {
  return (
    <Box
      bgImage={`url(${ctaImg.src})`}
      backgroundPosition="top"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <VStack
        textAlign="center"
        bg="rgb(0, 0, 0, 0.65)"
        color="white"
        pb={{ base: "10rem", md: "15rem" }}
        pt={{ base: "10rem", md: "15rem" }}
        px="2rem"
      >
        <Heading
          as="h2"
          fontSize={{ base: "2rem", md: "2.5rem" }}
          color="yellow.50"
          fontFamily="playfair"
          fontWeight="300"
          lineHeight={1}
        >
          Your Beauty, Our Passion
        </Heading>
        <Heading
          as="h3"
          fontSize={{ base: "4rem", md: "5rem" }}
          fontFamily="playfair"
          color="white"
          mt="3rem"
          lineHeight={1.3}
        >
          Book a Luxurious Service Today
        </Heading>
        <Text maxW="500px" mx="auto" mb="4rem" mt='1rem'>
          Discover tailored treatments and expert care designed to leave you
          glowing. Your beauty journey starts here.
        </Text>
        <Button href="/services" px="5rem" bg="yellow.100">
          Book Now
        </Button>
      </VStack>
    </Box>
  );
};

export default CtaSection;
