"use client";

import Button from "@/components/shared/button";
import { UpdateUserProfileSchema } from "@/schema/user";
import { useUpdateUserProfileMutation } from "@/services/api/user";
import { UpdateUserProfileType, UserProfileType } from "@/types/user";
import { Box, CloseButton, Dialog, Portal, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { InputElement } from "../shared/input-element";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "@/store/slices/auth-slice";
import { RootState } from "@/store";

interface PersonalDetailsType {
  user?: UserProfileType;
}

const PersonalDetailsModal = ({ user }: PersonalDetailsType) => {
  const updateUserProfileMutation = useUpdateUserProfileMutation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.accessToken);

  const { mutateAsync: updateUserProfile } = updateUserProfileMutation;
  const isLoading = updateUserProfileMutation.isPending;

  const formHook = useForm<UpdateUserProfileType>({
    resolver: yupResolver(UpdateUserProfileSchema),
    defaultValues: {
      fullName: user?.fullName,
      phone: user?.phone,
    },
  } as { resolver: Resolver<UpdateUserProfileType> });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formHook;

  const submit: SubmitHandler<UpdateUserProfileType> = async (
    data: UpdateUserProfileType
  ) => {
    try {
      const result = await updateUserProfile(data);
      console.log("Submitted data:", result);

      if (!result) {
        return;
      }
      if (result) {
        toast.success("Profile Updated Successfully!");
        setIsOpen(false);
        dispatch(
          setAuthData({
            token: token || "",
            user: {
              ...user,
              fullName: data?.fullName,
            },
          })
        );
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // to ensure the updated default value is always displayed
  useEffect(() => {
    if (isOpen && user) {
      reset({
        fullName: user?.fullName,
        phone: user?.phone,
      });
    }
  }, [isOpen, user, reset]);

  return (
    <Dialog.Root
      placement={{ base: "top", md: "center" }}
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
      <Dialog.Trigger asChild>
        <Box color="yellow.100" cursor={"pointer"}>
          <FaRegEdit size={"2.3rem"} />
        </Box>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="900px"
            w="full"
            p={{ base: "2rem", md: "3rem" }}
            bg="gray.250"
            fontSize="1.6rem"
            m=".5rem"
          >
            <Dialog.Header>
              <Dialog.Title fontSize="2rem" mb="5rem">
                Personal details
              </Dialog.Title>
            </Dialog.Header>
            <form onSubmit={handleSubmit(submit)}>
              <Dialog.Body>
                <Stack gap="2rem">
                  <InputElement
                    label="Full name"
                    placeholder="Peter Smith"
                    register={register("fullName")}
                    errorMessage={errors.fullName?.message}
                  />
                  <InputElement
                    label="Email address"
                    placeholder="peter@gmail.com"
                    type="email"
                    defaultValue={user?.email}
                    disabled
                  />
                  <InputElement
                    label="Phone number"
                    placeholder="+447056835551"
                    type="number"
                    register={register("phone")}
                    errorMessage={errors.phone?.message}
                  />
                </Stack>
              </Dialog.Body>
              <Dialog.Footer
                mt="3rem"
                display={"flex"}
                flexWrap={"wrap"}
                gap="1rem"
              >
                <Dialog.ActionTrigger asChild>
                  <Button
                    bg="transparent"
                    borderColor="black"
                    borderWidth="1.5px"
                    color="black"
                    px={{ base: "3rem", sm: "4rem" }}
                    type="button"
                  >
                    Close
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  px={{ base: "2rem", sm: "3rem" }}
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? "Processing..." : "Save Changes"}
                </Button>
              </Dialog.Footer>
            </form>{" "}
            <Dialog.CloseTrigger asChild bg="gray.200">
              <CloseButton size="2xl" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default PersonalDetailsModal;
