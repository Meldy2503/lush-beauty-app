"use client";

import {
  CloseButton,
  Dialog,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import tick from "../../assets/images/tick.svg";
import Button from "../ui/button";

const BookingConfirmationModal = () => {
  return (
    <Dialog.Root scrollBehavior="inside" placement={"center"}>
      <Dialog.Trigger asChild>
        <Button borderWidth="1.5px" borderColor="black" w="48%">
          Pay Now
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="600px"
            w="full"
            px={{ base: "2rem", md: "5rem" }}
            py={{ base: "3rem", md: "5rem" }}
            m=".5rem"
          >
            <Dialog.CloseTrigger asChild>
              <CloseButton size="2xl" _hover={{ bg: "gray.250" }} />
            </Dialog.CloseTrigger>
            <Dialog.Body>
              <VStack textAlign={"center"}>
                <Image src={tick} alt="tick icon" width={130} height={130} />
                <Heading
                  as="h2"
                  fontSize={{ base: "2.5rem", md: "3rem" }}
                  my="2rem"
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
                  Thank you for booking with Lush & Luxe. Your appointment is
                  officially set, and your payment has been received. We can’t
                  wait to welcome you and give you the pampering you deserve! ✨
                </Text>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default BookingConfirmationModal;
