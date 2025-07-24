"use client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface TagProps {
  label?: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <Box
      bg={
        label === "canceled" || label === "returned"
          ? "red.600"
          : label === "delivered" || label === "completed"
          ? "green.600"
          : "yellow.100"
      }
      p=".1rem .4rem"
      color="white"
      w="fit-content"
      rounded="sm"
    >
      <Text
        fontSize={"1.2rem"}
        border="none"
        textTransform={"uppercase"}
        fontFamily={"playFair"}
      >
        {label}
      </Text>
    </Box>
  );
};

export default Tag;
