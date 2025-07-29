// "use client";

// import {
//   Box,
//   Group,
//   Heading,
//   HStack,
//   InputGroup,
//   VStack,
// } from "@chakra-ui/react";
// import { FaRegCreditCard } from "react-icons/fa";
// import { usePaymentInputs } from "react-payment-inputs";
// import Button from "../shared/button";
// import CreditCards from "../shared/credit-cards";
// import { InputElement } from "../shared/input-element";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useMakeOrderPaymentMutation } from "@/services/api/cart";
// import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { MakeOrderPaymentType } from "@/types/cart";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

// const OrderPayment = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//   const payment = usePaymentInputs();
//     const makeOrderPaymentMutation = useMakeOrderPaymentMutation();
//     const { mutateAsync: makeOrderPayment, isPending } =
//       makeOrderPaymentMutation;

//       const formHook = useForm<MakeOrderPaymentType>({
//         resolver: yupResolver(MakeOrderPaymentSchema),
//         defaultValues: {
//           email: "",
//           password: "",
//         },
//       } as { resolver: Resolver<LoginType> });
//       const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//       } = formHook;

//       const submit: SubmitHandler<LoginType> = async (data: LoginType) => {
//         try {
//           const result = await login(data);
//           if (!result) {
//             return;
//           }
//           if (result) {
//             toast.success("Login Successful!");
//             if (redirectToOrderSummary) {
//               router.push("/shop/order-summary");
//               dispatch(setRedirectToOrderSummary(false));
//             } else {
//               router.push(redirect); // fallback to default (?redirect=...)
//             }
//             reset();
//           }
//         } catch (error) {
//           console.error("Login error:", error);
//         }
//       };

//   return (
//     <Elements stripe={stripePromise}>
//       <Box w={{ base: "100%", lg: "60%" }} bg="white" p="3rem 2rem">
//         <HStack
//           pb="2rem"
//           borderBottomWidth={"2px"}
//           borderBottomColor={"gray.250"}
//           gap="1rem"
//         >
//           <FaRegCreditCard size={"2.5rem"} color="orange" />
//           <Heading
//             as="h3"
//             fontSize={{ base: "1.7rem", md: "1.8rem" }}
//             fontFamily="playfair"
//             lineHeight={1.3}
//             textTransform={"uppercase"}
//           >
//             MAKE PAYMENT
//           </Heading>
//         </HStack>
//         <form action="">
//           <VStack spaceY="30px" my="4rem">
//             <InputElement
//               label="Card name"
//               bg="gray.250"
//               placeholder="Edward Martins"
//             />
//             <InputGroup
//               zIndex={{ _focusWithin: "1" }}
//               endElement={<CreditCards {...payment} />}
//             >
//               <InputElement
//                 label="Card number"
//                 bg="gray.250"
//                 {...payment.getCardNumberProps()}
//               />
//             </InputGroup>
//             <Group w="full">
//               <InputElement
//                 label="Expiration date"
//                 bg="gray.250"
//                 {...payment.getExpiryDateProps()}
//               />
//               <InputElement
//                 label="Security code"
//                 bg="gray.250"
//                 {...payment.getCVCProps()}
//               />
//             </Group>
//           </VStack>
//           <Button w="full">Pay Now</Button>
//         </form>
//       </Box>
//     </Elements>
//   );
// };

// export default OrderPayment;

"use client";

import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../shared/button";
import { useMakeOrderPaymentMutation } from "@/services/api/cart";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const cardStyle = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
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
      // Call backend with orderId only
      await makeOrderPayment({ orderId });
      toast.success("Payment Successful!");

      // Optional: redirect or clear cart
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
        <VStack align="start" gap="1.5rem" my="4rem">
          <Text>Card Info</Text>
          <Box p="1rem" w="100%" borderWidth="1px" borderRadius="md">
            {/* <CardElement /> */}
            {/* <CardNumberElement /> */}

            <Box
              border="1px solid"
              borderColor="gray.200"
              p="1rem"
              borderRadius="md"
              _focusWithin={{
                borderColor: "orange.400",
                boxShadow: "0 0 0 1px orange",
              }}
            >
              <CardNumberElement options={cardStyle} />
            </Box>

            <CardExpiryElement />
            {/* <label>CVC</label> */}
            <CardCvcElement />
          </Box>
        </VStack>

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
