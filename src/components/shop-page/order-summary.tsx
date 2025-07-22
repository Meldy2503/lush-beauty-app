"use client";

import {
  useCheckoutCartItemsMutation,
  useGetCartItems,
} from "@/services/api/cart";
import { useGetUserAddresses, useGetUserProfile } from "@/services/api/user";
import { RootState } from "@/store";
import { setCheckoutCartItems } from "@/store/slices/cart-slice";
import { CartItemsType } from "@/types/cart";
import { UserAddressType } from "@/types/user";
import { Box, Flex, Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import AddressModal from "../personal-details/address-modal";
import Button from "../shared/button";
import { GoBack } from "../shared/go-back";
import Wrapper from "../shared/wrapper";
import Cart from "./cart";
import ProtectedRoute from "../auth/protected-route";

const OrderSummaryPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: userAddress } = useGetUserAddresses();
  const { data: userDetails, isLoading: isUserDetailsLoading } =
    useGetUserProfile();
  const checkoutCartMutation = useCheckoutCartItemsMutation();
  const { mutateAsync: checkoutCartItems, isPending: isCheckoutCartLoading } =
    checkoutCartMutation;

  const existingGuestId = useSelector((state: RootState) => state.cart.guestId);

  const { data: cartItems, isLoading: isLoadingCartItems } = useGetCartItems({
    guestId: existingGuestId,
    userId: userDetails?.id,
  });
  const defaultAddress = userDetails?.addresses?.find(
    (item: UserAddressType) => item?.isDefault
  );
  const totalPrice = cartItems?.reduce((acc: number, item: CartItemsType) => {
    const itemPrice = item?.productItem?.price || 0;
    const quantity = item?.quantity || 0;
    return acc + itemPrice * quantity;
  }, 0);

  const handleConfirmOrder = async () => {
    const payload = {
      cartItemIds: cartItems?.map((itemIds: CartItemsType) => itemIds?.id),
      totalAmount: totalPrice,
    };
    try {
      const result = await checkoutCartItems(payload);
      if (result) {
        router.push("/shop/order-confirmation");
        toast.success("Order created Successfully!");
      }
    } catch (error) {
      console.error("Create order error:", error);
    }
    // to update the checkoutCart redux state
    dispatch(
      setCheckoutCartItems({
        cartItems: cartItems,
        totalAmount: totalPrice,
      })
    );
  };

  return (
    <ProtectedRoute>
      <Wrapper bg="gray.250">
        <GoBack />

        <Flex gap="2rem" flexDir={{ base: "column-reverse", lg: "row" }}>
          <Box w={{ base: "100%", lg: "70%" }}>
            {/* customer details section */}
            <Box bg="white" p="3rem 2rem ">
              <HStack
                pb="2rem"
                mb="2rem"
                borderBottomWidth={"2px"}
                borderBottomColor={"gray.250"}
                gap="1rem"
              >
                <IoIosCheckmarkCircle size={"2.5rem"} color="orange" />
                <Heading
                  as="h3"
                  fontSize={{ base: "1.7rem", md: "1.8rem" }}
                  fontFamily="playfair"
                  lineHeight={1.3}
                  textTransform={"uppercase"}
                >
                  CUSTOMER DETAILS{" "}
                </Heading>
              </HStack>

              <Text fontWeight={"600"}>Billing Details</Text>
              {isUserDetailsLoading ? (
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Spinner my="10rem" />
                </Flex>
              ) : (
                <Flex
                  borderWidth={"2px"}
                  borderColor={"gray.250"}
                  flexDir={{ base: "column", sm: "row" }}
                  gapY="1rem"
                  gapX="2rem"
                  justifyContent={"space-between"}
                  p="1.5rem"
                  mb="1rem"
                  mt="2rem"
                >
                  <Flex gap="1.5rem">
                    <FaRegCircleDot size={"2.2rem"} />

                    <Box fontSize="1.5rem">
                      <Heading
                        as="h4"
                        fontFamily="playfair"
                        mb=".5rem"
                        lineHeight={1.4}
                        textTransform={"uppercase"}
                        fontSize="1.6rem"
                        mt="-.4rem"
                      >
                        {userDetails?.fullName}
                      </Heading>
                      <Text lineHeight={1.3} mb=".5rem">
                        {`${defaultAddress?.address}, ${defaultAddress?.state}, ${defaultAddress?.country}`}
                      </Text>
                      <Text lineHeight={1.3} mb=".5rem">
                        {userDetails?.email}
                      </Text>
                      <Text lineHeight={1.3}>{userDetails?.phone}</Text>
                    </Box>
                  </Flex>
                  <Flex alignSelf={{ base: "flex-end", sm: "center" }}>
                    <AddressModal
                      isEditMode={true}
                      triggeritem={
                        <Button
                          fontWeight="600"
                          bg="transparent"
                          color="yellow.100"
                          px="0rem"
                        >
                          Change address
                        </Button>
                      }
                      selectedAddress={userAddress?.find(
                        (item: UserAddressType) =>
                          defaultAddress?.id === item?.id
                      )}
                    />
                  </Flex>
                </Flex>
              )}
            </Box>
            {/* order details section */}
            <Box bg="white" mt="2rem" p="3rem 2rem">
              <HStack
                pb="2rem"
                mb="2rem"
                borderBottomWidth={"2px"}
                borderBottomColor={"gray.250"}
                gap="1rem"
              >
                <IoIosCheckmarkCircle size={"2.5rem"} color="orange" />
                <Heading
                  as="h3"
                  fontSize={{ base: "1.7rem", md: "1.8rem" }}
                  fontFamily="playfair"
                  lineHeight={1.3}
                  textTransform={"uppercase"}
                >
                  ORDER DETAILS{" "}
                </Heading>
              </HStack>

              <Text fontWeight={"600"}>Door delivery</Text>
              <Text mb="2rem">Delivery between 1 to 5 working days</Text>
              {isLoadingCartItems ? (
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Spinner my="10rem" />
                </Flex>
              ) : (
                cartItems &&
                cartItems?.map((item: CartItemsType) => {
                  return (
                    <Flex
                      key={item?.id}
                      bg={"gray.250"}
                      alignItems={{ base: "flex-end", sm: "center" }}
                      flexDir={{ base: "column", sm: "row" }}
                      gapY=".4rem"
                      gapX="2rem"
                      justifyContent={"space-between"}
                      p="1.5rem"
                      my="1.5rem"
                    >
                      <Flex
                        alignItems={{ base: "flex-start", md: "center" }}
                        gap="1.5rem"
                        flexDir={{ base: "column", sm: "row" }}
                      >
                        {item?.productItem?.imageUrl && (
                          <Image
                            src={item?.productItem?.imageUrl}
                            alt="beauty salon product image"
                            width={130}
                            height={130}
                          />
                        )}
                        <Box fontSize="1.5rem" w={{ base: "full", md: "60%" }}>
                          <Heading
                            as="h4"
                            fontFamily="playfair"
                            mb=".5rem"
                            lineHeight={1.4}
                            textTransform={"uppercase"}
                            fontSize="1.6rem"
                          >
                            {item?.productItem?.name}
                          </Heading>
                          <Text lineHeight={1.5}>
                            {item?.productItem?.description}
                          </Text>
                          <Text mt=".5rem" color="yellow.100">
                            Quantity: {item?.quantity}
                          </Text>
                        </Box>
                      </Flex>
                      <Flex alignItems={"flex-end"} flexDir={"column"}>
                        {item?.productItem?.price && item?.quantity && (
                          <Text fontWeight={"600"} fontSize={"1.8rem"}>
                            £{item?.productItem?.price * item?.quantity}
                          </Text>
                        )}
                        <Text color="yellow.100" fontSize={"1.3rem"}>
                          {item?.productItem?.price}
                        </Text>
                      </Flex>
                    </Flex>
                  );
                })
              )}
              <Flex justifyContent={"center"}>
                <Cart>
                  <Button
                    bg="transparent"
                    color="yellow.100"
                    fontSize="1.7rem"
                    fontWeight="600"
                  >
                    MODIFY CART
                  </Button>
                </Cart>
              </Flex>
            </Box>
          </Box>

          {/* order summary section */}
          <Box w={{ base: "100%", lg: "30%" }} bg="white" p="3rem 2rem">
            <Text fontWeight={"600"} pb="2rem">
              Order summary ({cartItems?.length})
            </Text>

            <HStack
              justifyContent={"space-between"}
              gap="2rem"
              borderTopWidth="2px"
              borderTopColor={"gray.250"}
              pt="2rem"
            >
              <Text fontWeight={"400"}>Subtotal</Text>{" "}
              <Text fontWeight={"600"} fontSize={"1.8rem"}>
                {totalPrice?.toFixed(2)}
              </Text>{" "}
            </HStack>
            <HStack
              mt="2rem"
              justifyContent={"space-between"}
              pb="2rem"
              gap="2rem"
              borderBottomWidth="2px"
              borderBottomColor={"gray.250"}
            >
              <Text fontWeight={"400"}>Shipping fee</Text>{" "}
              <Text fontWeight={"600"} fontSize={"1.8rem"}>
                0.00
              </Text>{" "}
            </HStack>
            <HStack
              justifyContent={"space-between"}
              gap="2rem"
              mt="2rem"
              mb="4rem"
              fontWeight={"600"}
            >
              <Text>Total</Text>
              <Text fontSize={"1.8rem"}>£{totalPrice?.toFixed(2)}</Text>
            </HStack>
            <Button
              w="full"
              onClick={handleConfirmOrder}
              disabled={isCheckoutCartLoading}
            >
              {isCheckoutCartLoading ? "Processing..." : "Confirm Order"}
            </Button>
          </Box>
        </Flex>
      </Wrapper>
    </ProtectedRoute>
  );
};

export default OrderSummaryPage;
