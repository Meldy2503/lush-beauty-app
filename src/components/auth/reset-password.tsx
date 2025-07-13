"use client";

import { resetPasswordSchema } from "@/schema/auth";
import { useResetPasswordMutation } from "@/services/api/auth";
import { ResetPasswordType } from "@/types/auth";
import { Field, Flex, PinInput } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../shared/button";
import { InputElement } from "../shared/input-element";
import AuthWrapper from "./auth-wrapper";

const ResetPasswordPage = () => {
  const resetPasswordMutation = useResetPasswordMutation();

  const { mutateAsync: resetPassword } = resetPasswordMutation;
  const isLoading = resetPasswordMutation.isPending;

  const formHook = useForm<ResetPasswordType>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      token: "",
      newPassword: "",
    },
  } as { resolver: Resolver<ResetPasswordType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formHook;

  const submit: SubmitHandler<ResetPasswordType> = async (
    data: ResetPasswordType
  ) => {
    console.log(data);
    try {
      const result = await resetPassword(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success("Password reset successfully!");
        reset();
      }
    } catch (error) {
      console.error("Reset Password error:", error);
    }
  };
  return (
    <AuthWrapper authType="resetPassword">
      <form onSubmit={handleSubmit(submit)}>
        <Flex gap={{ base: "3rem", md: "3.5rem" }} flexDir={"column"}>
          <Field.Root invalid={!!errors.token?.message}>
            <Field.Label fontSize={"1.5rem"} mb=".6rem">
              Enter otp
            </Field.Label>
            <Controller
              name="token"
              control={formHook.control}
              render={({ field }) => (
                <PinInput.Root
                  otp
                  type="alphanumeric"
                  size="2xl"
                  onValueChange={(e) => {
                    const value = Array.isArray(e.value)
                      ? e.value.join("")
                      : e.value;
                    field.onChange(value);
                  }}
                >
                  <PinInput.HiddenInput />
                  <PinInput.Control display={"flex"} flexWrap={"wrap"}>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <PinInput.Input
                        key={i}
                        index={i}
                        css={{
                          w: { base: "3rem", sm: "5rem", md: "7rem" },
                          h: { base: "4rem", sm: "5rem", md: "7rem" },
                          fontSize: "2rem",
                        }}
                      />
                    ))}
                  </PinInput.Control>
                </PinInput.Root>
              )}
            />
            <Field.ErrorText fontSize={"1.4rem"} lineHeight={"1.3"} mt=".3rem">
              {errors.token?.message}
            </Field.ErrorText>
          </Field.Root>
          <InputElement
            type="password"
            label="New Password"
            placeholder="*****"
            register={register("newPassword")}
            errorMessage={errors.newPassword?.message}
          />
          <Button w="full" disabled={isLoading} type="submit">
            {isLoading ? "Processing..." : "Reset Password"}
          </Button>
        </Flex>
      </form>
    </AuthWrapper>
  );
};

export default ResetPasswordPage;
