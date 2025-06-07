"use client";

import { Box } from "@chakra-ui/react";
import ServiceHero from "./service-hero";
import VisitUsSection from "./visit-us";
import CtaSection from "./cta-section";
import ServiceListSection from "./service-list";

export default function ServicePage() {
  return (
    <Box>
      <ServiceHero />
      <ServiceListSection />
      <VisitUsSection />
      <CtaSection />
    </Box>
  );
}
