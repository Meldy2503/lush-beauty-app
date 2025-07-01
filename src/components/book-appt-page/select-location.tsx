"use client";

import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import StepNavigationBtns from "../ui/navigation-btns";
import BookingSummary from "./booking-summary";

interface SelectLocationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const SelectLocation = ({ setStep, step }: SelectLocationProps) => {
  return (
    <Flex gap="2rem">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        p="2rem"
        shadow={"sm"}
        minH={{ base: "80vh", md: "70vh" }}
        position="relative"
        flexDir={"column"}
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          SELECT LOCATION
        </Heading>
        <Flex gap="2rem" flexDir="column">
          <Checkbox.Root
            display={"flex"}
            justifyContent={"space-between"}
            w="full"
            bg="gray.250"
            p={{ base: "1.5rem", sm: "2rem" }}
            size="lg"
            gap="3rem"
          >
            <Checkbox.HiddenInput />

            <Checkbox.Label>
              {" "}
              <Box fontSize={{ base: "1.45rem", sm: "1.5rem" }}>
                <Heading
                  as="h4"
                  fontFamily="playfair"
                  mb="1rem"
                  lineHeight={1.4}
                  textTransform={"uppercase"}
                  fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                >
                  Lush & Luxe – Central London{" "}
                </Heading>
                <Text color={"gray.100"} lineHeight={1.35} w="95%">
                  68 Charlotte Street, Fitzrovia, London, W1T 4QF
                </Text>
              </Box>
            </Checkbox.Label>
            <Checkbox.Control scale={1.5}>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>
          <Checkbox.Root
            display={"flex"}
            justifyContent={"space-between"}
            w="full"
            bg="gray.250"
            p={{ base: "1.5rem", sm: "2rem" }}
            size="lg"
            gap="3rem"
          >
            <Checkbox.HiddenInput />

            <Checkbox.Label>
              {" "}
              <Box fontSize={{ base: "1.45rem", sm: "1.5rem" }}>
                <Heading
                  as="h4"
                  fontFamily="playfair"
                  mb="1rem"
                  lineHeight={1.4}
                  textTransform={"uppercase"}
                  fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                >
                  Lush & Luxe – Manchester{" "}
                </Heading>
                <Text color={"gray.100"} lineHeight={1.35} w="95%">
                  68 Charlotte Street, Fitzrovia, London, W1T 4QF
                </Text>
              </Box>
            </Checkbox.Label>
            <Checkbox.Control scale={1.5}>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>
        </Flex>
        <StepNavigationBtns
          prevOnClick={() => setStep(step - 1)}
          nextOnClick={() => setStep(step + 1)}
        />
      </Flex>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "block" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectLocation;
