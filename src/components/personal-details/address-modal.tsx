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
import {
  useAddAddressMutation,
  useUpdateAddressMutation,
} from "@/services/api/user";
import { AddAddressType, UserAddressType } from "@/types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

interface AddressModalProps {
  icon?: React.ReactNode;
  isEditMode?: boolean;
  selectedAddress?: UserAddressType;
}

const AddressModal = ({
  icon,
  isEditMode,
  selectedAddress,
}: AddressModalProps) => {
  const addAddressMutation = useAddAddressMutation();
  const updateAddressMutation = useUpdateAddressMutation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync: addAddress } = addAddressMutation;
  const { mutateAsync: updateAddress } = updateAddressMutation;
  const isAddAddressLoading = addAddressMutation.isPending;
  const isEditAddressLoading = updateAddressMutation.isPending;

  const formHook = useForm<AddAddressType>({
    resolver: yupResolver(AddAddressSchema),
    defaultValues: {
      address: selectedAddress?.address ?? "",
      state: selectedAddress?.state ?? "",
      country: selectedAddress?.country ?? "",
      isDefault: selectedAddress?.isDefault ?? false,
    },
  } as { resolver: Resolver<AddAddressType> });
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = formHook;

  const submit: SubmitHandler<AddAddressType> = async (data) => {
    try {
      if (isEditMode && selectedAddress?.id) {
        await updateAddress({
          addressId: selectedAddress.id,
          updateAddress: data,
        });
        toast.success("Address updated successfully!");
      } else {
        await addAddress(data);
        toast.success("Address added successfully!");
      }

      reset();
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // to ensure the updated default value is always displayed
  useEffect(() => {
    if (isOpen && selectedAddress) {
      reset({
        address: selectedAddress?.address,
        state: selectedAddress?.state,
        country: selectedAddress?.country,
        isDefault: selectedAddress?.isDefault,
      });
    }
  }, [isOpen, selectedAddress, reset]);

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
                {isEditMode ? "Edit Address" : "Add New Address"}
              </Dialog.Title>
            </Dialog.Header>
            {/* add address modal */}
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
                    px={{ base: "3rem", sm: "4rem" }}
                    type="button"
                  >
                    Close
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  px={{ base: "2rem", sm: "3rem" }}
                  disabled={isEditAddressLoading || isAddAddressLoading}
                  type="submit"
                >
                  {isAddAddressLoading || isEditAddressLoading
                    ? "Processing..."
                    : "Save Changes"}
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
