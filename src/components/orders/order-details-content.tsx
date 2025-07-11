"use client";

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import Tag from "../shared/tag";
import academy from "../../assets/images/academy-1.webp";

const OrderDetailsContent = () => {
  return (
    <Flex
      justify={"space-between"}
      w="full"
      mt="3rem"
      gap="1rem"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box w={{ base: "100%", md: "59%" }} bg="white" p="2rem">
        <Flex
          alignItems={{ base: "flex-start", md: "center" }}
          gap="1.5rem"
          flexDir={{ base: "column", sm: "row" }}
        >
          <Image
            src={academy}
            alt="product image"
            style={{
              objectFit: "cover",
            }}
            width={130}
            height={130}
          />{" "}
          <Box fontSize="1.6rem">
            <Tag label="delivered" />
            <Heading
              as="h4"
              fontFamily="playfair"
              mb=".5rem"
              lineHeight={1.4}
              textTransform={"uppercase"}
              fontSize={{ base: "1.8rem", md: "2rem" }}
            >
              rechargeable face mask{" "}
            </Heading>
            <Text lineHeight={1.3}>Order no - 1979784172 </Text>
            <Text
              lineHeight={1.3}
              fontWeight={"400"}
              py=".5rem"
              fontSize="1.7rem"
            >
              $40
            </Text>
          </Box>
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
              <Heading
                as="h4"
                fontFamily="playfair"
                mb=".5rem"
                lineHeight={1.4}
                textTransform={"uppercase"}
                fontSize="1.45rem"
              >
                2, Beverley street - United States{" "}
              </Heading>
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
            Shipping Details{" "}
          </Text>
          <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
            <HStack bg="white" p="1rem" rounded={"full"} shadow={"md"}>
              <LuCalendarDays size={"2rem"} />
            </HStack>

            <Text lineHeight={1.3}>Delivery between 09 June and June 12 </Text>
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
              $5.00
            </Text>{" "}
          </HStack>
          <HStack justifyContent={"space-between"} gap="2rem" mt="2rem">
            <Text fontWeight={"400"}>Total</Text>{" "}
            <Text fontWeight={"600"} fontSize={"1.8rem"}>
              $45.00
            </Text>{" "}
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default OrderDetailsContent;
