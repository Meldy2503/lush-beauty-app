import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import academy from "../../assets/images/academy-1.webp";
import Tag from "../tag";
import ViewOrderDetails from "./order-details";

const NewOrders = () => {
  return (
    <Box mt="5rem">
      <Flex
        borderWidth={"2px"}
        borderColor={"gray.250"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        gap="2rem"
        justifyContent={"space-between"}
        p="1.5rem"
        mb="1rem"
      >
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
          <Box fontSize="1.5rem">
            <Tag label="ongoing" />
            <Heading
              as="h4"
              fontFamily="playfair"
              mb=".5rem"
              lineHeight={1.4}
              textTransform={"uppercase"}
              fontSize="1.6rem"
            >
              rechargeable face mask{" "}
            </Heading>
            <Text lineHeight={1.3}>Order no - 1979784172 </Text>
            <Text lineHeight={1.3} fontWeight={"400"} py=".5rem">
              $40
            </Text>
            <Text lineHeight={1.3} fontSize="1.4rem" pt=".5rem">
              Tue, June 02, 2025{" "}
            </Text>
          </Box>
        </Flex>
        <Flex alignSelf={{ base: "flex-end", md: "center" }}>
          <ViewOrderDetails />
        </Flex>
      </Flex>
      <Flex
        borderWidth={"2px"}
        borderColor={"gray.250"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        gap="2rem"
        justifyContent={"space-between"}
        p="1.5rem"
        mb="1rem"
      >
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
          <Box fontSize="1.5rem">
            <Tag label="ongoing" />
            <Heading
              as="h4"
              fontFamily="playfair"
              mb=".5rem"
              lineHeight={1.4}
              textTransform={"uppercase"}
              fontSize="1.6rem"
            >
              rechargeable face mask{" "}
            </Heading>
            <Text lineHeight={1.3}>Order no - 1979784172 </Text>
            <Text lineHeight={1.3} fontWeight={"400"} py=".5rem">
              $40
            </Text>
            <Text lineHeight={1.3} fontSize="1.4rem" pt=".5rem">
              Tue, June 02, 2025{" "}
            </Text>
          </Box>
        </Flex>
        <Flex alignSelf={{ base: "flex-end", md: "center" }}>
          <ViewOrderDetails />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NewOrders;
