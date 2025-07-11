"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import aboutImg from "../../assets/images/about-1.webp";
import Wrapper from "../shared/wrapper";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <Wrapper>
      <Box mb="3rem">
        <Heading
          color={"yellow.100"}
          fontFamily={"playfair"}
          fontSize={{ base: "1.8rem", md: "2rem" }}
          textAlign={"center"}
          mb="1.5rem"
        >
          OUR STORY
        </Heading>
        <Heading
          as="h3"
          fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
          fontFamily="playfair"
          my={"2rem"}
          lineHeight={1.3}
          textAlign={"center"}
        >
          HOW WE STARTED{" "}
        </Heading>
        <Text
          textAlign={"center"}
          w={{ base: "100%", md: "80%", lg: "68%" }}
          mx="auto"
        >
          Lush & Luxe began as a dream between two friends who believed beauty
          should feel as luxurious as it looks. What started as a passion
          project in a cozy studio has blossomed into a full-service beauty
          haven where relaxation meets transformation. With a commitment to
          personalized care, expert artistry, and a warm, welcoming atmosphere,
          Lush & Luxe was created to help every guest feel confident, radiant,
          and effortlessly beautiful.
        </Text>
      </Box>

      <Image
        src={aboutImg}
        alt="image of the beauty salon owners"
        width={1500}
        height={1500}
      />
    </Wrapper>
  );
};

export default OurStorySection;
