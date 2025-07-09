"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { MdLightbulb } from "react-icons/md";

const Pendulum = () => {
  const swingAnimation = `pendulumSwing 1s infinite ease-in-out`;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py="8rem"
      position="relative"
      overflow="hidden"
      width="100%"
      h="100vh"
    >
      {/* Bulb */}
      <Box
        position="absolute"
        top="40%"
        left="50%"
        transform="translateX(-50%)"
        width="70px"
        height="70px"
        borderRadius="50%"
        bg="transparent"
        animation={swingAnimation}
      >
        <Box
          as={MdLightbulb}
          boxSize="70px"
          color="yellow.100"
          filter="drop-shadow(0 0 15px rgba(219, 153, 53, 0.7))"
        />
        <Box
          position="absolute"
          bottom="-50px"
          left="50%"
          transform="translateX(-50%)"
          width="100px"
          height="50px"
          bg="rgba(219, 153, 53, 0.3)"
          borderRadius="50%"
          filter="blur(10px)"
        />
      </Box>
      <Text mt="7rem">Loading......</Text>
    </Flex>
  );
};

export default Pendulum;
