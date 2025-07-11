"use client";

import Button from "@/components/shared/button";
import { SignUpSchema } from "@/schema/auth";
import { useSignUpMutation } from "@/services/api/auth";
import { SignUpType } from "@/types/auth";
import { Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { InputElement } from "../shared/input-element";
import AuthWrapper from "./auth-wrapper";

const SignUpPage = () => {
  const signUpMutation = useSignUpMutation();

  const { mutateAsync: signUp } = signUpMutation;
  const isLoading = signUpMutation.isPending;
  const router = useRouter();

  const formHook = useForm<SignUpType>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      address: "",
      country: "",
      state: "",
      phone: "",
    },
  } as { resolver: Resolver<SignUpType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formHook;

  const submit: SubmitHandler<SignUpType> = async (data: SignUpType) => {
    try {
      const result = await signUp(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success("Account Created Successfully!");
        router.push("/login");
        reset();
      }
      console.log(result, "result");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <AuthWrapper authType="signup">
      <form onSubmit={handleSubmit(submit)}>
        <Stack gap="2rem">
          <InputElement
            label="Full name"
            placeholder="Peter Smith"
            autoComplete="name"
            register={register("fullName")}
            errorMessage={errors.fullName?.message}
          />
          <InputElement
            label="Email address"
            placeholder="peter@gmail.com"
            type="email"
            autoComplete="email"
            register={register("email")}
            errorMessage={errors.email?.message}
          />
          <InputElement
            label="Phone number"
            placeholder="+447056835551"
            autoComplete="mobile"
            type="number"
            register={register("phone")}
            errorMessage={errors.phone?.message}
          />
          <InputElement
            label="Address/Postcode"
            placeholder="2 Beverley street, WRF3FF"
            autoComplete="street-address"
            register={register("address")}
            errorMessage={errors.address?.message}
          />
          <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
            <InputElement
              label="State/City"
              placeholder="Manchester"
              register={register("state")}
              errorMessage={errors.state?.message}
            />
            <InputElement
              label="Country"
              placeholder="United Kingdom"
              autoComplete="country"
              register={register("country")}
              errorMessage={errors.country?.message}
            />
          </Flex>
          <InputElement
            type="password"
            label="Password"
            placeholder="*****"
            register={register("password")}
            errorMessage={errors.password?.message}
          />
          <Button w="full" disabled={isLoading} type="submit">
            {" "}
            {isLoading ? "Processing..." : "Sign up"}
          </Button>
        </Stack>
      </form>
    </AuthWrapper>
  );
};

export default SignUpPage;
