"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
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
    <Flex
      bg="white"
      shadow={"sm"}
      justifyContent={"center"}
      flexDir={"column"}
      h={{ base: "100%", md: "80vh" }}
      overflowY={"auto"}
      p={{ base: "2rem", sm: "3rem" }}
    >
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
          <Flex
            justifyContent={"space-between"}
            p="3rem 2rem"
            gap="2rem"
            flexDir={{ base: "column", xl: "row" }}
          >
            <Text fontWeight={"600"} fontSize="1.8rem">
              Personal Booking{" "}
            </Text>
            <Button
              px="2rem"
              bg="yellow.150"
              onClick={() => setStep(step + 1)}
              w={{ base: "full", xl: "fit-content" }}
              fontSize="1.5rem"
            >
              CREATE BOOKING
            </Button>
          </Flex>
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
          <Flex
            justifyContent={"space-between"}
            p="3rem 2rem"
            gap="2rem"
            flexDir={{ base: "column", xl: "row" }}
          >
            <Text fontWeight={"600"} fontSize="1.8rem">
              Group Booking{" "}
            </Text>
            <Button
              px="2rem"
              bg="yellow.150"
              onClick={() => setStep(step + 1)}
              w={{ base: "full", xl: "fit-content" }}
              fontSize="1.5rem"
            >
              CREATE BOOKING
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BookingType;
