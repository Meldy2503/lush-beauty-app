"use client";

import Logo from "@/components/shared/logo";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaCircleArrowLeft } from "react-icons/fa6";
import bgImage from "../../assets/images/contact-bg.webp";

interface AuthWrapperProps {
  children: React.ReactNode;
  authType: keyof typeof authTypes;
}

const authTypes = {
  signup: "Create Your Account",
  login: "Login to Your Account",
};

const AuthWrapper = ({ children, authType }: AuthWrapperProps) => {
  return (
    <Flex
      backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bgImage.src})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      width="100vw"
      top={"0"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Box
        w={{ base: "95%", md: "80%", xl: "60%" }}
        bg="gray.250"
        p="2rem"
        flexDir={"column"}
        overflow={"auto"}
        h={authType === "signup" ? "100vh" : "100%"}
        rounded="md"
        my=".5rem"
      >
        <Link href={"/"}>
          <HStack gap=".7rem" mb="1.5rem">
            <FaCircleArrowLeft size="2.2rem" />
            <Text> Go to Home</Text>
          </HStack>
        </Link>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          pb={authType === "signup" ? "2rem" : { base: "3rem", md: "5rem" }}
        >
          <Logo />
          <Heading
            as="h2"
            fontSize={{ base: "2rem", md: "2.5rem" }}
            lineHeight={1.3}
            textAlign="center"
            mt={8}
          >
            {authTypes[authType]}
          </Heading>
          <Flex
            gap="2rem"
            w={{ base: "100%", md: "80%" }}
            direction={"column"}
            mt="3rem"
          >
            {children}
          </Flex>
          <Text textAlign="center" mt={"3rem"}>
            {authType === "signup"
              ? "Already have an account?"
              : "Don’t have an account? "}{" "}
            <Link
              href={authType === "signup" ? "/login" : "/sign-up"}
              style={{ fontWeight: "bold", color: "#ca8317" }}
            >
              {authType === "signup" ? "Login" : "Sign up"}
            </Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AuthWrapper;
