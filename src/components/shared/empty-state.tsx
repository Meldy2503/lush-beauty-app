"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Button from "./button";
import { usePathname } from "next/navigation";
import { CiFileOff } from "react-icons/ci";

interface EmptyStateProps {
  title?: string;
  text?: string;
  icon?: React.ReactNode;
  isCart?: boolean;
}

const EmptyState = ({ title, text, icon, isCart }: EmptyStateProps) => {
  const pathname = usePathname();

  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      h="90%"
      py={{ base: "7rem", md: "13rem" }}
    >
      {icon ?? <CiFileOff size={120} color="#777" />}
      <Heading fontSize={"1.9rem"} lineHeight={1.4} mt="2rem" mb=".5rem">
        {title ?? "Nothing to show here yet"}
      </Heading>
      <Text mb="3rem" textAlign={"center"}>
        {text ??
          "We couldn't find any content. Once there's something, it will appear here"}
      </Text>
      {pathname !== "/shop" && isCart && <Button href="/shop">Shop Now</Button>}
    </Flex>
  );
};

export default EmptyState;
