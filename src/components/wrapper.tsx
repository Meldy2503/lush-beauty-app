"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  pt?: string | { base?: string; md?: string; lg?: string };
  pb?: string | { base?: string; md?: string; lg?: string };
  bg?: string;
  color?: string;
}

const Wrapper = ({ children, pt, bg, pb, color}: WrapperProps) => {
  return (
    <Box
      w="100%"
      pt={pt ?? "7rem"}
      pb={pb}
      bg={bg ?? 'white'}
      color={color ?? 'black'}
    >
      <Box maxW="1200px" w="90%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
