"use client";

import {
    Box,
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";


const ContactDetails = () => {
  return (
    <Flex w={{ base: "100%", md: "35%" }} flexDir={"column"} gap="2rem">
      <Box>
        <Heading
          as="h3"
          fontFamily="playfair"
          mb={3}
          fontWeight={"600"}
          fontSize="1.7rem"
        >
          Working Hours{" "}
        </Heading>{" "}
        <Text lineHeight={1.4}>Monday – Saturday: 9:00 AM – 8:00 PM</Text>
        <Text pt="1rem">Sunday: Closed</Text>
      </Box>
      <Box>
        <Heading
          as="h3"
          fontFamily="playfair"
          mb={3}
          fontWeight={"600"}
          fontSize="1.7rem"
        >
          Location{" "}
        </Heading>{" "}
        <Text lineHeight={1.4}>
          125 Kingsway, London WC2B 6NH, United Kingdom
        </Text>
      </Box>

      <Box>
        <Heading
          as="h3"
          fontFamily="playfair"
          mb={3}
          fontWeight={"600"}
          fontSize="1.7rem"
        >
          Email{" "}
        </Heading>{" "}
        <Text>hello@lushluxe.co.uk</Text>
      </Box>
      <Box>
        <Heading
          as="h3"
          fontFamily="playfair"
          mb={3}
          fontWeight={"600"}
          fontSize="1.7rem"
        >
          Call Us{" "}
        </Heading>{" "}
        <Text>+44 20 1234 5678</Text>
      </Box>
    </Flex>
  );
};

export default ContactDetails;
