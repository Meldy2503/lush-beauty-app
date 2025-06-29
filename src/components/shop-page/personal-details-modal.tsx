"use client";

import Button from "@/components/ui/button";
import { Flex, Stack, Dialog, Portal, CloseButton } from "@chakra-ui/react";
import { InputElement } from "../ui/input-element";
import { FaRegEdit } from "react-icons/fa";

const PersonalDetailsModal = () => {
  return (
    <Dialog.Root
      placement="center"
      motionPreset="slide-in-bottom"
      scrollBehavior="inside"
    >
      <Dialog.Trigger asChild>
        <FaRegEdit size={"2.6rem"} />
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
            <form>
              <Dialog.Body>
                <Stack gap="2rem">
                  <InputElement label="Full name" placeholder="Peter Smith" />
                  <InputElement
                    label="Email address"
                    placeholder="peter@gmail.com"
                    type="email"
                  />
                  <InputElement
                    label="Phone number"
                    placeholder="+447056835551"
                    type="number"
                  />
                  <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
                    <InputElement
                      label="Country"
                      placeholder="United Kingdom"
                    />
                    <InputElement label="State" placeholder="Manchester" />
                  </Flex>
                  <InputElement
                    label="Address"
                    placeholder="2 Beverley street"
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
                    w={{ base: "full", sm: "fit-content" }}
                  >
                    Close
                  </Button>
                </Dialog.ActionTrigger>
                <Button w={{ base: "full", sm: "fit-content" }}>
                  Save Changes
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
