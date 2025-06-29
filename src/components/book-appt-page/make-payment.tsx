"use client";

import {
  Box,
  Flex,
  Group,
  Heading,
  HStack,
  InputGroup,
  VStack
} from "@chakra-ui/react";
import { usePaymentInputs } from "react-payment-inputs";
import Button from "../ui/button";
import { InputElement } from "../ui/input-element";
import BookingConfirmationModal from "./booking-confirmation-modal";
import BookingSummary from "./booking-summary";
import CreditCards from "../ui/credit-cards";

interface MakePaymentProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const MakePayment = ({ setStep, step }: MakePaymentProps) => {
  const payment = usePaymentInputs();
  return (
    <Flex gap="2rem">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        p="2rem"
        shadow={"sm"}
        minH={{ base: "80vh", md: "70vh" }}
        position="relative"
        flexDir={"column"}
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          Make Payment
        </Heading>

        <VStack spaceY="25px" mt="2rem">
          <InputElement
            label="Card name"
            bg="gray.250"
            placeholder="Edward Martins"
          />
          <InputGroup
            zIndex={{ _focusWithin: "1" }}
            endElement={<CreditCards {...payment} />}
          >
            <InputElement
              label="Card number"
              bg="gray.250"
              {...payment.getCardNumberProps()}
            />
          </InputGroup>
          <Group w="full">
            <InputElement
              label="Expiration date"
              bg="gray.250"
              {...payment.getExpiryDateProps()}
            />
            <InputElement
              label="Security code"
              bg="gray.250"
              {...payment.getCVCProps()}
            />
          </Group>
        </VStack>
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
            w="48%"
            onClick={() => setStep(step - 1)}
          >
            Prev
          </Button>
          <BookingConfirmationModal />
        </HStack>
      </Flex>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "block" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};
export default MakePayment;
