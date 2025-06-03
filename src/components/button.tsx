"use client";

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
  href?: string;
  bg?: string;
  color?: string;
  px?: string;
  py?: string;
  hover?: string;
}

const Button = ({
  children,
  href,
  bg,
  color,
  px,
  py,
  hover,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <ChakraButton
          color={color ?? "white"}
          fontSize={"1rem"}
          fontWeight={"semibold"}
          px={px ?? "1.5rem"}
          py={py ?? ".5rem"}
          {...props}
          bg={bg ?? "black"}
          _hover={hover ? { bg: hover } : { bg: "yellow" }}
        >
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton
      fontSize={"1rem"}
      fontWeight={"semibold"}
      color={color ?? "white"}
      px={px ?? "1.5rem"}
      py={py ?? ".5rem"}
      bg={bg ?? "black"}
      {...props}
      _hover={hover ? { bg: hover } : { bg: "yellow" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
