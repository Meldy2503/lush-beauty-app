"use client";

import Button from "@/components/shared/button";
import { Stack } from "@chakra-ui/react";
import { InputElement } from "../shared/input-element";
import AuthWrapper from "./auth-wrapper";
import { useLoginMutation } from "@/services/api/auth";
import { LoginType } from "@/types/auth";
import toast from "react-hot-toast";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "@/schema/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const loginMutation = useLoginMutation();

  const { mutateAsync: login } = loginMutation;
  const isLoading = loginMutation.isPending;
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const formHook = useForm<LoginType>({
    resolver: yupResolver(LoginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  } as { resolver: Resolver<LoginType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHook;

  const submit: SubmitHandler<LoginType> = async (data: LoginType) => {
    try {
      const result = await login(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success("Login Successful!");
        router.push(redirect);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <AuthWrapper authType="login">
      <form onSubmit={handleSubmit(submit)}>
        <Stack gap="3rem">
          <InputElement
            label="Email address"
            placeholder="peter@gmail.com"
            type="email"
            autoComplete="email"
            register={register("email")}
            errorMessage={errors.email?.message}
          />
          <InputElement
            type="password"
            label="Password"
            placeholder="*****"
            register={register("password")}
            errorMessage={errors.password?.message}
          />
          <Button w="full" disabled={isLoading} type="submit">
            {" "}
            {isLoading ? "Processing..." : "Sign in"}
          </Button>
        </Stack>
      </form>
    </AuthWrapper>
  );
};

export default LoginPage;
