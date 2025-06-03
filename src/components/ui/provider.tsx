"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = {
  ...defaultConfig,
  theme: {
    tokens: {
      colors: {
        // Base colors
        black: { value: "#000000" },
        white: { value: "#FFFFFF" },
        yellow: { value: "#DB9935" },
        // semantic colors
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
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
