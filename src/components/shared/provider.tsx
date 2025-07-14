"use client";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingIcon from "./loading-icon";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";



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
        poppins: { value: "'Poppins', sans-serif" },
      },
      colors: {
        black: { value: "#000000" },
        white: { value: "#FFFFFF" },
        yellow: {
          50: { value: "#E4B169" },
          100: { value: "#DB9935" },
          150: { value: "#ca8317" },
        },
        gray: {
          50: { value: "#afaeae" },
          100: { value: "#424242" },
          150: { value: "#1a1a1a" },
          200: { value: "#ccc" },
          250: { value: "#F5F6F7" },
          300: { value: "#e2e3e3" },
        },
        backdrop:{value:'rgba(0,0,0,.7)'}
      },
    },
  },
};

const system = createSystem(defaultConfig, config);

export function Provider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const queryClient = new QueryClient();


  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <ChakraProvider value={system}>
          <PersistGate loading={null} persistor={persistor}>
            <>{loading ? <LoadingIcon /> : children}</>
            <Toaster
              position="top-right"
              toastOptions={{
                success: {
                  style: {
                    background: "green",
                    color: "white",
                    padding: "1rem",
                  },
                },
                error: {
                  style: {
                    background: "#aa2323",
                    color: "white",
                    padding: "1rem",
                  },
                },
              }}
            />
          </PersistGate>
        </ChakraProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
