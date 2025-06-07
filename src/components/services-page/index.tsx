"use client";

import { Box } from "@chakra-ui/react";
import ServiceHero from "./service-hero";
import VisitUsSection from "./visit-us";

export default function ServicePage() {
  return (
    <Box>
      <ServiceHero />
      <VisitUsSection />
    </Box>
  );
}
