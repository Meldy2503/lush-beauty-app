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
              <Text color="gray.350" lineHeight={1.3}>
                Payment Status:
              </Text>
              <Tag label={orderDetails?.status} />
            </HStack>
            <HStack mt="1rem">
              <Text color="gray.350" lineHeight={1.3}>
                Order no:
              </Text>
              <Text lineHeight={1.3}>{orderDetails?.code} </Text>
            </HStack>
            <Flex
              gap={{ base: "2rem", sm: "1rem" }}
              mt="1rem"
              flexDir={"column"}
              p="1rem"
              bg="gray.250"
            >
              {orderDetails?.items?.map((item: OrderItems) => {
                return (
                  <Flex
                    key={item?.id}
                    alignItems={{ base: "flex-start", md: "center" }}
                    gap=".5rem 2rem"
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
                        lineHeight={1.4}
                        fontSize={{ base: "1.6rem", md: "1.7rem" }}
                        color="gray.100"
                      >
                        {item?.product?.name}
                      </Heading>
                      <Text lineHeight={1.3} my=".3rem" fontSize="1.5rem">
                        Qty: {item?.quantity}
                      </Text>
                      <Text lineHeight={1.3} fontWeight={"500"}>
                        £{item?.price}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
            <Box mt="5rem">
              <Text fontWeight={"bold"} mb="1.5rem">
                Shipping Address{" "}
              </Text>
              <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
                <HStack bg="white" p=".8rem" rounded={"full"} shadow={"md"}>
                  <IoLocationOutline size={"2.3rem"} />
                </HStack>
                <Box>
                  {defaultAddress?.length > 0 && (
                    <Text mb=".5rem" lineHeight={1.4} fontSize="1.6rem">
                      {`${defaultAddress[0]?.address}, ${defaultAddress[0]?.state}, ${defaultAddress[0]?.country}`}
                    </Text>
                  )}
                  <Text lineHeight={1.3} w="95%" fontSize="1.4rem">
                    {loggedInUser?.phone}
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
