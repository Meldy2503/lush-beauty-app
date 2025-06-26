"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Button from "../ui/button";
import BookingSummary from "./booking-summary";
import Image from "next/image";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import { IoIosStar } from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";

interface SelectTechnicianProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectTechnician = ({ setStep, step }: SelectTechnicianProps) => {
  return (
    <Flex gap="2rem">
      <Box w={{ base: "100%", md: "65%" }} bg="white" p="2rem" shadow={"sm"}>
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          Select Technician
        </Heading>
        <Flex
          bg="white"
          justifyContent={"space-between"}
          gap="1rem"
          flexWrap={"wrap"}
          h="64vh"
          overflowY={"auto"}
        >
          {staff.map((staff, index) => {
            return (
              <VStack
                key={index}
                p="2rem"
                textAlign={"center"}
                mx="auto"
                w={{ base: "100%", sm: "48%", xl: "31.5%" }}
                bg="gray.250"
                borderWidth={"2px"}
                borderColor="gray.250"
                _hover={{ borderColor: "yellow.100" }}
              >
                <Image
                  src={staff.img}
                  alt="a lush & luxe staff"
                  style={{
                    borderRadius: "50%",
                    height: "7rem",
                    width: "7rem",
                    objectFit: "cover",
                  }}
                  width={100}
                  height={100}
                />
                <Heading
                  as="h4"
                  mt="1rem"
                  fontFamily="playfair"
                  lineHeight={1.4}
                  textTransform={"uppercase"}
                  fontSize="1.45rem"
                >
                  {staff.name}
                </Heading>
                <Text lineHeight={1.3} fontSize="1.3rem" fontStyle={"italic"}>
                  {staff.typeOfService} - {staff.age}yrs
                </Text>
                <HStack
                  fontSize={"1.1rem"}
                  mt=".5rem"
                  gap="1rem"
                  mb="1.5rem"
                  fontStyle={"italic"}
                >
                  <HStack>
                    <PiUsersThree />
                    <Text>{staff.clients} clients</Text>
                  </HStack>
                  <HStack>
                    <IoIosStar color="orange" />
                    <Text>{staff.rating} rating</Text>
                  </HStack>
                </HStack>
                <Button
                  px="3rem"
                  py=".5rem"
                  fontSize="1.2rem"
                  bg="transparent"
                  color="black"
                  borderColor="black"
                >
                  SELECT
                </Button>
              </VStack>
            );
          })}
        </Flex>

        <HStack
          mt="2rem"
          position={{ base: "relative", md: "relative" }}
          bottom="0"
          w="full"
          gap="1rem"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            bg="transparent"
            borderWidth="1.5px"
            borderColor="black"
            color="black"
            w="48%"
            onClick={() => setStep(step - 1)}
          >
            Prev
          </Button>

          <Button
            borderWidth="1.5px"
            borderColor="black"
            w="48%"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </Button>
        </HStack>
      </Box>

      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "block" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectTechnician;

const staff = [
  {
    img: personalBookingImg,
    name: "Deborah mark",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Grace RACHEL",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Ruth Patricia",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Deborah mark",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Ruth Patricia",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Deborah mark",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Deborah mark",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Grace RACHEL",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Ruth Patricia",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Deborah mark",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Ruth Patricia",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
  {
    img: personalBookingImg,
    name: "Deborah mark",
    typeOfService: "nail specialist",
    age: "25",
    clients: 300,
    rating: 4.5,
  },
];
