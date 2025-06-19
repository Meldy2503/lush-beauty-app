"use client";

import {
  Accordion,
  Box,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
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
        {" "}
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
        <Accordion.Root
          collapsible
          multiple
          variant={"plain"}
          h="65vh"
          overflowY={"auto"}
        >
          {items.map((item, index) => (
            <Accordion.Item key={index} value={item.value} py=".4rem">
              <Accordion.ItemTrigger
                bg="gray.250"
                py="2.5rem"
                px={{ base: "1.5rem", sm: "2.5rem" }}
                borderRadius={"0rem"}
              >
                <Box mr="1rem" flex="1">
                  <Text
                    fontSize={{ base: "1.5rem", md: "1.6rem" }}
                    lineHeight={1.4}
                    textTransform={"uppercase"}
                    fontFamily="playfair"
                    mb=".7rem"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize={{ base: "1.4rem", md: "1.5rem" }}
                    lineHeight={1.4}
                    color="gray.100"
                  >
                    {item.subTitle}
                  </Text>
                </Box>
                <Accordion.ItemIndicator fontSize={"2rem"} color="black" />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent
                bg="gray.250"
                borderRadius={"0rem"}
                pb="1rem"
              >
                {item.serviceTypes.map((service, index) => {
                  return (
                    <Accordion.ItemBody
                      key={index}
                      px={{ base: "1.7rem", sm: "2.5rem" }}
                      pb="1rem"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Checkbox.Root size="lg">
                        <Checkbox.HiddenInput />
                        <Checkbox.Control>
                          <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Label>
                          {" "}
                          <Text fontSize={{ base: "1.45rem", sm: "1.5rem" }}>
                            {service.serviceName}
                          </Text>
                        </Checkbox.Label>
                      </Checkbox.Root>
                      <Text
                        fontSize={{ base: "1.45rem", sm: "1.5rem" }}
                        fontWeight={"400"}
                      >
                        {" "}
                        ${service.price}
                      </Text>
                    </Accordion.ItemBody>
                  );
                })}
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>{" "}
        <HStack
          mt="auto"
          position="sticky"
          bottom="0"
          w="full"
          gap="1rem"
          justifyContent={"center"}
          alignItems={"center"}
          pt="2rem"
          bg="white"
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

const items = [
  {
    value: "a",
    title: "facial treatment",
    subTitle:
      "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    serviceTypes: [
      {
        serviceName: "Skin Analysis ",
        price: 20,
      },
      {
        serviceName: "Exfoliation ",
        price: 10,
      },
      {
        serviceName: "Hydrating Mask",
        price: 25,
      },
      {
        serviceName: "Face & Neck Massage",
        price: 15,
      },
    ],
  },
  {
    value: "b",
    title: "Manicure & Pedicure",
    subTitle: "Nail care that leaves you polished and pampered.",
    text: "We offer a full range of beauty services including hair styling, coloring, facials, waxing, manicures, pedicures, makeup, and more. Whether you're looking for a quick refresh or a full transformation, our expert team has you covered.",
    serviceTypes: [
      {
        serviceName: "Skin Analysis ",
        price: 20,
      },
      {
        serviceName: "Exfoliation ",
        price: 10,
      },
      {
        serviceName: "Hydrating Mask",
        price: 25,
      },
      {
        serviceName: "Face & Neck Massage",
        price: 15,
      },
    ],
  },
  {
    value: "c",
    title: "Hair Styling & Cut",
    subTitle:
      "Fresh cuts, flawless styling — made just for you. Whether it's a trim, big chop.",
    text: "We only use high-quality, salon-grade, and cruelty-free products that are gentle on your skin and hair. We carefully select brands that deliver results while aligning with our values of beauty and wellness.",
    serviceTypes: [
      {
        serviceName: "Skin Analysis ",
        price: 20,
      },
      {
        serviceName: "Exfoliation ",
        price: 10,
      },
      {
        serviceName: "Hydrating Mask",
        price: 25,
      },
      {
        serviceName: "Face & Neck Massage",
        price: 15,
      },
    ],
  },
  {
    value: "d",
    title: "Hair Coloring",
    subTitle: "Change your shade, refresh your style.",
    text: "We understand that life happens! We kindly ask for at least 24 hours' notice for cancellations or changes. This allows us to accommodate other guests and respect everyone's time.",
    serviceTypes: [
      {
        serviceName: "Skin Analysis ",
        price: 20,
      },
      {
        serviceName: "Exfoliation ",
        price: 10,
      },
      {
        serviceName: "Hydrating Mask",
        price: 25,
      },
      {
        serviceName: "Face & Neck Massage",
        price: 15,
      },
    ],
  },
  {
    value: "e",
    title: "Waxing & Hair Removal",
    subTitle: "Smooth, clean, and confident.",
    text: "We understand that life happens! We kindly ask for at least 24 hours' notice for cancellations or changes. This allows us to accommodate other guests and respect everyone's time.",
    serviceTypes: [
      {
        serviceName: "Skin Analysis ",
        price: 20,
      },
      {
        serviceName: "Exfoliation ",
        price: 10,
      },
      {
        serviceName: "Hydrating Mask",
        price: 25,
      },
      {
        serviceName: "Face & Neck Massage",
        price: 15,
      },
    ],
  },
];
