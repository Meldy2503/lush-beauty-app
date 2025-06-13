"use client";

import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import groupBookingImg from "../../assets/images/group-booking-img.webp";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";

const BookingType = () => {
  return (
    <Flex gap="2rem" flexDir={{ base: "column", lg: "row" }}>
      <Box bg="white" p="2rem">
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
          <Button>SELECT</Button>
        </HStack>
      </Box>
      <Box bg="white" p="2rem">
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
          <Button px="3rem">SELECT</Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default BookingType;
