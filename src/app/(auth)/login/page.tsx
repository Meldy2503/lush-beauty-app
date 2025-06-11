"use client";

import Button from "@/components/ui/button";
import { Stack } from "@chakra-ui/react";
import { InputElement } from "../../../components/ui/input-element";
import AuthWrapper from "@/components/auth/auth-wrapper";

const Login = () => {
  return (
    <AuthWrapper authType="login">
      <form>
        <Stack gap="3rem">
          <InputElement
            label="Email address"
            placeholder="peter@gmail.com"
            type="email"
          />
          <InputElement type="password" label="Password" placeholder="*****" />
          <Button w="full">Sign in</Button>
        </Stack>
      </form>
    </AuthWrapper>
  );
};

export default Login;
