"use client";

import Button from "@/components/shared/button";
import {
  Checkbox,
  CloseButton,
  Dialog,
  Flex,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InputElement } from "../shared/input-element";

import { AddAddressSchema } from "@/schema/user";
import { useAddAddressMutation } from "@/services/api/user";
import { AddAddressType } from "@/types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Controller } from "react-hook-form";

const AddressModal = ({ icon }: { icon?: React.ReactNode }) => {
  const addAddressMutation = useAddAddressMutation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync: addAddress } = addAddressMutation;
  const isLoading = addAddressMutation.isPending;

  const formHook = useForm<AddAddressType>({
    resolver: yupResolver(AddAddressSchema),
    defaultValues: {
      address: "",
      state: "",
      country: "",
      isDefault: false,
    },
  } as { resolver: Resolver<AddAddressType> });
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = formHook;

  const submit: SubmitHandler<AddAddressType> = async (
    data: AddAddressType
  ) => {
    try {
      const result = await addAddress(data);
      if (!result) {
        return;
      }
      if (result) {
        toast.success("Address Added Successfully!");
        setIsOpen(false);
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog.Root
      placement={{ base: "top", md: "center" }}
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
      <Dialog.Trigger asChild onClick={() => setIsOpen(true)}>
        {icon ?? <Button fontWeight="400">Add address</Button>}
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
                Add New Address{" "}
              </Dialog.Title>
            </Dialog.Header>
            <form onSubmit={handleSubmit(submit)}>
              <Dialog.Body>
                <Stack gap="2rem">
                  <InputElement
                    label="Address/Postcode"
                    placeholder="2 Beverley street"
                    register={register("address")}
                    errorMessage={errors.address?.message}
                  />
                  <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
                    <InputElement
                      label="Town/State"
                      placeholder="Manchester"
                      register={register("state")}
                      errorMessage={errors.state?.message}
                    />
                    <InputElement
                      label="Country"
                      placeholder="United Kingdom"
                      register={register("country")}
                      errorMessage={errors.country?.message}
                    />
                  </Flex>
                  <Controller
                    name="isDefault"
                    control={formHook.control}
                    render={({ field }) => (
                      <Checkbox.Root
                        pb="2rem"
                        px=".6rem"
                        checked={field.value}
                        onCheckedChange={({ checked }) =>
                          field.onChange(checked)
                        }
                      >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control scale={1.5}>
                          <Checkbox.Indicator />
                        </Checkbox.Control>

                        <Checkbox.Label
                          fontSize={{ base: "1.5rem", md: "1.6rem" }}
                          ml=".5rem"
                        >
                          <Text lineHeight={1.35}>
                            Select as default address
                          </Text>
                        </Checkbox.Label>
                      </Checkbox.Root>
                    )}
                  />
                </Stack>
              </Dialog.Body>
              <Dialog.Footer
                mt="2rem"
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
                    px={{ base: "3rem", sm: "5rem" }}
                    type="button"
                  >
                    Close
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  px={{ base: "2rem", sm: "5rem" }}
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

export default AddressModal;
