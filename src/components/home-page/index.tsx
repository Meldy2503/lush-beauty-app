"use client";

import HeroSection from "./hero";
import HomeCtaSection from "./home-cta";
import ServicesSection from "./services";
import OurWorkSection from "./our-works";
import LushVideoSection from "./lush-video";
import ReviewSection from "./reviews";
import ShopSection from "./shop";
import Navbar from "../navbar";
import Footer from "../footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LushVideoSection />
      <ShopSection />
      <OurWorkSection />
      <ReviewSection />
      <HomeCtaSection />
      <Footer />
    </>
  );
}
