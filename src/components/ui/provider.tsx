"use client";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from "../footer";

const customConfig = {
  ...defaultConfig,
  theme: {
    breakpoints: {
      xs: "350px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    tokens: {
      fonts: {
        heading: { value: "'Allura', cursive" },
        body: { value: "'Lato', sans-serif" },
        lato: { value: "'Lato', sans-serif" },
        playfair: { value: "'Playfair Display', serif" },
        allura: { value: "'Allura', cursive" },
      },
      colors: {
        black: { value: "#000000" },
        white: { value: "#FFFFFF" },
        yellow: {
          50: { value: "#E4B169" },
          100: { value: "#DB9935" },
          150: { value: "#A9762A" },
        },
        gray: {
          50: { value: "#424242" },
          100: { value: "#1a1a1a" },
        },
      },
    },
  },
};

const system = createSystem(customConfig);

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </ChakraProvider>
  );
}
