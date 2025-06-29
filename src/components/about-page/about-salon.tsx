"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import aboutImg1 from "../../assets/images/about-6.webp";
import aboutImg2 from "../../assets/images/about-7.webp";
import aboutImg3 from "../../assets/images/about-8.webp";
import Wrapper from "../ui/wrapper";

const AboutSalonSection = () => {
  return (
    <Wrapper pt={{ base: "1rem", md: "5rem" }}>
      <Flex gap="2rem" flexDir={{ base: "column", md: "row" }} align="stretch">
        {/* Left content */}
        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Heading
              color="yellow.100"
              fontFamily="playfair"
              fontSize={{ base: "1.8rem", md: "2rem" }}
              mb="1.5rem"
            >
              ABOUT SALON
            </Heading>
            <Heading
              as="h3"
              fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
              fontFamily="playfair"
              my="1.5rem"
              lineHeight={1.3}
            >
              WE ENJOY WHAT WE DO
            </Heading>
            <Text mb="1.5rem">
              At Lush & Luxe, beauty is more than skin deep — it&apos;s an
              experience. From the moment you step through our doors,
              you&apos;re greeted with warmth, attentiveness, and care. Our team
              of skilled stylists and beauty specialists take pride in what they
              do, combining creativity and expertise to craft looks that elevate
              your natural beauty. Every detail, every service, and every moment
              is designed to make you feel pampered, polished, and truly seen.
            </Text>
          </Box>

          <Box mt="auto">
            <Image
              src={aboutImg2}
              alt="image of the beauty salon owners"
              width={1500}
              height={1500}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>

        {/* Right content */}
        <Flex
          w={{ base: "100%", md: "50%" }}
          flexDir="column"
          justifyContent="space-between"
          gap="2rem"
        >
          <Box>
            <Image
              src={aboutImg1}
              alt="salon view 1"
              width={1500}
              height={1500}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Image
              src={aboutImg3}
              alt="salon view 2"
              width={1500}
              height={1500}
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default AboutSalonSection;
