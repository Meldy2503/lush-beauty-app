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
          cursor={"pointer"}
          fontWeight={"semibold"}
          fontFamily="playfair"
          px={px ?? "2.5rem"}
          py={py ?? ".8rem"}
          {...props}
          bg={bg ?? "black"}
          _hover={hover ? { bg: hover } : { bg: "yellow.150" }}
        >
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton
      fontWeight={"semibold"}
      cursor={"pointer"}
      fontFamily="playfair"
      color={color ?? "white"}
      px={px ?? "2.5rem"}
      py={py ?? ".8rem"}
      bg={bg ?? "black"}
      {...props}
      _hover={hover ? { bg: hover } : { bg: "yellow.150" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
