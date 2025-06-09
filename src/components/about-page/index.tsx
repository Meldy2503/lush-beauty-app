"use client";

import Footer from "../footer";
import Navbar from "../navbar";
import AboutHeroSection from "./about-hero";
import OurStorySection from "./our-story";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <OurStorySection />
      <Footer />
    </>
  );
}
