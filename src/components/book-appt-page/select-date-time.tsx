"use client";

import { Box, Flex, Heading, HStack, RadioGroup, Text } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import CalendarComponent from "../ui/calendar";
import StepNavigationBtns from "../ui/navigation-btns";
import BookingSummary from "./booking-summary";

interface SelectDateTimeProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectDateTime = ({ setStep, step }: SelectDateTimeProps) => {
  return (
    <Flex gap="2rem" alignItems="stretch">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        shadow={"sm"}
        px="2rem"
        pt="2rem"
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
          Select Date/Time
        </Heading>
        <Flex
          flexDir={{ base: "column-reverse", lg: "column" }}
          gap={{ base: "4rem", md: "5rem" }}
          h={{ base: "100%", md: "60vh" }}
          pb={{ base: "5rem", md: "2rem" }}
          overflowY={"auto"}
        >
          <Box mt="1rem">
            <CalendarComponent />
          </Box>

          <Box>
            <Text
              pb="2rem"
              pt={{ base: "1rem", md: "0rem" }}
              fontWeight={"600"}
            >
              Available Time
            </Text>
            <RadioGroup.Root
              defaultValue="1"
              gap="2rem"
              display="flex"
              justifyContent="space-between"
              px="2px"
            >
              <HStack
                gap={{ base: "2rem 3rem", md: "2.5rem 4rem" }}
                flexWrap={"wrap"}
              >
                {timeSlots.map((item) => (
                  <RadioGroup.Item
                    key={item.value}
                    value={item.value}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator scale="1.2" />
                    <RadioGroup.ItemText
                      fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                      ml=".2rem"
                    >
                      {item.label}
                    </RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </HStack>
            </RadioGroup.Root>
          </Box>
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

export default SelectDateTime;

const timeSlots = [
  { label: "9:00am", value: "1" },
  { label: "11:00am", value: "2" },
  { label: "1:00pm", value: "3" },
  { label: "3:00pm", value: "4" },
  { label: "5:00pm", value: "5" },
  { label: "7:00pm", value: "6" },
];
