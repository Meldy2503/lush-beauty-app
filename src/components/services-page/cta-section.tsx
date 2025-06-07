"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import academyBg from "../../assets/images/services-cta.webp";
import Button from "../button";
import Wrapper from "../wrapper";

const CtaSection = () => {
  return (
    <Box
      bgImage={`url(${academyBg.src})`}
      backgroundPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Wrapper
        bg="rgb(0, 0, 0, 0.65)"
        color="white"
        pb={{ base: "10rem", md: "13rem" }}
        pt={{ base: "10rem", md: "13rem" }}
      >
        <VStack textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "2rem", md: "2.5rem" }}
            color="yellow.50"
            fontFamily="pinyon"
            fontWeight="300"
            lineHeight={1}
          >
            Your Beauty, Our Passion
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3rem", md: "4rem" }}
            fontFamily="playfair"
            color="white"
            mt="3rem"
          >
            Book a Luxurious Service Today
          </Heading>
          <Text maxW="500px" mx="auto" mb="4rem">
            Discover tailored treatments and expert care designed to leave you
            glowing. Your beauty journey starts here.
          </Text>
          <Button href="/services" px="5rem" bg="yellow.100">
            Book Now
          </Button>
        </VStack>
      </Wrapper>
    </Box>
  );
};

export default CtaSection;
