"use client";

import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg1 from "../../assets/images/hero-img.webp";
import heroImg2 from "../../assets/images/hero-img-2.webp";

const MotionBox = motion(Box);
const MotionVideo = chakra(motion.video);

const HeroSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // to scale video from 1 to 1.5 as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <Box ref={containerRef} bg="white" position="relative" overflow={"hidden"}>
      <Box
        position="sticky"
        top="0"
        h="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Left Image */}
        <Flex
          backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${heroImg2.src})`}
          position="absolute"
          right="0"
          top="47%"
          backgroundSize="cover"
          backgroundPosition="center"
          height="85%"
          width="28%"
          color="white"
          transform="translateY(-50%)"
          zIndex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Text
            textDecoration="line-through"
            textDecorationColor="yellow.100"
            fontFamily={"playfair"}
            fontSize={{ base: "5rem", md: "6rem", lg: "7rem" }}
            fontWeight="thin"
            style={{
              textDecorationThickness: "2px",
            }}
          >
            {/* LUXE */}
            GLOW
          </Text>
        </Flex>
        {/* Right Image */}
        <Flex
          backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${heroImg1.src})`}
          position="absolute"
          left="0"
          top="47%"
          height="85%"
          width="28%"
          backgroundSize="cover"
          backgroundPosition="center"
          color="white"
          transform="translateY(-50%)"
          zIndex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Text
            textDecoration="line-through"
            textDecorationColor="yellow.100"
            fontFamily={"playfair"}
            fontSize={{ base: "5rem", md: "6rem", lg: "7rem" }}
            fontWeight="thin"
            style={{
              textDecorationThickness: "2px",
            }}
          >
            {/* LUSH */}
            GLAM
          </Text>
        </Flex>
        {/* Center Video with scale animation */}
        {/* rgba(0, 0, 0, 0.8) 20px 20px 10px -5px; /* Soft outer drop shadow  */}
        <MotionBox
          position="relative"
          width="44%"
          height="94%"
          style={{
            scale,
            boxShadow: `
                       0 22px 10px -13px rgba(0, 0, 0, 0.8),
      0 15px 10px -25px rgba(0, 0, 0, 0.8)`,
            overflow: "hidden", // Ensures shadows don't spill
          }}
          zIndex={3}
        >
          {/* Video */}
          <MotionVideo
            src="https://pikaso.cdnpk.net/private/production/1972156043/5edb9e1f-bea4-41b7-809d-8d370c870a76-0.mp4?token=exp=1762473600~hmac=9ae9dd131fc23b76936ef679ace333ce4e76cdf71ddc87e494f72b5eeca61bed"
            autoPlay
            muted
            loop
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              border: ".5px solid black",
              overflow: "hidden",
            }}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            background="radial-gradient(circle, transparent 0%, rgba(0,0,0,1) 100%)"
            zIndex={2}
            pointerEvents="none"
          />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroSection;
