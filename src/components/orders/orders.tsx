"use client";

import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import academy from "../../assets/images/academy-1.webp";
import Tag from "../shared/tag";
import ViewOrderDetailsModal from "./view-order-modal";
import Navbar from "../navbar";
import Wrapper from "../shared/wrapper";
import { GoBack } from "../shared/go-back";
import Footer from "../footer";
import { useGetUserOrders } from "@/services/api/user";
import { formatAppointmentDateTime } from "@/utils";
import { UserOrderType } from "@/types/user";

const ItemDetails = ({
  title,
  text,
}: {
  title: string;
  text: string | number | undefined;
}) => {
  return (
    <Box>
      <Text color="gray.350" mb=".3rem">
        {" "}
        {title}
      </Text>
      {title === "Total Amount" ? (
        <Text lineHeight={1.3} fontWeight={"600"} fontSize={"1.8rem"}>
          £{text}
        </Text>
      ) : (
        <Text lineHeight={1.3}>{text}</Text>
      )}
    </Box>
  );
};

const OrdersPage = () => {
  const { data: userOrders, isLoading } = useGetUserOrders();
  const [viewOrderDetailsId, setViewOrderDetailsId] = useState("");

  console.log(userOrders, "userOrders");
  return (
    <>
      <Navbar />
      <Wrapper bg="gray.250">
        <GoBack />
        <Box mt="1rem" bg="white" p={{ base: "3rem 1.5rem", md: "3rem 2rem" }}>
          <Heading
            as="h2"
            fontSize={{ base: "1.8rem", md: "1.9rem" }}
            fontFamily="playfair"
            mb="3rem"
            lineHeight={1.3}
            textTransform={"uppercase"}
          >
            Orders{" "}
          </Heading>
          {isLoading ? (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Spinner my="20rem" />
            </Flex>
          ) : (
            <Box mt="3rem">
              {userOrders?.map((orders: UserOrderType) => {
                const { date, time } = formatAppointmentDateTime(
                  orders?.createdAt
                );
                return (
                  <Box
                    key={orders?.id}
                    borderWidth={"2px"}
                    borderColor={"gray.250"}
                    mb="2rem"
                  >
                    <Box bg="gray.250" p="1.5rem" color="gray.100">
                      <Tag label={orders?.status} />
                      <Flex
                        alignItems={"center"}
                        gap="1.5rem 4rem"
                        flexWrap={"wrap"}
                      >
                        <ItemDetails title="Order no" text={orders?.code} />
                        <ItemDetails
                          title="Order placed on"
                          text={`${date} / ${time}`}
                        />
                        <ItemDetails
                          title="Total Amount"
                          text={orders?.totalAmount}
                        />
                      </Flex>
                    </Box>
                    <Flex
                      justifyContent={"space-between"}
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Flex gap="1rem" mt=".5rem" flexDir={"column"} p="1.5rem">
                        {orders?.items &&
                          orders?.items?.map((item) => {
                            return (
                              <Flex key={item?.id} gap="2rem" mt="1rem">
                                <Image
                                  src={academy}
                                  alt="product image"
                                  style={{
                                    objectFit: "cover",
                                  }}
                                  width={100}
                                  height={100}
                                />

                                {/* {orders?.imageUrl && (
                        <Image
                          src={orders?.imageUrl}
                          alt="product image"
                          style={{
                            objectFit: "cover",
                          }}
                          width={100}
                          height={100}
                        />
                       )} */}
                                <Box>
                                  <Heading
                                    as="h4"
                                    fontFamily="playfair"
                                    mb=".5rem"
                                    lineHeight={1.4}
                                    textTransform={"uppercase"}
                                    fontSize="1.6rem"
                                  >
                                    rechargeable face mask
                                  </Heading>
                                  <Text lineHeight={1.3}>
                                    Qty: {item?.quantity}
                                  </Text>
                                  <Text
                                    lineHeight={1.3}
                                    fontWeight={"600"}
                                    py=".5rem"
                                  >
                                    £{item?.price}
                                  </Text>
                                </Box>
                              </Flex>
                            );
                          })}
                      </Flex>
                      <Flex
                        alignSelf={{ base: "flex-end", md: "center" }}
                        px="1.5rem"
                        pb="1.5rem"
                      >
                        <ViewOrderDetailsModal
                          onClick={() =>
                            setViewOrderDetailsId(orders?.id ?? "")
                          }
                          viewOrderDetailsId={viewOrderDetailsId}
                        />
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default OrdersPage;
