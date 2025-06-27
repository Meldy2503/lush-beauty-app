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
    <Flex gap="2rem" flexDir={{ base: "column-reverse", md: "row" }}>
      <Box w={{ base: "100%", md: "65%" }} bg="white" p="2rem" shadow={"sm"}>
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
        <Box h="65vh" overflowY={"auto"}>
          <Box>
            <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
              Cancellation Policy:
            </Text>
            <Text mb="1.5rem">
              We understand plans can change — cancellations are accepted up to
              48 hours before your appointment.
            </Text>

            <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
              Payment Information:
            </Text>
            <Text mb="1.5rem">
              Please note that we are a cash-free business. You can pay securely
              online during booking or in person via bank transfer or card on
              the day of your appointment.
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
              Booking for four or more? A deposit of £20 per person is required
              to secure the group appointment. This will go toward your final
              bill.
            </Text>

            <Text fontSize="1.7rem" mb=".3rem" fontWeight={"bold"}>
              Children’s Appointments:
            </Text>
            <Text mb="1.5rem">
              At the moment, we’re able to welcome children aged 7–15.
              Unfortunately, we’re unable to accommodate children under 7 at
              this time.
            </Text>

            <Text>
              Thank you for your understanding — we look forward to welcoming
              you!
            </Text>
          </Box>
          <Checkbox.Root mt="2rem" mb="3rem" px=".6rem">
            <Checkbox.HiddenInput />
            <Checkbox.Control scale={1.5}>
              <Checkbox.Indicator />
            </Checkbox.Control>

            <Checkbox.Label fontSize={"1.7rem"} ml=".5rem">
              {" "}
              <Text lineHeight={1.35}>
                I agree to the terms and conditions{" "}
              </Text>
            </Checkbox.Label>
          </Checkbox.Root>
        </Box>
        <HStack
          mt="auto"
          position="sticky"
          bottom="0"
          w="full"
          gap="1rem"
          justifyContent={"center"}
          alignItems={"center"}
          bg="white"
          py="1rem"
        >
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

      <Box w={{ base: "100%", md: "35%" }}>
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default ConfirmBooking;
