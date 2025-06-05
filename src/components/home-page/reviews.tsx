import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../wrapper";
import Image from "next/image";
import aboutImg from "../../assets/images/academy-bg.webp";

const ReviewSection = () => {
  return (
    <Wrapper>
      <Box zIndex={2} boxShadow="lg" position="relative">
        <Box
          position="absolute"
          left="-2rem"
          top="-2rem"
          height={{ base: "109%", md: "112%" }}
          zIndex={-1}
          width={{ base: "50%", md: "40%" }}
          bg="yellow.100"
          borderRadius="md"
        />
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ base: "4rem", md: "2rem" }}
          bg="black"
          color="white"
          px={{ base: "2rem", sm: "5rem", lg: "8rem" }}
          py="12rem"
        >
          {/* Left: Text Content */}
          <Box w={{ base: "100%", md: "55%" }}>
            <Text>
              Lush & Luxe is my go-to for everything self-care. The products are
              top-tier, and the service is beyond amazing. Every visit feels
              like a treat — I always leave glowing!
            </Text>
            <Flex alignItems={"center"} gap={"2rem"} mt="3rem">
              <Image
                src={aboutImg}
                alt="image of a lush customer"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />{" "}
              <Text>Nancy Katherine</Text>
            </Flex>
          </Box>

          {/* Right: Image*/}
          <Flex
            w={{ base: "100%", md: "40%" }}
            direction={"column"}
            alignItems={"flex-end"}
          >
            <Heading
              as="h3"
              fontSize={{ base: "3rem", md: "4rem" }}
              fontFamily="playfair"
              mb={4}
            >
              REVIEWS
            </Heading>{" "}
            <Text color={"yellow.50"} mt="1rem">
              {" "}
              YOUR KIND WORDS
            </Text>{" "}
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default ReviewSection;
