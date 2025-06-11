import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import aboutImg from "../../assets/images/academy-bg.webp";
import Wrapper from "../wrapper";
import Button from "../ui/button";

const LushVideoSection = () => {
  return (
    <Wrapper>
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
            fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
            fontFamily="playfair"
            mb={"2rem"}
            lineHeight={1.3}
          >
            DISCOVER YOUR RADIANCE
          </Heading>
          <Text
            fontWeight={"600"}
            color={"yellow.100"}
            fontFamily={"playfair"}
            fontSize={{ base: "1.8rem", md: "2rem" }}
          >
            BOOK YOUR SPOT NOW
          </Text>
          <Text py="3rem">
            At Lush & Luxe Salon, we offer a thoughtfully curated selection of
            beauty treatments tailored to enhance your natural glow. From
            flawless makeup and expert brows to indulgent facials and signature
            services, our team ensures every visit leaves you feeling pampered
            and empowered. Whether you are preparing for a special event or
            enjoying a well-deserved self-care day, step into a space where
            beauty meets serenity.
          </Text>
          <Button>Book Now</Button>
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

export default LushVideoSection;
