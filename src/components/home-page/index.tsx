"use client";

// import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import HeroSection from "./hero";
// import Pendulum from "../pendulum";
import LushAcademy from "./lush-academy";
import ServicesSection from "./services";
import OurWorkSection from "./our-works";
import AboutUsSection from "./about-us";
import LushVideoSection from "./lush-video";

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <OurWorkSection />
      <LushVideoSection />
      {/* <Pendulum /> */}
      <LushAcademy />
    </Box>
  );
}
