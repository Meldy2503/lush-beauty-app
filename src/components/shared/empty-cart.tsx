"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import { PiShoppingCartThin } from "react-icons/pi";
import Button from "./button";
import { usePathname } from "next/navigation";

const EmptyCart = () => {
  const pathname = usePathname();

  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      h="90%"
    >
      <PiShoppingCartThin size={120} />
      <Heading fontSize={"1.9rem"} lineHeight={1.4}>
        {" "}
        Your cart is empty
      </Heading>
      <Text pt="1rem" lineHeight={1.4} mb="2rem">
        {" "}
        Explore our products and add items to your cart
      </Text>
      {pathname !== "/shop" && <Button href='/shop'>Shop Now</Button>}
    </Flex>
  );
};

export default EmptyCart;
