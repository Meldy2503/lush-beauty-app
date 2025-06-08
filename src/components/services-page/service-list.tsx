"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  Text,
} from "@chakra-ui/react";

import Button from "../button";

interface ServiceCardData {
  id: number;
  heading: string;
  text: string;
  list?: { item: string; value: string }[];
}

const serviceListData: ServiceCardData[] = [
  {
    id: 1,
    heading: "HAIR STYLING & CUTS",
    text: "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    list: [
      {
        item: "Skin Analysis ",
        value: "$4",
      },
      { item: "Skin Consultation", value: "$7" },
      { item: "Skin Treatment", value: "$8" },
      { item: "Skin Therapy", value: "$15" },
      { item: "Skin Care", value: "$12" },
    ],
  },
  {
    id: 2,
    heading: "HAIR COLORING",
    text: "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    list: [
      {
        item: "Skin Analysis ",
        value: "$4",
      },
      { item: "Skin Consultation", value: "$7" },
      { item: "Skin Treatment", value: "$8" },
      { item: "Skin Therapy", value: "$15" },
      { item: "Skin Care", value: "$12" },
    ],
  },
  {
    id: 3,
    heading: "MANICURE & PEDICURE",
    text: "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    list: [
      {
        item: "Skin Analysis ",
        value: "$4",
      },
      { item: "Skin Consultation", value: "$7" },
      { item: "Skin Treatment", value: "$8" },
      { item: "Skin Therapy", value: "$15" },
      { item: "Skin Care", value: "$12" },
    ],
  },
  {
    id: 4,
    heading: "LASH & BROW ARTISTRY",
    text: "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    list: [
      {
        item: "Skin Analysis ",
        value: "$4",
      },
      { item: "Skin Consultation", value: "$7" },
      { item: "Skin Treatment", value: "$8" },
      { item: "Skin Therapy", value: "$15" },
      { item: "Skin Care", value: "$12" },
    ],
  },
  {
    id: 5,
    heading: "WAX & HAIR REMOVAL",
    text: "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    list: [
      {
        item: "Skin Analysis ",
        value: "$4",
      },
      { item: "Skin Consultation", value: "$7" },
      { item: "Skin Treatment", value: "$8" },
      { item: "Skin Therapy", value: "$15" },
      { item: "Skin Care", value: "$12" },
    ],
  },
  {
    id: 6,
    heading: "FACIAL TREATMENTS",
    text: "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    list: [
      {
        item: "Skin Analysis ",
        value: "$4",
      },
      { item: "Skin Consultation", value: "$7" },
      { item: "Skin Treatment", value: "$8" },
      { item: "Skin Therapy", value: "$15" },
      { item: "Skin Care", value: "$12" },
    ],
  },
];

const ServiceListSection = () => {
  return (
    <Box width="100%" data-testid="services-section" pt="10rem">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={0}
      >
        {serviceListData.map((service, index) => {
          return (
            <GridItem
              key={service.id}
              bg={index % 2 === 0 ? "black" : "yellow.100"}
              color="white"
            >
              <Flex
                direction="column"
                h="100%"
                py="5rem"
                px={{ base: "2.5rem", sm: "4rem", xl: "8rem" }}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: "2rem", md: "2.3rem" }}
                  fontFamily="playfair"
                  mb={"1.5rem"}
                  lineHeight={1.4}
                >
                  {service.heading}
                </Heading>
                <Text pb="1.5rem">{service.text}</Text>
                <List.Root mb='3rem'>
                  <List.Item fontSize="1.5rem" listStyle={'none'}>
                    <Flex direction={"column"} gap="1rem">
                      {service.list?.map((item, idx) => (
                        <Flex
                          key={idx}
                          gap="2rem"
                          justifyContent="space-between"
                        >
                          <Text>{item.item}</Text>
                          <Text>{item.value}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </List.Item>
                </List.Root>

                <Button
                  bg="transparent"
                  color="white"
                  borderWidth="1px"
                  w='100%'
                  borderColor={"white"}
                >
                  Book Now
                </Button>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ServiceListSection;
