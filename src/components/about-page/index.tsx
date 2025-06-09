"use client";

import Footer from "../footer";
import Navbar from "../navbar";
import AboutHeroSection from "./about-hero";
import AboutSalonSection from "./about-salon";
import OurFaqSection from "./faq";
import OurStorySection from "./our-story";
import OurValueSection from "./our-values";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <OurStorySection />
      <AboutSalonSection />
      <OurValueSection />
      <OurFaqSection />
      <Footer />
    </>
  );
}
