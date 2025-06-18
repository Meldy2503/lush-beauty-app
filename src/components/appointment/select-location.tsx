"use client";

import { Box, ButtonGroup, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import BookingSummary from "./booking-summary";
import Button from "../ui/button";

interface SelectLocationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const SelectLocation = ({ setStep, step }: SelectLocationProps) => {
  return (
    <Flex gap="2rem">
      <Box w={{ base: "100%", md: "65%" }}>
        <Heading
          as="h3"
          fontSize={{ base: "1.9rem", md: "2rem" }}
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
            bg="white"
            p={{ base: "2rem", sm: "2.5rem" }}
            size="lg"
            gap="3rem"
          >
            <Checkbox.HiddenInput />

            <Checkbox.Label>
              {" "}
              <Box fontSize={{ base: "1.45rem", sm: "1.6rem" }}>
                <Heading
                  as="h4"
                  fontFamily="playfair"
                  mb="1rem"
                  lineHeight={1.4}
                  textTransform={"uppercase"}
                  fontSize={{ base: "1.6rem", sm: "1.7rem" }}
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
            bg="white"
            p={{ base: "2rem", sm: "2.5rem" }}
            size="lg"
            gap="3rem"
          >
            <Checkbox.HiddenInput />

            <Checkbox.Label>
              {" "}
              <Box fontSize={{ base: "1.45rem", sm: "1.6rem" }}>
                <Heading
                  as="h4"
                  fontFamily="playfair"
                  mb="1rem"
                  lineHeight={1.4}
                  textTransform={"uppercase"}
                  fontSize={{ base: "1.6rem", sm: "1.7rem" }}
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
      </Box>
      <Box w={{ base: "100%", md: "35%" }}>
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectLocation;
