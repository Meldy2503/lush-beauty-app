"use client";

import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import heroImg from "../../assets/images/services-bg.webp";
import Wrapper from "../wrapper";
import Button from "../button";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ServiceHeroSection = () => {
  return (
    <>
      <Box
        bgImage={`url(${heroImg.src})`}
        backgroundPosition="top center"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        height="60vh"
        bgSize="cover"
        mt="5rem"
      >
        <VStack
          textAlign="center"
          px="2rem"
          bg="rgb(0, 0, 0, 0.5)"
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
            Our Services
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3rem", md: "4rem" }}
            fontFamily="playfair"
            color="white"
            mt={{ base: "2rem", md: "3rem" }}
            lineHeight={1.4}
          >
            Experience Beauty & Luxury{" "}
          </Heading>
        </VStack>
      </Box>
      <Wrapper pt="6rem" pb="0">
        <Box>
          <Text
            textAlign={"center"}
            w={{ base: "100%", md: "80%", lg: "60%" }}
            mx="auto"
          >
            At Lush & Luxe, we offer a complete range of beauty services to fit
            your needs. From hair styling, to facial skin care, to body massage,
            manicures, pedicures and more, we are your all-in-one resource for a
            beautiful new you. come and experience it today!
          </Text>
          <Flex
            alignItems={"center"}
            gap={{ base: "1rem", sm: "3rem" }}
            mt="5rem"
            justifyContent={"center"}
          >
            <Button
              href="/services"
              bg="black"
              color="white"
              px={{ base: "2rem", sm: "5rem" }}
            >
              <HStack gap={{ base: ".5rem", sm: "1rem" }}>
                <IoChatbubbleEllipsesOutline />
                <Text>Let&apos;s Chat</Text>
              </HStack>
            </Button>
            <Button
              px={{ base: "2rem", sm: "5rem" }}
              href="/services"
              bg="black"
              color="white"
            >
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};

export default ServiceHeroSection;
