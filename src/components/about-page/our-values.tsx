"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import valueIcon1 from "../../assets/images/about-2.svg";
import valueIcon2 from "../../assets/images/about-3.svg";
import valueIcon3 from "../../assets/images/about-4.svg";
import valueIcon4 from "../../assets/images/about-5.svg";
import Wrapper from "../ui/wrapper";

interface ValueDataType {
  id: number;
  imageUrl: StaticImageData;
  heading: string;
  bodyText: string;
}

const OurValueSection = () => {
  return (
    <Wrapper pt={{ base: "1rem", md: "3rem" }}>
      <Box mb={{ base: "3rem", md: "6rem" }}>
        <Heading
          color={"yellow.100"}
          fontFamily={"playfair"}
          fontSize={{ base: "1.8rem", md: "2rem" }}
          textAlign={"center"}
          mb="1.5rem"
        >
          OUR VALUES
        </Heading>
        <Heading
          as="h3"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          fontFamily="playfair"
          my={"2rem"}
          lineHeight={1.3}
          textAlign={"center"}
        >
          THE WORK VALUES WE THRIVE FOR
        </Heading>
        <Text
          textAlign={"center"}
          w={{ base: "100%", md: "80%", lg: "68%" }}
          mx="auto"
        >
          At the heart of Lush & Luxe is a deep commitment to excellence,
          integrity, and authenticity. We don&apos;t just provide beauty
          services — we build trust, uplift self-confidence, and create spaces
          where people feel celebrated. These values guide everything we do,
          shaping the way we serve our clients and each other.
        </Text>
      </Box>

      <Flex
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={{ base: "2.5rem", lg: "4rem" }}
        position={"relative"}
      >
        <Box
          h="1px"
          w="100%"
          bg="gray.200"
          position={"absolute"}
          top={{ base: "0", md: "50%" }}
          display={{ base: "none", md: "block" }}
        />
        <Box
          h="100%"
          w="1px"
          bg="gray.200"
          position={"absolute"}
          left={{ base: "0", md: "50%" }}
          display={{ base: "none", md: "block" }}
        />

        {valueData.map((values) => {
          return (
            <Flex key={values.id} w={{ base: "100%", md: "47%" }} gap="2rem">
              <Image
                src={values.imageUrl}
                alt="image of the beauty salon owners"
                width={90}
                height={90}
              />
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "1.7rem", md: "1.8rem" }}
                  fontFamily="playfair"
                  lineHeight={1.3}
                  textTransform={"uppercase"}
                  pt={{ base: "0", md: values.id >= 3 ? "2rem" : "0" }}
                >
                  {values.heading}
                </Heading>
                <Text mt=".5rem">{values.bodyText}</Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default OurValueSection;

const valueData: ValueDataType[] = [
  {
    id: 1,
    imageUrl: valueIcon1,
    heading: "Passion for Beauty",
    bodyText:
      "We live and breathe beauty. Our team is genuinely passionate about helping clients feel their best — and it shows in every brushstroke, every smile, and every result.",
  },
  {
    id: 2,
    imageUrl: valueIcon2,
    heading: "Client-Centered Care",
    bodyText:
      "Your comfort, style, and satisfaction come first. We listen carefully, customize every service, and go above and beyond to ensure every guest feels valued",
  },
  {
    id: 3,
    imageUrl: valueIcon3,
    heading: "Continuous Growth",
    bodyText:
      "We believe in mastering our craft. Through ongoing education and staying on top of trends, we’re always evolving to offer the highest quality and most innovative services.",
  },
  {
    id: 4,
    imageUrl: valueIcon4,
    heading: "Intergrity in Service",
    bodyText:
      "From the products we use to the promises we keep, we value honesty, transparency, and consistency. We show up with excellence — every client, every time.",
  },
];
