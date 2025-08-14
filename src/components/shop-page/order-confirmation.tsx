"use client";

import { useGetUserOrderById } from "@/services/api/user";
import { RootState } from "@/store";
import { CartItemsType } from "@/types/cart";
import { OrderItems } from "@/types/user";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ProtectedRoute from "../auth/protected-route";
import { GoBack } from "../shared/go-back";
import Wrapper from "../shared/wrapper";
import OrderPayment from "./order-payment";

const renderItemRow = (
  storeItem?: CartItemsType,
  orderItem?: OrderItems,
  isFromStoredCart?: boolean
) => {
  const name = isFromStoredCart
    ? storeItem?.productItem?.name
    : orderItem?.product?.name;
  const quantity = storeItem?.quantity || orderItem?.quantity;
  const price = isFromStoredCart
    ? storeItem?.productItem?.price
    : orderItem?.price;

  return (
    <HStack
      key={storeItem?.id || orderItem?.id}
      justifyContent={"space-between"}
      gap="2rem"
      borderTopWidth="2px"
      borderTopColor={"gray.250"}
      py="1.3rem"
    >
      <Box>
        <Text>{name}</Text>
        <Text fontSize={"1.3rem"} color="yellow.100">
          Qty: {quantity}
        </Text>
      </Box>
      {price && quantity && <Text>{price * quantity}</Text>}
    </HStack>
  );
};

const OrderConfirmationPage = () => {
  const storedOrderId = useSelector((state: RootState) => state.cart.orderId);

  const { data: orderDetails } = useGetUserOrderById(storedOrderId as string);

  return (
    <ProtectedRoute>
      <Wrapper bg="gray.250">
        <GoBack />
        <Flex gap="2rem" flexDir={{ base: "column", lg: "row" }}>
          {/* cart payment form section */}
          <OrderPayment />
          {/* cart details section */}
          <Box w={{ base: "100%", lg: "40%" }} bg="white" p="2rem">
            <Text fontWeight={"600"} pb="2rem">
              Cart Details
            </Text>
            <Box bg="gray.250" p=".5rem" fontSize={"1.5rem"}>
              <Text> Cart Items</Text>
            </Box>
            {orderDetails?.items?.map((item: OrderItems) =>
              renderItemRow(undefined, item, false)
            )}

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
                {orderDetails?.totalAmount?.toFixed(2) || 0}
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
                0.00
              </Text>{" "}
            </HStack>
            <Box bg="gray.250" p=".5rem" fontSize={"1.5rem"} mt="5rem">
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
                £{orderDetails?.totalAmount?.toFixed(2) || 0}
              </Text>{" "}
            </HStack>
          </Box>
        </Flex>
      </Wrapper>
    </ProtectedRoute>
  );
};

export default OrderConfirmationPage;
