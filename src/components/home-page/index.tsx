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
import ReviewSection from "./reviews";
import OurStoreSection from "./our-store";
// import Test from "./test";

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      {/* <Test /> */}
      <AboutUsSection />
      <OurWorkSection />
      <ReviewSection />
      <OurStoreSection />
      <LushVideoSection />
      {/* <Pendulum /> */}
      <LushAcademy />
    </Box>
  );
}
