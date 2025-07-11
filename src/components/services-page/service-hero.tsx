"use client";

import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import salonImg from "../../assets/images/salon-img.webp";
import Wrapper from "../shared/wrapper";
import Button from "../shared/button";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ContactUsModal from "../contact-us/contact-modal";

const ServiceHeroSection = () => {
  return (
    <>
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
            lineHeight={{ base: 0.7, md: 0.4 }}
            pt="9rem"
          >
            Our Services
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3rem", md: "4rem" }}
            fontFamily="playfair"
            color="white"
            mt={{ base: "1rem", md: "3rem" }}
            lineHeight={1.4}
          >
            EXPERIENCE BEAUTY & LUXURY
          </Heading>
        </VStack>
      </Box>
      <Wrapper pt="6rem" pb="0">
        <Box>
          <Text
            fontWeight={"600"}
            color={"yellow.100"}
            fontFamily={"playfair"}
            fontSize={{ base: "1.8rem", md: "2rem" }}
            textAlign={"center"}
            mb="1.5rem"
          >
            SERVICES WE OFFER
          </Text>
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
            mt="3rem"
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
            <ContactUsModal />
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};

export default ServiceHeroSection;
