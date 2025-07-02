"use client";

import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";
import { InputElement } from "../ui/input-element";
import StepNavigationBtns from "../ui/navigation-btns";
import BookingSummary from "./booking-summary";

interface SelectTechnicianProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectTechnician = ({ setStep, step }: SelectTechnicianProps) => {
  const [isGridOrientation, setIsGridOrientation] = useState(true);

  return (
    <Flex gap="2rem" alignItems="stretch">
      <Box
        w={{ base: "100%", md: "65%" }}
        bg="white"
        px="2rem"
        pt="2rem"
        shadow={"sm"}
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          Select Technician
        </Heading>
        <Flex justify={"space-between"} gap="2rem 3rem" py="2rem">
          <InputElement
            placeholder="Search stylist.."
            border="1px solid gray.100"
          />
          <HStack gap="1rem">
            <Box
              onClick={() => setIsGridOrientation(true)}
              bg={isGridOrientation ? "yellow.100" : "transparent"}
              color={isGridOrientation ? "white" : "black"}
              p=".5rem"
              cursor={"pointer"}
            >
              <IoGridSharp />
            </Box>
            <Box
              onClick={() => setIsGridOrientation(false)}
              bg={!isGridOrientation ? "yellow.100" : "transparent"}
              color={!isGridOrientation ? "white" : "black"}
              p=".5rem"
              cursor={"pointer"}
            >
              <FaListUl />
            </Box>
          </HStack>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          gap="1rem"
          flexWrap={"wrap"}
          overflowY={"auto"}
          h={{ base: "90vh", md: "59vh" }}
          pb={{ base: "5rem", md: "2rem" }}
        >
          {staff.map((staff, index) => {
            return (
              <Flex
                key={index}
                p="2rem"
                textAlign={"center"}
                alignItems={"center"}
                flexDirection={
                  isGridOrientation ? "column" : { base: "column", sm: "row" }
                }
                justifyContent={isGridOrientation ? "center" : "space-between"}
                mx="auto"
                w={
                  isGridOrientation
                    ? { base: "100%", sm: "48%", xl: "31.5%" }
                    : "100%"
                }
                bg="gray.250"
                borderWidth={"2px"}
                borderColor="gray.250"
                rounded="md"
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
                <VStack
                  mt={isGridOrientation ? "1rem" : { base: "1rem", sm: "0" }}
                >
                  <Heading
                    as="h4"
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
                </VStack>
                <Flex
                  fontSize={"1.1rem"}
                  gap={isGridOrientation ? "1rem" : { base: "1rem", sm: "0" }}
                  my={
                    isGridOrientation ? "1.3rem" : { base: "1.3rem", sm: "0" }
                  }
                  fontStyle={"italic"}
                  flexDirection={
                    isGridOrientation ? "row" : { base: "row", sm: "column" }
                  }
                >
                  <HStack>
                    <PiUsersThree />
                    <Text>{staff.clients} clients</Text>
                  </HStack>
                  <HStack>
                    <IoIosStar color="orange" />
                    <Text>{staff.rating} rating</Text>
                  </HStack>
                </Flex>
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
              </Flex>
            );
          })}
        </Flex>
        <StepNavigationBtns
          prevOnClick={() => setStep(step - 1)}
          nextOnClick={() => setStep(step + 1)}
        />
      </Box>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "flex" }}
        overflowY="auto"
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
