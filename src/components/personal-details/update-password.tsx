"use client";

import { Box, Stack, Text } from "@chakra-ui/react";
import Button from "../shared/button";
import { InputElement } from "../shared/input-element";
import { changePasswordSchema } from "@/schema/auth";
import { useChangePasswordMutation } from "@/services/api/auth";
import { ChangePasswordType } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdatePassword = () => {
  const changePasswordMutation = useChangePasswordMutation();

  const { mutateAsync: changePassword } = changePasswordMutation;
  const isLoading = changePasswordMutation.isPending;

  const formHook = useForm<ChangePasswordType>({
    resolver: yupResolver(changePasswordSchema),
    mode: "onSubmit",
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  } as { resolver: Resolver<ChangePasswordType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formHook;

  const submit: SubmitHandler<ChangePasswordType> = async (
    data: ChangePasswordType
  ) => {
    try {
      const result = await changePassword(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success("Password Changed Successfully!");
        reset();
      }
    } catch (error) {
      console.error("Password Change error:", error);
    }
  };
  return (
    <Box>
      <Text mb="3rem" mt="1rem" textAlign={"center"}>
        You can update your password at any time below.
      </Text>

      <Box
        borderWidth={"1px"}
        borderColor="gray.200"
        borderRadius={"sm"}
        w={{ base: "full", md: "80%", lg: "60%", xl: "50%" }}
        px={{ base: "1rem", sm: "2rem", lg: "3rem", xl: "4rem" }}
        py={{ base: "3rem", md: "4rem" }}
        mx="auto"
      >
        <form onSubmit={handleSubmit(submit)}>
          <Stack gap="2rem" mb="3rem">
            <InputElement
              required
              label="Current password"
              type="password"
              placeholder="*****"
              register={register("oldPassword")}
              errorMessage={errors.oldPassword?.message}
            />
            <InputElement
              required
              label="New password"
              type="password"
              placeholder="*****"
              register={register("newPassword")}
              errorMessage={errors.newPassword?.message}
            />
          </Stack>
          <Button w="full" disabled={isLoading} type="submit">
            {isLoading ? "Processing..." : "Update"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UpdatePassword;
