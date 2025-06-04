import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Box px="10rem" mt="10rem">
      <Text color={{ base: "red", lg: "green" }}>namegggggggg</Text>
      <Text fontFamily="playfair">This uses Playfair Display</Text>
      <Text fontFamily="allura">This uses Allura</Text>
      <Text fontFamily="lato">This uses Menlo monospace</Text>
    </Box>
  );
};

export default HeroSection;
