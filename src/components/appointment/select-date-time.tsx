"use client";

import { Box, ButtonGroup, Heading } from "@chakra-ui/react";
import Button from "../ui/button";
import BookingSummary from "./booking-summary";

interface SelectDateTimeProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectDateTime = ({ setStep, step }: SelectDateTimeProps) => {
  return (
    <Box>
      <Box w={{ base: "100%", md: "65%" }}>
        <Heading
          as="h3"
          fontSize={{ base: "1.9rem", md: "2rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          SELECT LTechnician
        </Heading>
      </Box>

      <ButtonGroup
        mt="3rem"
        position={{ base: "fixed", md: "relative" }}
        bottom="0"
        py={{ base: "2rem", lg: "2rem" }}
        w="100%"
        bg="gray.250"
      >
        <Button
          bg="transparent"
          borderWidth="1.5px"
          borderColor="black"
          color="black"
          w={{ base: "100%", md: "fit-content" }}
          onClick={() => setStep(step - 1)}
        >
          Prev
        </Button>

        <Button
          borderWidth="1.5px"
          borderColor="black"
          w={{ base: "100%", md: "fit-content" }}
          onClick={() => setStep(step + 1)}
        >
          Continue
        </Button>
      </ButtonGroup>
      <Box w={{ base: "100%", md: "35%" }}>
        <BookingSummary />
      </Box>
    </Box>
  );
};

export default SelectDateTime;
