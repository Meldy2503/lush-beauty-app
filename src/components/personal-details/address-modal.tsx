"use client";

import Button from "@/components/ui/button";
import {
  Checkbox,
  CloseButton,
  Dialog,
  Flex,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InputElement } from "../ui/input-element";

const AddressModal = ({ icon }: { icon?: React.ReactNode }) => {
  return (
    <Dialog.Root
      placement={{ base: "top", md: "center" }}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger asChild>
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
            <form>
              <Dialog.Body>
                <Stack gap="2rem">
                  <InputElement label="Full name" placeholder="Peter Smith" />

                  <InputElement
                    label="Address"
                    placeholder="2 Beverley street"
                  />
                  <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
                    <InputElement label="Postcode" placeholder="E13RFF" />
                    <InputElement label="Town/City" placeholder="Manchester" />
                  </Flex>

                  <InputElement label="Country" placeholder="United Kingdom" />
                  <Checkbox.Root pb="2rem" px=".6rem">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control scale={1.5}>
                      <Checkbox.Indicator />
                    </Checkbox.Control>

                    <Checkbox.Label
                      fontSize={{ base: "1.5rem", md: "1.6rem" }}
                      ml=".5rem"
                    >
                      {" "}
                      <Text lineHeight={1.35}>Select as default address</Text>
                    </Checkbox.Label>
                  </Checkbox.Root>
                </Stack>
              </Dialog.Body>
              <Dialog.Footer
                mt="2rem"
                display={"flex"}
                flexWrap={"wrap"}
                gap="1rem"
              >
                <Button w={{ base: "full", sm: "fit-content" }}>
                  Save Changes
                </Button>
                <Dialog.ActionTrigger asChild>
                  <Button
                    bg="transparent"
                    borderColor="black"
                    borderWidth="1.5px"
                    color="black"
                    w={{ base: "full", sm: "fit-content" }}
                  >
                    Close
                  </Button>
                </Dialog.ActionTrigger>
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
