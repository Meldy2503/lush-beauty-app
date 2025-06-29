"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  InputGroup,
  Group,
  Heading,
} from "@chakra-ui/react";
import { usePaymentInputs } from "react-payment-inputs";
import Button from "../ui/button";
import CreditCards from "../ui/credit-cards";
import Wrapper from "../ui/wrapper";
import { InputElement } from "../ui/input-element";
import { FaRegCreditCard } from "react-icons/fa";
import { useRouter } from "next/navigation";

const OrderConfirmationPage = () => {
  const payment = usePaymentInputs();
    const router = useRouter();
  

  return (
    <Wrapper bg="gray.250">
      <Box mt="5rem" mb="1.5rem">
        <Button
          onClick={() => router.back()}
          bg="transparent"
          color="black"
          px={"0"}
          hover="transparent"
        >
          ← Go Back
        </Button>
      </Box>
      <Flex gap="2rem" flexDir={{ base: "column", lg: "row" }}>
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

        {/* cart details section */}
        <Box w={{ base: "100%", lg: "40%" }} bg="white" p="2rem">
          <Text fontWeight={"600"} pb="2rem">
            Cart Details
          </Text>
          <Box bg="gray.250" p=".5rem" fontSize={"1.5rem"}>
            <Text> Cart Items</Text>
          </Box>

          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            borderTopWidth="2px"
            borderTopColor={"gray.250"}
            py="1.3rem"
          >
            <Text>Rechargeable face mask</Text> <Text>Qty: 1</Text>{" "}
          </HStack>
          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            borderTopWidth="2px"
            borderTopColor={"gray.250"}
            py="1.3rem"
          >
            <Text>Chebe hair butter</Text> <Text>Qty: 2</Text>{" "}
          </HStack>
          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            borderTopWidth="2px"
            borderTopColor={"gray.250"}
            pt="4rem"
            pb="1rem"
          >
            <Text fontWeight={"400"}>Subtotal</Text>{" "}
            <Text fontWeight={"600"} fontSize={"1.8rem"}>
              $50.00
            </Text>{" "}
          </HStack>
          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            borderTopWidth="2px"
            borderTopColor={"gray.250"}
            py="1rem"
          >
            <Text fontWeight={"400"}>Shipping fee</Text>{" "}
            <Text fontWeight={"600"} fontSize={"1.8rem"}>
              $5.00
            </Text>{" "}
          </HStack>
          <Box bg="gray.250" p=".5rem" fontSize={"1.5rem"} mt='5rem'>
            <Text>Payment Summary</Text>
          </Box>
          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            mt="1.5rem"
            fontWeight={"600"}
          >
            <Text>TOTAL TO PAY</Text>{" "}
            <Text fontSize={"2rem"} color="yellow.150">
              $55.00
            </Text>{" "}
          </HStack>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default OrderConfirmationPage;
