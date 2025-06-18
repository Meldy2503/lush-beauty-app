"use client";

import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Button from "../ui/button";
import BookingSummary from "./booking-summary";


interface SelectServiceProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const SelectService = ({ setStep, step }: SelectServiceProps) => {
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
          SELECT SERVICES
        </Heading>
        <Box>hhhh</Box>
        <HStack
          mt="2rem"
          position={{ base: "sticky", md: "relative" }}
          bottom="0"
          w="full"
          gap="1rem"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            bg="transparent"
            borderWidth="1.5px"
            borderColor="black"
            color="black"
            w="48%"
            onClick={() => setStep(step - 1)}
          >
            Prev
          </Button>

          <Button
            borderWidth="1.5px"
            borderColor="black"
            w="48%"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </Button>
        </HStack>
      </Box>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "block" }}
      >
        <BookingSummary />
      </Box>{" "}
    </Flex>
  );
};

export default SelectService;
