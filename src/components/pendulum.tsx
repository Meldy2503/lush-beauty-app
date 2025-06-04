"use client";

// import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { MdLightbulb } from "react-icons/md";

// interface PendulumProps {
//   initialSpeed?: number;
// }

const Pendulum = () => {
  // const [speed, setSpeed] = useState(initialSpeed);
  // const [isPlaying, setIsPlaying] = useState(true);

  // Animation duration is inversely proportional to speed
  // const duration = 3 / speed;

  // Define the swing animation using CSS animation directly
  const swingAnimation = `pendulumSwing 1s infinite ease-in-out`;

  // const increaseSpeed = () => {
  //   if (speed < 5) {
  //     setSpeed(prev => prev + 0.5);
  //   }
  // };

  // const decreaseSpeed = () => {
  //   if (speed > 0.5) {
  //     setSpeed(prev => prev - 0.5);
  //   }
  // };

  // const togglePlay = () => {
  //   setIsPlaying(prev => !prev);
  // };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py="8rem"
      position="relative"
      overflow="hidden"
      bg="black"
      color="white"
      width="100%"
    >
      {/* Decorative elements */}
      <Box position="absolute" top="0" width="100%" height="2px" bg="yellow" />

      {/* String */}
      <Box
        width="2px"
        height="150px"
        bg="gray.600"
        position="relative"
        transformOrigin="top center"
        transform="rotate(0deg)"
        _before={{
          content: '""',
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "20px",
          height: "10px",
          bg: "yellow",
          borderRadius: "10px 10px 0 0",
        }}
      >
        {/* Bulb */}
        <Box
          position="absolute"
          bottom="-30px"
          left="50%"
          transform="translateX(-50%)"
          width="60px"
          height="60px"
          borderRadius="50%"
          bg="transparent"
          animation={swingAnimation}
        >
          <Box
            as={MdLightbulb}
            boxSize="60px"
            color="yellow"
            filter="drop-shadow(0 0 15px rgba(219, 153, 53, 0.7))"
          />
          <Box
            position="absolute"
            bottom="-50px"
            left="50%"
            transform="translateX(-50%)"
            width="100px"
            height="50px"
            bg="rgba(219, 153, 53, 0.15)"
            borderRadius="50%"
            filter="blur(10px)"
          />
        </Box>
      </Box>

      {/* Controls */}
      {/* <Stack 
        direction="row" 
        gap="1rem" 
        mt="8rem"
        align="center"
        justify="center"
      >
        <Button 
          onClick={decreaseSpeed} 
          disabled={speed <= 0.5}
          bg="black"
          border="1px solid"
          borderColor="yellow"
          color="white"
          _hover={{ bg: "yellow", color: "black" }}
        >
          Slower
        </Button>
        
        <Text fontSize="lg" fontWeight="bold" color="yellow">
          Speed: {speed.toFixed(1)}
        </Text>
        
        <Button 
          onClick={increaseSpeed} 
          disabled={speed >= 5}
          bg="black"
          border="1px solid"
          borderColor="yellow"
          color="white"
          _hover={{ bg: "yellow", color: "black" }}
        >
          Faster
        </Button>
        
        <Button 
          onClick={togglePlay}
          bg="yellow"
          color="black"
          _hover={{ bg: "white", color: "black" }}
          ml={4}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Stack> */}
    </Flex>
  );
};

export default Pendulum;
