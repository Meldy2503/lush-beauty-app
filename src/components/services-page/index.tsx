"use client";

import { Box } from "@chakra-ui/react";
import ServiceHeroSection from "./service-hero";
import VisitUsSection from "./visit-us";
import CtaSection from "./cta-section";
import ServiceListSection from "./service-list";

export default function ServicePage() {
  return (
    <Box>
      <ServiceHeroSection />
      <ServiceListSection />
      <VisitUsSection />
      <CtaSection />
    </Box>
  );
}
