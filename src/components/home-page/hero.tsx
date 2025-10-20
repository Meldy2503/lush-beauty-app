"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import heroImg1 from "../../assets/images/hero-img.webp";
import scissors from "../../assets/images/scissors.png";
import heroImg2 from "../../assets/images/hero-img-2.webp";
import heroImg3 from "../../assets/images/test.webp";
import Button from "../shared/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface SideImageProps {
  src: string;
  text: string;
  side: string;
}

const MotionBox = motion(Box);
const MotionVideo = chakra(motion.video);

const VIDEO_URL =
  "https://pikaso.cdnpk.net/private/production/1972156043/5edb9e1f-bea4-41b7-809d-8d370c870a76-0.mp4?token=exp=1762473600~hmac=9ae9dd131fc23b76936ef679ace333ce4e76cdf71ddc87e494f72b5eeca61bed";

const SideImage = ({ src, text, side }: SideImageProps) => (
  <Flex
    backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${src})`}
    position="absolute"
    {...(side === "left" ? { left: "0" } : { right: "0" })}
    top="0"
    height="90%"
    width="32%"
    backgroundSize="cover"
    backgroundPosition="center"
    color="white"
    zIndex={1}
    justifyContent="center"
    alignItems="center"
    display={{ base: "none", md: "flex" }}
  >
    <Text
      textDecoration="line-through"
      textDecorationColor="yellow.100"
      fontFamily="playfair"
      fontSize={{ base: "5rem", md: "6rem", lg: "7rem" }}
      fontWeight="thin"
      textDecorationThickness="2px"
    >
      {text}
    </Text>
  </Flex>
);

const HeroSection = () => {
  const containerRef = useRef(null);
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true }) ?? false;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [1, 3] : [1, 1] // No scaling on mobile, scaling on desktop
  );
  const handleVideoLoad = useCallback(() => setVideoLoaded(true), []);

  return (
    <Box ref={containerRef} bg="white" position="relative" overflow="hidden" mt='5rem'>
      <Flex
        height={{ base: "85vh", "2xl": "75vh" }}
        justifyContent="center"
        alignItems="center"
       
      >
        <SideImage src={heroImg1.src} text="GLAM" side="left" />
        <SideImage src={heroImg2.src} text="GLOW" side="right" />

        <MotionBox
          position="relative"
          width={{ base: "100%", lg: "38%" }}
          height="100%"
          boxShadow={{
            base: "none",
            lg: "0 22px 10px -13px rgba(0,0,0,0.8), 0 15px 10px -25px rgba(0,0,0,0.8)",
          }}
          style={{
            scale,
            overflow: "hidden",
          }}
          zIndex={3}
        >
          {!videoLoaded && (
            <Box
              position="absolute"
              inset="0"
              width="100%"
              height="100%"
              zIndex={1}
              bg={`url(${heroImg3.src}) center center / cover no-repeat`}
            />
          )}

          <MotionVideo
            src={VIDEO_URL}
            poster={heroImg3.src}
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              height: "100%",
              objectPosition: "top",
              border: ".5px solid gray",
              display: videoLoaded ? "block" : "none",
            }}
            onLoadedData={handleVideoLoad}
          />
          <Flex
            position="absolute"
            
            inset="0"
            width="100%"
            height="100%"
            background={{
              base: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.65))",
              lg: "radial-gradient(circle, transparent -10%, rgba(0,0,0,1) 100%)",
            }}
            zIndex={2}
            pointerEvents="none"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            color="white"
            textAlign="center"
          >
            <Box
              position="relative"
              display={{ base: "block", lg: "none" }}
              pt="5rem"
            >
              <Box position="absolute" bottom="35%" right="-3rem">
                <Image src={scissors} alt="scissors" width={160} height={160} />
              </Box>
              <Text
                position="relative"
                fontFamily="playfair"
                fontSize={{ base: "4.5rem", sm: "5.5rem" }}
                fontWeight="thin"
                py="2rem"
                px={{ base: "3rem", sm: "7rem" }}
                border="1px solid white"
                borderRight="none"
                borderBottom="none"
              >
                LUSH & <br /> LUXE
                <Box
                  as="span"
                  position="absolute"
                  left={0}
                  top={0}
                  height="100%"
                  width="60%"
                  borderBottom="1px solid white"
                  pointerEvents="none"
                  zIndex={1}
                />
                <Box
                  as="span"
                  position="absolute"
                  right={0}
                  top={0}
                  height="50%"
                  width="0"
                  borderRight="1px solid white"
                  pointerEvents="none"
                  zIndex={1}
                />
              </Text>
              <Text fontSize="2.5rem" py="3rem" letterSpacing={".5rem"}>
                BEAUTY SALON
              </Text>
              <VStack pointerEvents="auto">
                <Button
                  bg="transparent"
                  borderWidth="1px"
                  borderColor="white"
                  href={token ? "/book-appointment" : "/login"}
                >
                  BOOK APPOINTMENT
                </Button>
              </VStack>
            </Box>
          </Flex>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default HeroSection;
