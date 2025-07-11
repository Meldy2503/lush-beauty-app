"use client";

import { Button as ChakraButton } from "@chakra-ui/react";
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
  type?: "button" | "submit" | "reset" 
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
  type,
  onClick,
  disabled,
  cursor,
  w,
  borderColor,
  borderWidth,
  px,
  py,
  // hover,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref onClick={onClick}>
        <ChakraButton
          color={color ?? "white"}
          textAlign={"center"}
          cursor={"pointer"}
          fontWeight={fontWeight ?? "500"}
          w={w ?? "fit-content"}
          fontFamily={fontFamily ?? "lato"}
          px={px ?? "5rem"}
          py={py ?? "2.2rem"}
          {...props}
          bg={bg ?? "black"}
          type={type}
          borderRadius="0"
          fontSize={fontSize ?? "1.6rem"}
          borderWidth={borderWidth}
          display={display}
          borderColor={borderColor ?? "none"}
          disabled={disabled}
          opacity={disabled ? 0.3 : 1}

          // _hover={hover ? { bg: hover } : { bg: "yellow.150" }}
        >
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton
      fontWeight={fontWeight ?? "500"}
      cursor={cursor ?? "pointer"}
      fontFamily={fontFamily ?? "lato"}
      w={w ?? "fit-content"}
      color={color ?? "white"}
      borderRadius="0"
      textAlign={"center"}
      px={px ?? "5rem"}
      py={py ?? "2.2rem"}
      fontSize={fontSize ?? "1.6rem"}
      borderColor={borderColor ?? "none"}
      borderWidth={borderWidth}
      bg={bg ?? "black"}
      onClick={onClick}
      display={display}
      disabled={disabled}
      zIndex={1}
      type={type}
      opacity={disabled ? 0.3 : 1}
      {...props}
      // _hover={hover ? { bg: hover } : { bg: "yellow.150" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
