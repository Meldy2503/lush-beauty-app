"use client";

import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import groupBookingImg from "../../assets/images/group-booking-img.webp";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";
import { useState } from "react";

const BookingType = () => {
  const [bookingType, setBookingType] = useState("");
console.log(bookingType);
  return (
    <Box>
      <Heading
        as="h3"
        fontSize={{ base: "2rem", md: "2.2rem" }}
        fontFamily="playfair"
        mb='2rem'
        lineHeight={1.3}
      >
        SELECT APPOINTMENT TYPE
      </Heading>
      <Flex gap="2rem" flexDir={{ base: "column", lg: "row" }}>
        <Box
          bg="white"
          p="2rem"
          borderColor={bookingType === "personal" ? "yellow.100" : "white"}
          borderWidth={"2px"}
          _hover={{ borderColor: "yellow.100" }}
          onClick={() => setBookingType("personal")}
        >
          <Image
            src={personalBookingImg}
            alt="a smiling single lady"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
          <HStack justifyContent={"space-between"} pt="2rem">
            <Heading as="h4" fontSize="1.7rem">
              Personal Booking{" "}
            </Heading>
            <Button px="3rem" bg="yellow.150">
              SELECT
            </Button>
          </HStack>
        </Box>
        <Box
          bg="white"
          p="2rem"
          borderColor={bookingType === "group" ? "yellow.100" : "white"}
          borderWidth={"2px"}
          _hover={{ borderColor: "yellow.100" }}
          onClick={() => setBookingType("group")}
        >
          <Image
            src={groupBookingImg}
            alt="smiling group of ladies"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
          <HStack justifyContent={"space-between"} pt="2rem">
            <Heading as="h4" fontSize="1.7rem">
              Group Booking{" "}
            </Heading>
            <Button px="3rem" bg="yellow.150">
              SELECT
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default BookingType;
