"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  pt?: string | object;
  pb?: string | object;
  bg?: string;
  color?: string;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, pt, bg, pb, color }, ref) => {
    return (
      <Box
        ref={ref}
        w="100%"
        pt={pt ?? { base: "7rem", md: "10rem" }}
        pb={pb ?? { base: "7rem", md: "10rem" }}
        bg={bg ?? "white"}
        color={color ?? "black"}
      >
        <Box maxW="1200px" w="90%" mx="auto">
          {children}
        </Box>
      </Box>
    );
  }
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
