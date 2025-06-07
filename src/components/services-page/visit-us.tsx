import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import aboutImg from "../../assets/images/visit-us.webp";
import Wrapper from "../wrapper";
import Button from "../button";

const VisitUsSection = () => {
  return (
    <Wrapper pb={{ base: "9rem", lg: "13rem" }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: "5rem", md: "2rem" }}
      >
        {/* Left: Text Content */}
        <Box w={{ base: "100%", md: "47%" }}>
          <Heading
            as="h2"
            fontSize={{ base: "2rem", md: "3rem" }}
            fontFamily="playfair"
            mb={4}
          >
            VISIT US
          </Heading>
          <Text fontWeight={"600"} color={"yellow.100"} fontFamily={"pinyon"}>
            WELCOME TO LUSH & LUXE
          </Text>
          <Text py={"3rem"}>
            Lush & Luxe Salon offers a curated range of professional beauty
            services designed to help you feel confident, radiant, and
            refreshed. From flawless makeup and brow perfection to rejuvenating
            facials and luxury treatments, every session is customized to meet
            your unique needs. Founded with a passion for beauty and wellness,
            our studio blends skill, creativity, and care in a calm, welcoming
            environment. Whether you are getting ready for a special occasion or
            simply treating yourself, we’re here to make every visit feel like
            self-care.
          </Text>
          <Button>Learn More</Button>
        </Box>

        {/* Right: Image*/}
        <Box position="relative" w={{ base: "100%", md: "47%" }}>
          <Box zIndex={1} boxShadow="lg" position="relative">
            <Image
              src={aboutImg}
              alt="beauty salon office image"
              style={{ position: "relative" }}
              width={1000}
              height={1000}
            />
          </Box>
          <Box
            position="absolute"
            right="-1.5rem"
            top="-1.5rem"
            bottom={"5rem"}
            height="105%"
            width="85%"
            bg="black"
            borderRadius="md"
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default VisitUsSection;
