import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../ui/wrapper";
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
          <Text
            fontWeight={"600"}
            color={"yellow.100"}
            fontFamily={"playfair"}
            fontSize={{ base: "1.8rem", md: "2rem" }}
            mb={"1rem"}
          >
            BOOK YOUR SPOT NOW
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
            fontFamily="playfair"
            lineHeight={1.3}
          >
            DISCOVER YOUR RADIANCE
          </Heading>
          <Text pt="2rem" pb='3rem'>
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
          <Box
            zIndex={1}
            boxShadow="lg"
            position="relative"
            h={{ base: "300px", md: "500px" }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              poster="/images/video-img.jpg"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              <source src="/videos/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box
            position="absolute"
            right={{ base: "-1rem", md: "-2rem" }}
            top={{ base: "-1rem", md: "-2rem" }}
            bottom={{ base: "-1rem", md: "-2rem" }}
            width="85%"
            bg="black"
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default LushVideoSection;
