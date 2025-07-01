"use client";

import { HStack } from "@chakra-ui/react";
import Button from "./button";

interface StepNavigationBtnsProps {
  prevBtnText?: string;
  prevOnClick?: () => void;
  nextBtnText?: string;
  nextOnClick?: () => void;
}

const StepNavigationBtns = ({
  prevBtnText,
  prevOnClick,
  nextBtnText,
  nextOnClick,
}: StepNavigationBtnsProps) => {
  return (
    <HStack
      mt="auto"
      position={{ base: "fixed", md: "sticky" }}
      bottom="0"
      left="0"
      w="full"
      gap="1rem"
      justifyContent="center"
      alignItems="center"
      bg="white"
      py={{ base: "2rem", md: "1rem" }}
      px={{ base: "1.5rem", md: "0" }}
      zIndex={10}
    >
      <Button
        bg="transparent"
        borderWidth="1.5px"
        borderColor="black"
        color="black"
        w="48%"
        onClick={prevOnClick}
      >
        {prevBtnText ?? 'Prev'}
      </Button>

      <Button
        borderWidth="1.5px"
        borderColor="black"
        w="48%"
        onClick={nextOnClick}
      >
        {nextBtnText ?? 'Continue'}
      </Button>
    </HStack>
  );
};

export default StepNavigationBtns;
