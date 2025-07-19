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
import Button from "../shared/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ServiceCardData {
  id: number;
  heading: string;
  text: string;
  list?: { item: string; value: string }[];
}

const ServiceListSection = () => {
  const token = useSelector((state: RootState) => state.auth.accessToken);
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
              bg={index % 2 === 0 ? "gray.150" : "yellow.100"}
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
                <List.Root mb="3rem">
                  <List.Item fontSize="1.5rem" listStyle={"none"}>
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
                  w="100%"
                  borderColor={"white"}
                  href={token ? "/book-appointment" : "/login"}
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

const serviceListData: ServiceCardData[] = [
  {
    id: 1,
    heading: "HAIR STYLING & CUTS",
    text: "Expert haircuts and styling tailored to your unique look. Stay fresh with modern trims and finishes.",
    list: [
      { item: "Basic Hair Trim", value: "£10" },
      { item: "Wash & Blow Dry", value: "£15" },
      { item: "Layered Haircut", value: "£20" },
      { item: "Men’s Haircut", value: "£12" },
      { item: "Kids’ Haircut", value: "£8" },
    ],
  },
  {
    id: 2,
    heading: "HAIR COLORING",
    text: "Vibrant hair colours, highlights, and tones. Refresh or transform your look with expert colour work.",
    list: [
      { item: "Root Touch-Up", value: "£25" },
      { item: "Full Hair Color", value: "£40" },
      { item: "Highlights", value: "£35" },
      { item: "Ombre/Balayage", value: "£50" },
      { item: "Color Correction", value: "£60" },
    ],
  },
  {
    id: 3,
    heading: "MANICURE & PEDICURE",
    text: "Clean, polished nails and soft feet. Enjoy relaxing hand and foot treatments in a calming space.",
    list: [
      { item: "Classic Manicure", value: "£12" },
      { item: "Gel Manicure", value: "£20" },
      { item: "Classic Pedicure", value: "£18" },
      { item: "Spa Pedicure", value: "£25" },
      { item: "Nail Art Add-On", value: "£5" },
    ],
  },
  {
    id: 4,
    heading: "LASH & BROW ARTISTRY",
    text: "Define and enhance your eyes with custom lash and brow treatments. Subtle to bold looks available.",
    list: [
      { item: "Eyebrow Shaping", value: "£10" },
      { item: "Brow Tinting", value: "£12" },
      { item: "Lash Tinting", value: "£14" },
      { item: "Classic Lash Extensions", value: "£35" },
      { item: "Volume Lash Extensions", value: "£45" },
    ],
  },
  {
    id: 5,
    heading: "WAX & HAIR REMOVAL",
    text: "Smooth, hair-free skin with gentle waxing. Ideal for face, legs, arms, underarms, and bikini line.",
    list: [
      { item: "Eyebrow Wax", value: "£8" },
      { item: "Upper Lip Wax", value: "£6" },
      { item: "Underarm Wax", value: "£12" },
      { item: "Full Leg Wax", value: "£25" },
      { item: "Bikini Wax", value: "£20" },
    ],
  },
  {
    id: 6,
    heading: "FACIAL TREATMENTS",
    text: "Deep-cleanse, hydrate, and renew your skin. Custom facials for all skin types and concerns.",
    list: [
      { item: "Express Facial", value: "£25" },
      { item: "Deep Cleansing Facial", value: "£35" },
      { item: "Anti-Aging Facial", value: "£45" },
      { item: "Hydrating Facial", value: "£30" },
      { item: "Acne Treatment Facial", value: "£40" },
    ],
  },
];

