"use client";

import { Accordion, Box, Heading, Span } from "@chakra-ui/react";
import { useState } from "react";
import Wrapper from "../ui/wrapper";
import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";

const OurFaqSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <Wrapper bg="gray.250">
      <Heading
        color={"yellow.100"}
        fontFamily={"playfair"}
        fontSize={{ base: "1.8rem", md: "2rem" }}
        textAlign={"center"}
        mb="1.5rem"
      >
        FAQ
      </Heading>
      <Heading
        as="h3"
        fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
        fontFamily="playfair"
        my={"2rem"}
        lineHeight={1.3}
        textAlign={"center"}
      >
        WHAT YOU SHOULD KNOW
      </Heading>
      <Accordion.Root
        collapsible
        multiple
        variant={"plain"}
        pt={{ base: "1.5rem", md: "3rem" }}
        value={openItems}
        onValueChange={(details) => setOpenItems(details.value)}
      >
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value} py=".4rem">
            <Accordion.ItemTrigger
              bg="white"
              py="2.5rem"
              px={{ base: "1.5rem", sm: "2.5rem" }}
              borderRadius={"0rem"}
            >
              <Span
                flex="1"
                fontSize={{ base: "1.6rem", md: "1.7rem" }}
                mr="1rem"
                lineHeight={1.4}
              >
                {item.title}
              </Span>
              <Box color="yellow.100" cursor={"pointer"}>
                {openItems.includes(item.value) ? (
                  <AiFillMinusSquare size={24} />
                ) : (
                  <BsPlusSquareFill size={20} />
                )}
              </Box>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent bg="white" borderRadius={"0rem"}>
              <Accordion.ItemBody
                w="95%"
                px={{ base: "1.7rem", sm: "2.5rem" }}
                pb="2rem"
              >
                {item.text}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Wrapper>
  );
};

export default OurFaqSection;

const items = [
  {
    value: "a",
    title: "What services do you offer at Lush & Luxe?",
    text: "We offer a full range of beauty services including hair styling, coloring, facials, waxing, manicures, pedicures, makeup, and more. Whether you're looking for a quick refresh or a full transformation, our expert team has you covered.",
  },
  {
    value: "b",
    title: "Do I need to book an appointment in advance?",
    text: "We offer a full range of beauty services including hair styling, coloring, facials, waxing, manicures, pedicures, makeup, and more. Whether you're looking for a quick refresh or a full transformation, our expert team has you covered.",
  },
  {
    value: "c",
    title: "What products do you use during services?",
    text: "We only use high-quality, salon-grade, and cruelty-free products that are gentle on your skin and hair. We carefully select brands that deliver results while aligning with our values of beauty and wellness.",
  },
  {
    value: "d",
    title: "What's your cancellation or rescheduling policy?",
    text: "We understand that life happens! We kindly ask for at least 24 hours' notice for cancellations or changes. This allows us to accommodate other guests and respect everyone's time.",
  },
];
