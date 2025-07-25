"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TagProps {
  label?: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <Flex
      bg={
        label === "canceled" || label === "returned"
          ? "red.600"
          : label === "delivered" || label === "completed"
          ? "green.600"
          : "yellow.100"
      }
      p=".2rem .4rem"
      color="white"
      w="fit-content"
      rounded="sm"
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text
        fontSize={"1.2rem"}
        border="none"
        textTransform={"uppercase"}
        fontFamily={"playFair"}
      >
        {label}
      </Text>
    </Flex>
  );
};

export default Tag;
