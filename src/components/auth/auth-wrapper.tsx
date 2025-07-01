"use client";

import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
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
        w={{ base: "95%", md: "80%", xl:'60%' }}
        bg="gray.250"
        p="2rem"
        flexDir={"column"}
      >
        <Button
          bg="transparent"
          color="black"
          px={"0"}
          hover="transparent"
          href='/'
        >
          ← Home Page
        </Button>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          mb="5rem"
          py={authType === "signup" ? "0rem" : { base: "3rem", md: "10rem" }}
        >
          <Logo />
          <Heading
            as="h2"
            fontSize={{ base: "1.7rem", md: "2rem" }}
            lineHeight={1.3}
            textAlign="center"
            mt={8}
          >
            {authTypes[authType]}
          </Heading>
          <Flex
            gap="2rem"
            w={{ base: "100%", md: "80%", xl: "70%" }}
            direction={"column"}
            h="100%"
            mt="4rem"
            overflow={"auto"}
          >
            {children}
          </Flex>
          <Text textAlign="center" mt={"3rem"}>
            {authType === "signup"
              ? "Already have an account?"
              : "Don’t have an account? "}{" "}
            <Link
              href={authType === "signup" ? "/login" : "/sign-up"}
              style={{ fontWeight: "bold", color: "#A9762A" }}
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
