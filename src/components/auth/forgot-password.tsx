"use client";

import { forgotPasswordSchema } from "@/schema/auth";
import { useForgotPasswordMutation } from "@/services/api/auth";
import { ForgotPasswordType } from "@/types/auth";
import { Flex, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../shared/button";
import { InputElement } from "../shared/input-element";
import AuthWrapper from "./auth-wrapper";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const forgotPasswordMutation = useForgotPasswordMutation();

  const { mutateAsync: forgotPassword } = forgotPasswordMutation;
  const isLoading = forgotPasswordMutation.isPending;

  const formHook = useForm<ForgotPasswordType>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  } as { resolver: Resolver<ForgotPasswordType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formHook;

  const submit: SubmitHandler<ForgotPasswordType> = async (
    data: ForgotPasswordType
  ) => {
    try {
      const result = await forgotPassword(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success(
          "OTP sent!. Please check your email for the verification code.!"
        );
        router.push("/reset-password");
        reset();
      }
    } catch (error) {
      console.error("Forgot Password error:", error);
    }
  };

  return (
    <AuthWrapper authType="forgotPassword">
      <Text
        mb="2rem"
        textAlign={"center"}
        w={{ base: "full", md: "70%" }}
        mx="auto"
      >
        Enter your email in the box below and we will send you an OTP to reset
        your password.
      </Text>
      <form onSubmit={handleSubmit(submit)}>
        <Flex gap="4rem" flexDir={"column"}>
          <InputElement
            label="Email address"
            placeholder="peter@gmail.com"
            type="email"
            register={register("email")}
            errorMessage={errors.email?.message}
          />
          <Button w="full" disabled={isLoading} type="submit">
            {isLoading ? "Processing..." : "Send Email"}
          </Button>
        </Flex>
      </form>
    </AuthWrapper>
  );
};

export default ForgotPasswordPage;
