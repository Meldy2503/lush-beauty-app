"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Box, Text, Spinner, VStack } from "@chakra-ui/react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token) {
       router?.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [token, router, pathname]);

  if (!token) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack gap={"3rem"}>
          <Spinner size="lg" color="yellow.500" />
          <Text>Redirecting to login...</Text>
        </VStack>
      </Box>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
