"use client";

import { Box } from "@chakra-ui/react";
import ServiceHero from "./service-hero";
import VisitUsSection from "./visit-us";
import CtaSection from "./cta-section";

export default function ServicePage() {
  return (
    <Box>
      <ServiceHero />
      <VisitUsSection />
      <CtaSection />
    </Box>
  );
}
