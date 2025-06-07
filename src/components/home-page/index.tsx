"use client";

import { Box } from "@chakra-ui/react";
import HeroSection from "./hero";
import HomeCtaSection from "./home-cta";
import ServicesSection from "./services";
import OurWorkSection from "./our-works";
import LushVideoSection from "./lush-video";
import ReviewSection from "./reviews";
import ShopSection from "./shop";

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <LushVideoSection />
      <ShopSection />
      <OurWorkSection />
      <ReviewSection />
      <HomeCtaSection />
    </Box>
  );
}
