"use client";

import { HStack } from "@chakra-ui/react";
import Button from "./button";

interface StepNavigationBtnsProps {
  prevBtnText?: string;
  prevOnClick?: () => void;
  nextBtnText?: string;
  nextOnClick?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

const StepNavigationBtns = ({
  prevBtnText,
  prevOnClick,
  nextBtnText,
  nextOnClick,
  prevDisabled,
  nextDisabled
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
      py="2rem"
      px={{ base: "1.5rem", md: "0" }}
      zIndex={10}
    >
      <Button
        bg="transparent"
        borderWidth="1.5px"
        borderColor="black"
        color="black"
        disabled={prevDisabled}
        opacity={prevDisabled ? 0.25 : 1}
        cursor={prevDisabled ? "not-allowed" : "pointer"}
        w="49%"
        onClick={prevOnClick}
      >
        {prevBtnText ?? "Prev"}
      </Button>

      <Button
        borderWidth="1.5px"
        borderColor="black"
        disabled={nextDisabled}
        opacity={nextDisabled ? 0.25 : 1}
        cursor={nextDisabled ? "not-allowed" : "pointer"}
        w="49%"
        onClick={nextOnClick}
      >
        {nextBtnText ?? "Continue"}
      </Button>
    </HStack>
  );
};

export default StepNavigationBtns;
