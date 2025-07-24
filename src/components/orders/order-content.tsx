"use client";

import { Box, Flex, Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import Tag from "../shared/tag";
import { useGetUserAddresses, useGetUserOrderById } from "@/services/api/user";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { formatAppointmentDateTime } from "@/utils";
import { OrderItems, UserAddressType } from "@/types/user";

interface OrderContentProps {
  viewOrderDetailsId?: string;
}

const OrderDetailsContent = ({ viewOrderDetailsId }: OrderContentProps) => {
  const { data: orderDetails, isLoading } = useGetUserOrderById(
    viewOrderDetailsId as string
  );
  const { data: userAddress } = useGetUserAddresses();

  const defaultAddress = userAddress?.filter(
    (item: UserAddressType) => item.isDefault === true
  );
  const loggedInUser = useSelector((state: RootState) => state.auth.user);

  const { date, time } = formatAppointmentDateTime(orderDetails?.createdAt);
  console.log(loggedInUser, "loggedInUser");
  console.log(orderDetails, "orderDetails");

  return (
    <>
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center">
          <Spinner my="20rem" />
        </Flex>
      ) : (
        <Flex
          justify={"space-between"}
          w="full"
          mt="3rem"
          gap="1rem"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "59%" }} bg="white" p="2rem">
            <HStack>
              <Text>Payment Status:</Text>
              <Tag label={orderDetails?.status} />
            </HStack>

            <Text lineHeight={1.3} mt="1rem">
              Order no - {orderDetails?.code}{" "}
            </Text>
            <Box bg="gray.250" p="1rem" mt="1rem">
              {orderDetails?.items?.map((item: OrderItems) => {
                return (
                  <Flex
                    mb="1rem"
                    key={item?.id}
                    alignItems={{ base: "flex-start", md: "center" }}
                    gap=".5rem 1.5rem"
                    flexDir={{ base: "column", sm: "row" }}
                  >
                    {item?.product?.imageUrl && (
                      <Image
                        src={item?.product?.imageUrl}
                        alt="product image"
                        style={{
                          objectFit: "cover",
                        }}
                        width={100}
                        height={100}
                      />
                    )}
                    <Box fontSize="1.6rem">
                      <Heading
                        as="h4"
                        fontFamily="playfair"
                        mb=".2rem"
                        lineHeight={1.4}
                        textTransform={"uppercase"}
                        fontSize="1.7rem"
                      >
                        {item?.product?.name}
                      </Heading>
                      <Text lineHeight={1.3}>Qty: {item?.quantity}</Text>
                      <Text lineHeight={1.3} fontWeight={"600"} pt=".5rem">
                        £{item?.price}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
            <Box mt="5rem">
              <Text fontWeight={"bold"} mb="1.5rem">
                Shipping Address{" "}
              </Text>
              <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
                <HStack bg="white" p=".8rem" rounded={"full"} shadow={"md"}>
                  <IoLocationOutline size={"2.3rem"} />
                </HStack>
                <Box>
                  <Text mb=".5rem" lineHeight={1.4} fontSize="1.6rem">
                    {`${defaultAddress[0]?.address}, ${defaultAddress[0]?.state}, ${defaultAddress[0]?.country}`}
                  </Text>
                  <Text lineHeight={1.3} w="95%" fontSize="1.4rem">
                    +1 30241481957{" "}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "40%" }} bg="white" p="2rem">
            <Box>
              <Text fontWeight={"bold"} mb="1.5rem">
                Delivery Method{" "}
              </Text>
              <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
                <HStack bg="white" p=".8rem" rounded={"full"} shadow={"md"}>
                  <IoLocationOutline size={"2.3rem"} />
                </HStack>

                <Text lineHeight={1.3}>Door Delivery </Text>
              </Flex>
            </Box>
            <Box mt="3rem">
              <Text fontWeight={"bold"} mb="1.5rem">
                Order Details{" "}
              </Text>
              <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
                <HStack bg="white" p="1rem" rounded={"full"} shadow={"md"}>
                  <LuCalendarDays size={"2rem"} />
                </HStack>
                <Box>
                  <Text lineHeight={1.3} mb=".3rem">
                    Order created on{" "}
                  </Text>
                  <Text lineHeight={1.3}>
                    {date} / {time}
                  </Text>
                </Box>

                {orderDetails?.status !== "PENDING" && (
                  <Text lineHeight={1.3}>
                    Delivery between 09 June and June 12{" "}
                  </Text>
                )}
              </Flex>
            </Box>
            <Box
              borderTopWidth={"2px"}
              borderColor={"gray.250"}
              mt="2rem"
              py="2rem"
              w="full"
            >
              <HStack justifyContent={"space-between"} gap="2rem">
                <Text fontWeight={"400"}>Shipping fee</Text>{" "}
                <Text fontWeight={"600"} fontSize={"1.8rem"}>
                  0.00
                </Text>{" "}
              </HStack>
              <HStack justifyContent={"space-between"} gap="2rem" mt="2rem">
                <Text fontWeight={"400"}>Total</Text>{" "}
                <Text fontWeight={"600"} fontSize={"1.8rem"}>
                  £{orderDetails?.totalAmount.toFixed(2)}
                </Text>{" "}
              </HStack>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default OrderDetailsContent;
