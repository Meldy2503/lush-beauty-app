"use client";

import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import SocialMediaIcons from "../ui/social-media-icons";
import Button from "../ui/button";
import Logo from "../ui/logo";
import Wrapper from "../ui/wrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper bg="black" color="white">
      <Flex
        justifyContent={"space-between"}
        width={"100%"}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "5rem", lg: "1rem" }}
      >
        <Stack
          direction="column"
          gap="2rem"
          alignItems="flex-start"
          width={{ base: "100%", lg: "30%" }}
        >
          {/* logo and description */}
          <Logo />
          <Text
            fontSize="1.5rem"
            lineHeight="1.8"
            fontWeight="300"
            width={{ base: "90%", lg: "70%" }}
          >
            Lush Beauty offers premium beauty services and products to help you
            look and feel your best every day.
          </Text>
          <SocialMediaIcons />
        </Stack>
        <Flex
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          justify={"space-between"}
          gap={{ base: "4rem", lg: "2rem" }}
          width={{ base: "100%", lg: "65%" }}
        >
          {/* Quick Links */}
          <Stack
            direction="column"
            gap="2rem"
            alignItems="flex-start"
            w={{ base: "100%", md: "25%" }}
          >
            <Heading
              as="h3"
              fontSize="1.8rem"
              fontFamily="playfair"
              fontWeight="700"
              mb="1rem"
              color="yellow.50"
              lineHeight={1.4}
            >
              QUICK LINKS
            </Heading>
            <Link href="/" passHref>
              <Text
                fontSize="1.5rem"
                _hover={{
                  fontWeight: "500",
                  color: "yellow.50",
                }}
                transition="all 0.2s ease"
                mb="1rem"
              >
                Home
              </Text>
            </Link>
            <Link href="/about-us" passHref>
              <Text
                fontSize="1.5rem"
                _hover={{
                  fontWeight: "500",
                  color: "yellow.50",
                }}
                transition="all 0.2s ease"
                mb="1rem"
              >
                About Us
              </Text>
            </Link>
            <Link href="/services" passHref>
              <Text
                fontSize="1.5rem"
                _hover={{
                  fontWeight: "500",
                  color: "yellow.50",
                }}
                transition="all 0.2s ease"
                mb="1rem"
              >
                Services
              </Text>
            </Link>
            <Link href="/shop" passHref>
              <Text
                fontSize="1.5rem"
                _hover={{
                  fontWeight: "500",
                  color: "yellow.50",
                }}
                transition="all 0.2s ease"
                mb="1rem"
              >
                Shop
              </Text>
            </Link>
            <Link href="/contact-us" passHref>
              <Text
                fontSize="1.5rem"
                _hover={{
                  fontWeight: "500",
                  color: "yellow.50",
                }}
                transition="all 0.2s ease"
              >
                Contact Us
              </Text>
            </Link>
          </Stack>

          {/* Contact Info */}
          <Stack
            direction="column"
            gap="2rem"
            alignItems="flex-start"
            w={{ base: "100%", md: "35%" }}
          >
            <Heading
              as="h3"
              fontSize="1.8rem"
              fontFamily="playfair"
              fontWeight="700"
              mb="1rem"
              color="yellow.50"
              lineHeight={1.4}
            >
              CONTACT INFO
            </Heading>
            <Stack direction="row" gap="1rem">
              <Box as={MdLocationOn} boxSize="2.2rem" color="yellow.50" />
              <Text fontSize="1.5rem" width={{ base: "100%", md: "65%" }}>
                123 Beauty Lane, Lush City, LC 12345
              </Text>
            </Stack>
            <Stack direction="row" gap="1rem">
              <Box as={MdPhone} boxSize="2.2rem" color="yellow.50" />
              <Text fontSize="1.5rem">+1 (555) 123-4567</Text>
            </Stack>
            <Stack direction="row" gap="1rem">
              <Box as={MdEmail} boxSize="2.2rem" color="yellow.50" />
              <Text fontSize="1.5rem">info@lushbeauty.com</Text>
            </Stack>
            <Text fontWeight="600" mt="1rem" fontFamily="playfair">
              Opening Hours:
            </Text>
            <Text fontSize="1.5rem" mt="-1rem">
              Mon - Sat: 9:00 AM - 8:00 PM
            </Text>
            <Text fontSize="1.5rem" mt="-1rem">
              Sunday: Closed
            </Text>
          </Stack>

          {/* Newsletter */}
          <Stack
            direction="column"
            gap="2rem"
            alignItems="flex-start"
            w={{ base: "100%", lg: "40%" }}
          >
            <Heading
              as="h3"
              fontSize="1.8rem"
              fontWeight="700"
              fontFamily="playfair"
              mb="1rem"
              color="yellow.50"
              lineHeight={1.4}
            >
              SUBSCRIBE FOR NEWSLETTER
            </Heading>
            <Text fontSize="1.5rem" lineHeight="1.8">
              Stay updated with our latest beauty tips, promotions, and new
              services.
            </Text>
            <Flex
              direction={{ base: "column", sm: "row", lg: "column" }}
              gap="1.5rem"
              w="100%"
              alignItems={"center"}
            >
              <Input
                placeholder="Your email address"
                fontSize="1.5rem"
                p="2rem"
                borderColor="white"
                borderRadius={"0"}
                bg="white"
                w="100%"
                color="black"
                _hover={{ borderColor: "yellow.50" }}
                _focus={{ borderColor: "yellow.50" }}
              />
              <Button
                px="1rem"
                py="2rem"
                bg="yellow.150"
                w={{ base: "full", sm: "fit-content", lg: "full" }}
              >
                Subscribe
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "center" }}
        textAlign={{ base: "center", md: "left" }}
        gap={{ base: "2rem", md: "0" }}
        borderTopColor={"white"}
        borderTopWidth="1px"
        mt="5rem"
        pt="2rem"
      >
        <Text fontSize="1.5rem" fontWeight="300">
          © {currentYear} Lush & Luxe Beauty. All rights reserved.
        </Text>
        <Stack direction="row" gap="2rem">
          <Link href="/privacy-policy" passHref>
            <Text
              fontSize="1.5rem"
              _hover={{ textDecoration: "underline", color: "yellow.50" }}
            >
              Privacy Policy
            </Text>
          </Link>
          <Link href="/terms-of-service" passHref>
            <Text
              fontSize="1.5rem"
              _hover={{ textDecoration: "underline", color: "yellow.50" }}
            >
              Terms of Service
            </Text>
          </Link>
        </Stack>
      </Flex>
    </Wrapper>
  );
};

export default Footer;
