"use client";

import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Button from "../ui/button";
import OrderDetailsContent from "./order-details-content";

const ViewOrderDetailsModal = () => {
  return (
    <Dialog.Root
      placement="center"
      motionPreset="slide-in-bottom"
      scrollBehavior="inside"
    >
      <Dialog.Trigger asChild>
        <Button px="2rem" fontSize="1.45rem">
          VIEW DETAILS
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="1000px"
            w="full"
            p={{ base: "2rem", md: "3rem" }}
            bg="gray.250"
            fontSize="1.6rem"
          >
            <Dialog.Header>
              <Dialog.Title fontSize="2rem">Order details</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <OrderDetailsContent />
            </Dialog.Body>
            <Dialog.Footer mt="2rem">
              <Dialog.ActionTrigger asChild>
                <Button
                  bg="transparent"
                  borderColor="black"
                  borderWidth="2px"
                  color="black"
                  py="1.6rem"
                >
                  Close
                </Button>
              </Dialog.ActionTrigger>
              <Button href="/book-appointment">Shop again</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild bg="gray.200">
              <CloseButton size="2xl" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ViewOrderDetailsModal;
