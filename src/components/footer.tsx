"use client";

import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Button from "./button";
import Logo from "./logo";
import Wrapper from "./wrapper";

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
            fontSize="1.4rem"
            lineHeight="1.8"
            fontWeight="300"
            width={{ base: "90%", lg: "70%" }}
          >
            Lush Beauty offers premium beauty services and products to help you
            look and feel your best every day.
          </Text>
          <Stack direction="row" gap="1.5rem">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                as={FaFacebook}
                boxSize="2.5rem"
                color="white"
                _hover={{ color: "yellow.50" }}
                transition="all 0.3s ease"
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                as={FaInstagram}
                boxSize="2.5rem"
                color="white"
                _hover={{ color: "yellow.50" }}
                transition="all 0.3s ease"
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                as={FaTwitter}
                boxSize="2.5rem"
                color="white"
                _hover={{ color: "yellow.50" }}
                transition="all 0.3s ease"
              />
            </Link>

            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                as={FaTiktok}
                boxSize="2.5rem"
                color="white"
                _hover={{ color: "yellow.50" }}
                transition="all 0.3s ease"
              />
            </Link>
          </Stack>
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
            >
              QUICK LINKS
            </Heading>
            <Link href="/" passHref>
              <Text
                fontSize="1.45rem"
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
                fontSize="1.45rem"
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
                fontSize="1.45rem"
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
                fontSize="1.45rem"
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
                fontSize="1.45rem"
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
            >
              CONTACT INFO
            </Heading>
            <Stack direction="row" gap="1rem">
              <Box as={MdLocationOn} boxSize="2.2rem" color="yellow.50" />
              <Text fontSize="1.45rem" width={{ base: "100%", md: "65%" }}>
                123 Beauty Lane, Lush City, LC 12345
              </Text>
            </Stack>
            <Stack direction="row" gap="1rem">
              <Box as={MdPhone} boxSize="2.2rem" color="yellow.50" />
              <Text fontSize="1.45rem">+1 (555) 123-4567</Text>
            </Stack>
            <Stack direction="row" gap="1rem">
              <Box as={MdEmail} boxSize="2.2rem" color="yellow.50" />
              <Text fontSize="1.45rem">info@lushbeauty.com</Text>
            </Stack>
            <Text fontWeight="600" mt="1rem" fontFamily="playfair">
              Opening Hours:
            </Text>
            <Text fontSize="1.45rem" mt="-1rem">
              Mon - Sat: 9:00 AM - 8:00 PM
            </Text>
            <Text fontSize="1.45rem" mt="-1rem">
              Sunday: 10:00 AM - 6:00 PM
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
            >
              SUBSCRIBE FOR NEWSLETTER
            </Heading>
            <Text fontSize="1.45rem" lineHeight="1.8">
              Stay updated with our latest beauty tips, promotions, and new
              services.
            </Text>
            <Flex
              direction={{ base: "row", lg: "column" }}
              gap="1.5rem"
              w={{ base: "100%", lg: "100%" }}
            >
              <Input
                placeholder="Your email address"
                size="lg"
                fontSize="1.4rem"
                p="1rem"
                borderColor="gray.50"
                bg="gray.800"
                w={{ base: "60%", lg: "100%" }}
                color="black"
                _hover={{ borderColor: "yellow.50" }}
                _focus={{ borderColor: "yellow.50", bg: "gray.800" }}
              />
              <Button px="1rem" py=".8rem" bg="yellow.150">
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
        <Stack direction="row" gap="2rem" fontSize="1.3rem">
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
