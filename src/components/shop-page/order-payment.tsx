"use client";

import { useMakeOrderPaymentMutation } from "@/services/api/cart";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegCreditCard } from "react-icons/fa";
import Button from "../shared/button";
import CreditCards from "../shared/credit-cards";
import { InputElement } from "../shared/input-element";

const cardStyle = {
  style: {
    base: {
      fontSize: "15px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#c23d4b",
    },
  },
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutForm = ({ orderId }: { orderId: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { mutateAsync: makeOrderPayment, isPending } =
    useMakeOrderPaymentMutation();

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    try {
      await makeOrderPayment({ orderId });
      toast.success("Order Payment made Successfully!");

    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          w="full"
          flexDir={"column"}
          gap="2rem"
          borderWidth="1px"
          borderRadius="md"
          p={{ base: "1rem", md: "1.5rem" }}
          mb="5rem"
        >
          <InputElement
            label="Card name"
            bg="gray.250"
            placeholder="Edward Martins"
          />
          {/* Card Number Field with Icons */}
          <Box>
            <Text fontSize={"1.5rem"} lineHeight={1.3} mb=".5rem">
              Card Number
            </Text>
            <Flex
              alignItems="center"
              bg="gray.250"
              p="1.5rem"
              height="4.7rem"
              rounded={"sm"}
            >
              {/* Stripe Card Number */}
              <Box flex="1">
                <CardNumberElement options={cardStyle} />
              </Box>

              {/* Your card icons component */}
              <CreditCards />
            </Flex>
          </Box>

          {/* Expiry and CVC */}
          <Flex
            w="full"
            gap="2rem 1rem"
            flexDir={{ base: "column", sm: "row" }}
          >
            <Box flex={"1"}>
              <Text fontSize={"1.5rem"} lineHeight={1.3} mb=".5rem">
                Expiration date
              </Text>
              <Box p="1.5rem" h="4.7rem" bg="gray.250" rounded={"sm"}>
                <CardExpiryElement options={cardStyle} />
              </Box>
            </Box>
            <Box flex={"1"}>
              <Text fontSize={"1.5rem"} lineHeight={1.3} mb=".5rem">
                Security code
              </Text>
              <Box p="1.5rem" h="4.7rem" bg="gray.250" rounded={"sm"}>
                <CardCvcElement options={cardStyle} />
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Button w="full" disabled={isPending} type="submit">
          {isPending ? "Processing..." : "Pay Now"}
        </Button>
      </form>
    </Box>
  );
};

const OrderPayment = ({ orderId }: { orderId: string }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm orderId={orderId} />
  </Elements>
);

export default OrderPayment;
