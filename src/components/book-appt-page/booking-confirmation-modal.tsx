"use client";

import {
  Dialog,
  Heading,
  HStack,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import tick from "../../assets/images/tick.svg";
import Button from "../ui/button";

const BookingConfirmationModal = ({ disabled }: { disabled? : boolean}) => {
  return (
    <Dialog.Root
      scrollBehavior="inside"
      placement={"center"}
      closeOnInteractOutside={false}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger asChild>
        <Button
          borderWidth="1.5px"
          borderColor="black"
          w="49%"
          disabled={disabled}
          cursor={disabled ? "not-allowed" : "pointer"}
        >
          Confirm Booking
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="600px"
            w="full"
            px={{ base: "2rem", md: "5rem" }}
            py="5rem"
            m=".5rem"
          >
            <Dialog.Body>
              <VStack textAlign={"center"}>
                <Image src={tick} alt="tick icon" width={100} height={100} />
                <Heading
                  as="h2"
                  fontSize={{ base: "2.2rem", md: "2.5rem" }}
                  my="1rem"
                  lineHeight={1.3}
                  textTransform={"uppercase"}
                >
                  Appointment Confirmed!{" "}
                </Heading>
                <Text
                  fontSize={"1.6rem"}
                  w={{ base: "100%", md: "80%" }}
                  lineHeight={1.5}
                >
                  Thanks for booking with Lush & Luxe! <br />A confirmation
                  email has been sent. You can pay online or in person at your
                  appointment day ✨
                </Text>
                <HStack
                  gap="1.5rem"
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  pt="3rem"
                  w="full"
                  flexDir={{ base: "column-reverse", sm: "row" }}
                >
                  <Button
                    bg="transparent"
                    borderWidth="1.5px"
                    borderColor="black"
                    color="black"
                    px={{ base: "5.5rem", sm: "2rem" }}
                    href="/"
                  >
                    Go to Home
                  </Button>
                  <Button px="2rem">Proceed to Pay £1000</Button>
                </HStack>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default BookingConfirmationModal;
