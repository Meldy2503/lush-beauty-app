"use client";

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegCreditCard } from "react-icons/fa";
import Button from "../shared/button";
import CreditCards from "../shared/credit-cards";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
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

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [cardName, setCardName] = useState("");
  const [isPending, setIsPending] = useState(false);

  const clientSecretKey = useSelector(
    (state: RootState) => state.cart.clientSecretKey
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Payment gateway not loaded yet. Please try again.");
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) {
      toast.error("Card details are incomplete.");
      return;
    }

    if (!clientSecretKey) {
      console.log("Missing client secret key");
      return;
    }

    if (!cardName.trim()) {
      toast.error("Please enter the cardholder's name.");
      return;
    }

    setIsPending(true);

    try {
      const result = await stripe.confirmCardPayment(clientSecretKey, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: cardName.trim(),
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message || "Payment failed.");
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        router.push("/orders");
        toast.success("Payment successful!");
      } else {
        toast.error("Payment incomplete. Please try again.");
      }
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsPending(false);
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

      <form onSubmit={handleSubmit}>
        <Flex
          w="full"
          flexDir={"column"}
          gap="2rem"
          borderWidth="1px"
          borderRadius="md"
          p={{ base: "1rem", md: "1.5rem" }}
          mb="5rem"
        >
          {/* Card Name Field */}
          <InputElement
            inputItem
            label="Card Name"
            bg="gray.250"
            placeholder="Edward Martins"
            value={cardName}
            disabled={isPending}
            onChange={(e) => setCardName(e.target.value)}
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
                <CardNumberElement
                  options={{
                    ...cardStyle,
                    disabled: isPending,
                  }}
                />
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
                Expiration Date
              </Text>
              <Box p="1.5rem" h="4.7rem" bg="gray.250" rounded={"sm"}>
                <CardExpiryElement
                  options={{
                    ...cardStyle,
                    disabled: isPending,
                  }}
                />
              </Box>
            </Box>
            <Box flex={"1"}>
              <Text fontSize={"1.5rem"} lineHeight={1.3} mb=".5rem">
                Security Code
              </Text>
              <Box p="1.5rem" h="4.7rem" bg="gray.250" rounded={"sm"}>
                <CardCvcElement
                  options={{
                    ...cardStyle,
                    disabled: isPending,
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Button w="full" disabled={isPending || !stripe} type="submit">
          {isPending ? "Processing..." : "Pay Now"}
        </Button>
      </form>
    </Box>
  );
};

const OrderPayment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default OrderPayment;
