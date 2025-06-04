"use client";

// import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import HeroSection from "./hero";
import Pendulum from "../pendulum";
import LushAcademy from "./lush-academy";
import ServicesSection from "./services";

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection/>
      <Pendulum />
      <LushAcademy />
    </Box>
  );
}
