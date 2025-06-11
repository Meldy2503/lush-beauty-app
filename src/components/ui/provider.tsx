"use client";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingIcon from "./loading-icon";

const config = {
  ...defaultConfig,
  theme: {
    breakpoints: {
      xs: "380px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    tokens: {
      fonts: {
        body: { value: "'Lato', sans-serif" },
        lato: { value: "'Lato', sans-serif" },
        playfair: { value: "'Playfair Display', serif" },
        allura: { value: "Allura, cursive" },
        pinyon: { value: "'Pinyon Script', cursive" },
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
          50: { value: "#999" },
          100: { value: "#424242" },
          150: { value: "#1a1a1a" },
          200: { value: "#ccc" },
          250: { value: "#F5F6F7" },
        },
      },
    },
  },
};

const system = createSystem(defaultConfig, config);

export function Provider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(delay);
  }, []);

  return (
    <ChakraProvider value={system}>
      <>{loading ? <LoadingIcon /> : children}</>
    </ChakraProvider>
  );
}
