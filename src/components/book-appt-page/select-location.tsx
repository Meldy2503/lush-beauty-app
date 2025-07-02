"use client";

import { Box, Flex, Heading, RadioGroup, Text } from "@chakra-ui/react";
import StepNavigationBtns from "../ui/navigation-btns";
import BookingSummary from "./booking-summary";

interface SelectLocationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const SelectLocation = ({ setStep, step }: SelectLocationProps) => {
  return (
    <Flex gap="2rem" alignItems="stretch">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        px="2rem"
        pt="2rem"
        shadow={"sm"}
        h={{ base: "90vh", md: "82.5vh" }}
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
        <RadioGroup.Root defaultValue="1" w="full">
          <Flex gap="2rem" flexDir="column">
            <RadioGroup.Item
              value="1"
              gap="1.5rem"
              display="flex"
              justifyContent="space-between"
              bg="gray.250"
              p={{ base: "1.5rem", sm: "2rem" }}
            >
              <RadioGroup.ItemText>
                <Box fontSize={{ base: "1.45rem", sm: "1.5rem" }}>
                  <Heading
                    as="h4"
                    fontFamily="playfair"
                    mb="1rem"
                    lineHeight={1.4}
                    textTransform="uppercase"
                    fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                  >
                    Lush & Luxe – Central London
                  </Heading>
                  <Text color="gray.100" lineHeight={1.35} >
                    68 Charlotte Street, Fitzrovia, London, W1T 4QF
                  </Text>
                </Box>
              </RadioGroup.ItemText>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator scale="1.7" />
            </RadioGroup.Item>
            <RadioGroup.Item
              value="2"
              gap="1.5rem"
              display="flex"
              justifyContent="space-between"
              bg="gray.250"
              p={{ base: "1.5rem", sm: "2rem" }}
            >
              <RadioGroup.ItemText>
                <Box fontSize={{ base: "1.45rem", sm: "1.5rem" }}>
                  <Heading
                    as="h4"
                    fontFamily="playfair"
                    mb="1rem"
                    lineHeight={1.4}
                    textTransform="uppercase"
                    fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                  >
                    Lush & Luxe – West London
                  </Heading>
                  <Text color="gray.100" lineHeight={1.35}>
                    123 West Street, Kensington, London, W8 5TT
                  </Text>
                </Box>
              </RadioGroup.ItemText>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator scale="1.7" />
            </RadioGroup.Item>
          </Flex>
        </RadioGroup.Root>
        <StepNavigationBtns
          prevOnClick={() => setStep(step - 1)}
          nextOnClick={() => setStep(step + 1)}
        />
      </Flex>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "flex" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectLocation;
