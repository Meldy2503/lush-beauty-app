"use client";

import { Box, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  bg?: string;
  fontSize?: string;
  fontWeight?: string;
  borderWidth?: string;
  color?: string;
  w?: string | object;
  opacity?: number | object;
  cursor?: string | object;
  disabled?: boolean;
  borderColor?: string;
  px?: string | object;
  display?: string | object;
  py?: string | object;
  fontFamily?: string;
  hover?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  href,
  bg,
  color,
  fontFamily,
  display,
  fontSize,
  fontWeight,
  onClick,
  disabled,
  opacity,
  cursor,
  w,
  borderColor,
  borderWidth,
  px,
  py,
  hover,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref onClick={onClick} >
        <Box
          color={color ?? "white"}
          textAlign={"center"}
          cursor={"pointer"}
          fontWeight={fontWeight ?? "500"}
          w={w ?? "fit-content"}
          fontFamily={fontFamily ?? "playfair"}
          px={px ?? "5rem"}
          py={py ?? "1.2rem"}
          {...props}
          bg={bg ?? "black"}
          borderRadius="0"
          fontSize={fontSize ?? "1.6rem"}
          borderWidth={borderWidth}
          display={display}
          borderColor={borderColor ?? "none"}
          _hover={hover ? { bg: hover } : { bg: "yellow.150" }}
        >
          {children}
        </Box>
      </Link>
    );
  }

  return (
    <ChakraButton
      fontWeight={fontWeight ?? "500"}
      cursor={cursor ?? "pointer"}
      fontFamily={fontFamily ?? "playfair"}
      w={w ?? "fit-content"}
      color={color ?? "white"}
      borderRadius="0"
      px={px ?? "5rem"}
      textAlign={"center"}
      py={py ?? "2rem"}
      fontSize={fontSize ?? "1.6rem"}
      borderColor={borderColor ?? "none"}
      borderWidth={borderWidth}
      bg={bg ?? "black"}
      onClick={onClick}
      display={display}
      disabled={disabled}
      opacity={opacity}
      {...props}
      _hover={hover ? { bg: hover } : { bg: "yellow.150" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
