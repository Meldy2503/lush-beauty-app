"use client";

import { Accordion, Box, Heading, Span } from "@chakra-ui/react";
import { useState } from "react";
import Wrapper from "../shared/wrapper";
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
        fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
        fontFamily="playfair"
        my={"2rem"}
        lineHeight={1.3}
        textAlign={"center"}
      >
        WHAT YOU SHOULD KNOW
      </Heading>
      <Accordion.Root
        collapsible
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
                w={{base:'95%', lg: '90%'}}
                px={{ base: "1.7rem", sm: "2.5rem" }}
                pb="2rem"
                color='gray.100'
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
    title: "What services are available at Lush & Luxe?",
    text: "Lush & Luxe offers a wide range of beauty services including in-salon hair styling, coloring, facials, waxing, manicures, pedicures, makeup application, and more. You can choose to book appointments online or visit us in person based on availability.",
  },
  {
    value: "b",
    title: "Can I book appointments online and in person?",
    text: "Yes! You can book appointments online through our website for convenience, or visit the salon directly to schedule in person. Online booking allows you to choose your preferred service, stylist, date, and time.",
  },
  {
    value: "c",
    title: "What products do we use during treatments?",
    text: "We use only high-quality, professional-grade, and cruelty-free beauty products. All our products are carefully chosen to promote both effective results and a safe experience, whether you're receiving services in person or preparing for a home visit.",
  },
  {
    value: "d",
    title: "What is the cancellation and rescheduling policy?",
    text: "We ask for at least 24 hours’ notice for any cancellations or rescheduling. This helps us manage our bookings effectively and offer available slots to other clients. You can reschedule online or by calling the salon directly.",
  },
];
