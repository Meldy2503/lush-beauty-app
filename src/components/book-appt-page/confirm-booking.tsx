"use client";

import { Box, Checkbox, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import BookingSummary from "./booking-summary";
import Button from "../ui/button";
import BookingConfirmationModal from "./booking-confirmation-modal";

interface ConfirmBookingProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConfirmBooking = ({ setStep, step }: ConfirmBookingProps) => {
  return (
    <Flex
      gap="2rem"
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems={"stretch"}
    >
      <Box
        w={{ base: "100%", md: "65%" }}
        bg="white"
        px="2rem"
        pt="2rem"
        mb={{ base: "3rem", md: "0" }}
        shadow={"sm"}
      >
        {" "}
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
        >
          CONFIRM BOOKING{" "}
        </Heading>{" "}
        <Box h={{ base: "100%", md: "62vh" }} overflowY={"auto"} pb="3rem">
          <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
            Cancellation Policy:
          </Text>
          <Text mb="1.5rem">
            We understand plans can change — cancellations are accepted up to 48
            hours before your appointment.
          </Text>

          <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
            Payment Information:
          </Text>
          <Text mb="1.5rem">
            Please note that we are a cash-free business. You can pay securely
            online during booking or in person via bank transfer or card on the
            day of your appointment.
          </Text>

          <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
            Arrival Time:
          </Text>
          <Text mb="1.5rem">
            We operate by appointment only. Kindly arrive at least 10 minutes
            early. We offer a 15-minute grace period, but arriving later may
            result in a shorter or rescheduled appointment, depending on
            availability.
          </Text>

          <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
            Group Bookings:
          </Text>
          <Text mb="1.5rem">
            Booking for four or more? A deposit of £20 per person is required to
            secure the group appointment. This will go toward your final bill.
          </Text>

          <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
            Children’s Appointments:
          </Text>
          <Text mb="1.5rem">
            At the moment, we’re able to welcome children aged 7–15.
            Unfortunately, we’re unable to accommodate children under 7 at this
            time.
          </Text>

          <Text>
            Thank you for your understanding — we look forward to welcoming you!
          </Text>
        </Box>
        <Box
          mt="auto"
          position={{ base: "fixed", md: "sticky" }}
          bottom="0"
          left="0"
          w="full"
          py="2rem"
          px={{ base: "2rem", md: "0" }}
          zIndex={10}
          bg="white"
        >
          <Checkbox.Root pb="2rem" px=".6rem">
            <Checkbox.HiddenInput />
            <Checkbox.Control scale={1.5}>
              <Checkbox.Indicator />
            </Checkbox.Control>

            <Checkbox.Label
              fontSize={{ base: "1.5rem", md: "1.6rem" }}
              ml=".5rem"
            >
              {" "}
              <Text lineHeight={1.35}>
                I agree to the terms and conditions{" "}
              </Text>
            </Checkbox.Label>
          </Checkbox.Root>
          <HStack gap="1rem" justifyContent="center" alignItems="center">
            <Button
              bg="transparent"
              borderWidth="1.5px"
              borderColor="black"
              color="black"
              w="50%"
              onClick={() => setStep(step - 1)}
            >
              Prev
            </Button>
            <BookingConfirmationModal />
          </HStack>
        </Box>
      </Box>

      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "block", md: "flex" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default ConfirmBooking;
