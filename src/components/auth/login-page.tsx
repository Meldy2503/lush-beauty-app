"use client";

import Button from "@/components/shared/button";
import { Flex, Stack } from "@chakra-ui/react";
import { InputElement } from "../shared/input-element";
import AuthWrapper from "./auth-wrapper";
import { useLoginMutation } from "@/services/api/auth";
import { LoginType } from "@/types/auth";
import toast from "react-hot-toast";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "@/schema/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setRedirectToOrderSummary } from "@/store/slices/cart-slice";

const LoginPage = () => {
  const loginMutation = useLoginMutation();
  const dispatch = useDispatch();

  const redirectToOrderSummary = useSelector(
    (state: RootState) => state.cart.redirectToOrderSummary
  );

  const { mutateAsync: login } = loginMutation;
  const isLoading = loginMutation.isPending;
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const formHook = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  } as { resolver: Resolver<LoginType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formHook;

  const submit: SubmitHandler<LoginType> = async (data: LoginType) => {
    try {
      const result = await login(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success("Login Successful!");
        if (redirectToOrderSummary) {
          dispatch(setRedirectToOrderSummary(false));
          router.push("/shop/order-summary");
        } else {
          router.push(redirect); // fallback to default (?redirect=...)
        }
        reset();
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
        </Stack>
        <Flex
          mb="4rem"
          mt="1rem"
          justifyContent={"flex-end"}
          color="yellow.100"
          textDecor={"underline"}
          fontWeight={"600"}
        >
          <Link href="/forgot-password">Forgot Password?</Link>
        </Flex>
        <Button w="full" disabled={isLoading} type="submit">
          {isLoading ? "Processing..." : "Sign in"}
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default LoginPage;
