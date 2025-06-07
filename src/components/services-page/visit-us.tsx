import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import aboutImg from "../../assets/images/visit-us.webp";
import Wrapper from "../wrapper";

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
        <Box w={{ base: "100%", md: "50%" }}>
          <Heading
            as="h2"
            fontSize={{ base: "2.5rem", md: "3.5rem" }}
            fontFamily="playfair"
            mb={4}
          >
            VISIT US
          </Heading>
          <Text
            fontWeight={"600"}
            color={"yellow.100"}
            fontFamily={"allura"}
            fontSize={{ base: "1.8rem", md: "2rem" }}
          >
            YOUR BEAUTY JOURNEY STARTS HERE
          </Text>
          <Text pb={"3rem"} pt="2rem">
            Step into Lush & Luxe Salon for premium beauty services in a calm,
            welcoming environment. Whether you are coming for a quick touch-up
            or a full pamper session, we’re here to help you look and feel your
            absolute best.
          </Text>
          <Flex
            gap={{ base: "1rem", sm: "2rem" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <Box w={{ base: "100%", md: "55%" }}>
              <Heading
                as="h3"
                fontSize={{ base: "1.6rem", md: "1.8rem" }}
                fontFamily="playfair"
                mb={4}
                fontWeight={"600"}
              >
                Working Hours{" "}
              </Heading>{" "}
              <Text>Monday – Saturday: 9:00 AM – 8:00 PM</Text>
              <Text>Sunday: Closed</Text>
            </Box>
            <Box w={{ base: "100%", md: "40%" }}>
              <Heading
                as="h3"
                fontSize={{ base: "1.6rem", md: "1.8rem" }}
                fontFamily="playfair"
                mb={4}
                fontWeight={"600"}
              >
                Location{" "}
              </Heading>{" "}
              <Text>125 Kingsway, London WC2B 6NH, United Kingdom</Text>
            </Box>
          </Flex>
          <Flex
            gap={{ base: "1rem", sm: "2rem" }}
            flexDir={{ base: "column", sm: "row" }}
            mt={{ base: "1rem", sm: "2rem" }}
          >
            <Box w={{ base: "100%", md: "55%" }}>
              <Heading
                as="h3"
                fontSize={{ base: "1.6rem", md: "1.8rem" }}
                fontFamily="playfair"
                mb={4}
                fontWeight={"600"}
              >
                Email{" "}
              </Heading>{" "}
              <Text>hello@lushluxe.co.uk</Text>
            </Box>
            <Box w={{ base: "100%", md: "40%" }}>
              <Heading
                as="h3"
                fontSize={{ base: "1.6rem", md: "1.8rem" }}
                fontFamily="playfair"
                mb={4}
                fontWeight={"600"}
              >
                Call Us{" "}
              </Heading>{" "}
              <Text>+44 20 1234 5678</Text>
            </Box>
          </Flex>
        </Box>

        {/* Right: Image*/}
        <Box position="relative" w={{ base: "100%", md: "45%" }}>
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
