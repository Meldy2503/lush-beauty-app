"use client";

import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import groupBookingImg from "../../assets/images/group-booking-img.webp";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";

interface BookingTypeProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BookingType = ({ setStep, step }: BookingTypeProps) => {
  return (
    <Box bg="white" p="4rem 3rem" shadow={"sm"}>
      <Heading
        as="h3"
        fontSize={{ base: "1.7rem", md: "1.8rem" }}
        fontFamily="playfair"
        mb="2rem"
        lineHeight={1.3}
      >
        SELECT APPOINTMENT TYPE
      </Heading>
      <Flex gap="4rem 2rem" flexDir={{ base: "column", md: "row" }}>
        <Box
          borderWidth={"2px"}
          borderColor="white"
          _hover={{ borderColor: "yellow.100" }}
          cursor="pointer"
          bg="gray.250"
        >
          <Image
            src={personalBookingImg}
            alt="a smiling single lady"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
          <HStack
            justifyContent={"space-between"}
            p="2rem"
            gap="2rem"
            flexDir={{ base: "column", sm: "row" }}
          >
            <Heading as="h4" fontSize="1.7rem">
              Personal Booking{" "}
            </Heading>
            <Button
              px="2rem"
              bg="yellow.150"
              onClick={() => setStep(step + 1)}
              w={{ base: "full", sm: "fit-content" }}
            >
              CREATE BOOKING
            </Button>
          </HStack>
        </Box>
        <Box
          borderWidth={"2px"}
          borderColor="white"
          _hover={{ borderColor: "yellow.100" }}
          cursor="pointer"
          bg="gray.250"
        >
          <Image
            src={groupBookingImg}
            alt="smiling group of ladies"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
          <HStack
            justifyContent={"space-between"}
            p="2rem"
            gap="2rem"
            flexDir={{ base: "column", sm: "row" }}
          >
            <Heading as="h4" fontSize="1.7rem">
              Group Booking{" "}
            </Heading>
            <Button
              px="2rem"
              bg="yellow.150"
              onClick={() => setStep(step + 1)}
              w={{ base: "full", sm: "fit-content" }}
            >
              CREATE BOOKING
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default BookingType;
