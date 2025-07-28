"use client";

import {
  Box,
  Group,
  Heading,
  HStack,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { usePaymentInputs } from "react-payment-inputs";
import Button from "../shared/button";
import CreditCards from "../shared/credit-cards";
import { InputElement } from "../shared/input-element";

const OrderPayment = () => {
  const payment = usePaymentInputs();

  return (
    <Box w={{ base: "100%", lg: "60%" }} bg="white" p="3rem 2rem">
      <HStack
        pb="2rem"
        borderBottomWidth={"2px"}
        borderBottomColor={"gray.250"}
        gap="1rem"
      >
        <FaRegCreditCard size={"2.5rem"} color="orange" />
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          MAKE PAYMENT
        </Heading>
      </HStack>
      <form action="">
        <VStack spaceY="30px" my="4rem">
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
        <Button w="full">Pay Now</Button>
      </form>
    </Box>
  );
};

export default OrderPayment;
