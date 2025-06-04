"use client";

// import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import HeroSection from "./hero";
import Pendulum from "../pendulum";

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroSection />
      <Pendulum />
    </Box>
  );
}
