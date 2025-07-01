"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import BookingSummary from "./booking-summary";
import StepNavigationBtns from "../ui/navigation-btns";

interface SelectDateTimeProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectDateTime = ({ setStep, step }: SelectDateTimeProps) => {
  return (
    <Flex gap="2rem">
      <Box w={{ base: "100%", md: "65%" }} bg="white" p="2rem" shadow={"sm"}>
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          Select Date/time
        </Heading>
        <StepNavigationBtns
          prevOnClick={() => setStep(step - 1)}
          nextOnClick={() => setStep(step + 1)}
        />
      </Box>

      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "block" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectDateTime;
