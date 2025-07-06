"use client";

import { Box, CloseButton, Dialog, Flex, Portal, Text } from "@chakra-ui/react";
import Image from "next/image";
import groupBookingImg from "../../assets/images/group-booking-img.webp";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";
import { InputElement } from "../ui/input-element";

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

            {/* expected client modal */}
            <Dialog.Root
              motionPreset="slide-in-bottom"
              placement="center"
              closeOnInteractOutside={false}
            >
              <Dialog.Trigger asChild>
                <Button
                  px="2rem"
                  bg="yellow.150"
                  w={{ base: "full", xl: "fit-content" }}
                  fontSize="1.5rem"
                >
                  CREATE BOOKING
                </Button>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content
                    maxW="800px"
                    w="full"
                    p={{ base: "2rem", md: "5rem" }}
                    m=".5rem"
                  >
                    <Dialog.Header>
                      <Dialog.Title
                        fontSize="2rem"
                        fontWeight="bold"
                        mb="4rem"
                        lineHeight={1.3}
                      >
                        Expected Number of clients
                      </Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <InputElement
                        type="number"
                        label="Please enter the number of expected clients"
                        placeholder="1"
                        bg="gray.250"
                      />
                    </Dialog.Body>
                    <Dialog.Footer pt="4rem">
                      <Dialog.ActionTrigger asChild>
                        <Button
                          bg="transparent"
                          borderWidth="1px"
                          borderColor="black"
                          color="black"
                          px={{ base: "2rem", sm: "5rem" }}
                        >
                          Cancel
                        </Button>
                      </Dialog.ActionTrigger>
                      <Dialog.ActionTrigger asChild>
                        <Button
                          onClick={() => setStep(step + 1)}
                          px={{ base: "2rem", sm: "5rem" }}
                        >
                          Continue
                        </Button>
                      </Dialog.ActionTrigger>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild _hover={{ bg: "gray.250" }}>
                      <CloseButton size="2xl" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BookingType;
