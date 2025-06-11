"use client";

import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import bgImage from "../../../assets/images/contact-bg.webp";
import { InputElement } from "../../../components/ui/input-element";

const Login = () => {
  const router = useRouter();

  return (
    <Flex
      backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bgImage.src})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top={"0"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Box
        w={{ base: "95%", md: "80%" }}
        bg="gray.250"
        p="2rem"
        flexDir={"column"}
      >
        <Button
          onClick={() => router.back()}
          bg="transparent"
          color="black"
          px={"0"}
          hover="transparent"
        >
          ← Go Back
        </Button>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          mb="5rem"
        >
          <Logo />
          <Flex
            gap="2rem"
            w={{ base: "100%", md: "80%", xl: "50%" }}
            direction={"column"}
            h="100%"
            mt="4rem"
            overflow={"auto"}
          >
            <form>
              <Stack gap="2rem">
                <InputElement label="Full name" placeholder="Peter Smith" />
                <InputElement
                  label="Email address"
                  placeholder="peter@gmail.com"
                  type="email"
                />
                <InputElement
                  label="Phone number"
                  placeholder="+447056835551"
                  type="number"
                />
                <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
                  <InputElement label="Country" placeholder="Peter Smith" />
                  <InputElement label="State" placeholder="Peter Smith" />
                </Flex>
                <InputElement label="Address" placeholder="2 Beverley street" />
                <InputElement
                  type="password"
                  label="Password"
                  placeholder="*****"
                />
                <Button w="full">Sign in</Button>
              </Stack>
            </form>{" "}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
