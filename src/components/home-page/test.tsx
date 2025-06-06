"use client";

import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import aboutImg from "../../assets/images/about-us-bg.webp";

const Test = () => {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const MotionBox = motion(Box);



  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Text>Welcome to Jobble!</Text>
      </motion.div>
      <motion.div style={{ rotate }}>
        <Image
          src={aboutImg.src}
          alt="Left"
          objectFit="cover"
          width={100}
          height={100}
        />{" "}
      </motion.div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Hover me
      </motion.button>
      <motion.div drag dragConstraints={{ left: 0, right: 300 }}>
        Drag me
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        ↓
      </motion.div>
      <MotionBox
        layout
        p={4}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        maxW="400px"
        mx="auto"
        mt={10}
        boxShadow="md"
      >
        <Text fontWeight="bold" fontSize="lg">
          Jobble: Find Your Dream Job
        </Text>

        <Text mt={2}>
          {isExpanded
            ? "Discover thousands of remote jobs from top companies around the world. Start building your dream career today with Jobble's intuitive search and user-friendly platform!"
            : "Discover thousands of remote jobs from top companies..."}
        </Text>

        <Button
          mt={4}
          size="sm"
          colorScheme="blue"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </MotionBox>
    </>
  );
};

export default Test;
