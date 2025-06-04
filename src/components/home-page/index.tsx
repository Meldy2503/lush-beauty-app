"use client";

// import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import HeroSection from "./hero";
import Pendulum from "../pendulum";
import LushAcademy from "./lush-academy";

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroSection />
      <Pendulum />
      <LushAcademy />
    </Box>
  );
}
