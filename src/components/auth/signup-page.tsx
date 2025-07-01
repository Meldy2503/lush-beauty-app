"use client";

import Button from "@/components/ui/button";
import { Flex, Stack } from "@chakra-ui/react";
import { InputElement } from "../ui/input-element";
import AuthWrapper from "./auth-wrapper";

const SignUpPage = () => {
  return (
    <AuthWrapper authType="signup">
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
          <InputElement label="Address" placeholder="2 Beverley street" />
          <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
            <InputElement label="Postcode" placeholder="E13RFF" />
            <InputElement label="Town/City" placeholder="Manchester" />
          </Flex>
          <InputElement label="Country" placeholder="United Kingdom" />
          <InputElement type="password" label="Password" placeholder="*****" />
          <Button w="full">Sign up</Button>
        </Stack>
      </form>
    </AuthWrapper>
  );
};

export default SignUpPage;
