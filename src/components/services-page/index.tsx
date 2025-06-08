"use client";

import ServiceHeroSection from "./service-hero";
import VisitUsSection from "./visit-us";
import CtaSection from "./cta-section";
import ServiceListSection from "./service-list";
import Navbar from "../navbar";
import Footer from "../footer";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <ServiceHeroSection />
      <ServiceListSection />
      <VisitUsSection />
      <CtaSection />
      <Footer />
    </>
  );
}
