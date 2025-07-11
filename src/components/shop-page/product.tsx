"use client";

import { Box, Flex, Heading, HStack, List, Text } from "@chakra-ui/react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import academy1 from "../../assets/images/academy-1.webp";
import Button from "../shared/button";
import Wrapper from "../shared/wrapper";
import Cart from "./cart";
import { GoBack } from "../shared/go-back";

const Product = () => {
  return (
    <Wrapper>
      <GoBack />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap="2rem"
      >
        {/* Left: Image*/}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image
            src={academy1}
            alt="beauty salon office image"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
        </Box>

        {/* Right: Text Content */}
        <Box w={{ base: "100%", md: "45%" }}>
          <Heading
            as="h2"
            fontSize={{ base: "2rem", md: "2.3rem" }}
            fontFamily="playfair"
            lineHeight={1.3}
          >
            RECHARGABLE FACE MASK
          </Heading>
          <Text py="2rem">
            USB rechargeable face mask, 7-color LED beauty instrument, suitable
            for all Light Beige types, Women&apos;s holiday gift, Mother&apos;s
            Day gift
          </Text>
          <Text fontWeight={"600"} fontSize={"2rem"} pb="2rem">
            $45.00
          </Text>
          <Box mb="2rem">
            <Text>Quantity*</Text>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              w="15rem"
              border="1px solid black"
              p=".8rem"
              mt=".5rem"
            >
              <Box>
                <FiMinus />
              </Box>
              <Text>1</Text>
              <Box>
                <FiPlus />
              </Box>
            </Flex>
          </Box>

          <Cart>
            <Button bg="yellow.100" w="full">
              ADD TO CART
            </Button>
          </Cart>
          <Box mt="4rem">
            <HStack mb="1rem" fontWeight={600}>
              <CiDeliveryTruck size={30} />
              <Text fontFamily={"playfair"}>SHIPPING INFO</Text>
            </HStack>
            <List.Root fontSize={"1.55rem"} gap=".5rem" ps="8">
              <List.Item>Processing Time: 1–2 business days </List.Item>
              <List.Item>Delivery Time: 3–5 business days </List.Item>
              <List.Item>
                Shipping Provider: Royal Mail / DHL / UPS (depending on
                destination){" "}
              </List.Item>
              <List.Item>
                Tracking: A tracking number will be sent via email once your
                order has shipped.
              </List.Item>
            </List.Root>
          </Box>
        </Box>
      </Flex>
      <Box mt="4rem">
        <HStack mb="1rem" fontWeight={600}>
          <CiDeliveryTruck size={30} />
          <Text fontFamily={"playfair"}>RETURN & REFUND POLICY</Text>
        </HStack>
        <Text>
          We want you to love your 7-Color LED Beauty Face Mask, but if
          you&apos;re not completely satisfied, we&apos;re here to help.{" "}
        </Text>
        <Flex
          gap={{ base: "1rem", md: "5rem", lg: "10rem" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box fontSize={"1.55rem"} mt="2rem">
            <Text mb="1rem">
              You may return the item within 14 days of delivery if:
            </Text>
            <List.Root gap=".3rem" ps="7">
              <List.Item>
                The item is unused and in original condition
              </List.Item>
              <List.Item>All accessories are included </List.Item>
              <List.Item>The product is not damaged or tampered with</List.Item>
              <List.Item>
                {" "}
                Sale or clearance items are final and not eligible for returns
                unless faulty.
              </List.Item>
            </List.Root>
          </Box>
          <Box fontSize={"1.55rem"} mt="2rem">
            <Text mb="1rem">Refund Process: </Text>
            <List.Root gap=".3rem" ps="7">
              <List.Item>
                Returns must be initiated within 14 days of delivery to be
                eligible for a refund.
              </List.Item>
              <List.Item>
                Once we receive and inspect the item, your refund will be
                processed within 5–7 business days.
              </List.Item>
              <List.Item>
                We do not cover return shipping unless the item was faulty or
                damaged on arrival.{" "}
              </List.Item>
              <List.Item>
                Refunds will be issued to the original payment method.
                Processing times may vary depending on your bank.
              </List.Item>
            </List.Root>
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Product;
