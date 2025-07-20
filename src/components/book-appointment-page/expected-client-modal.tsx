"use client";

import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Button from "../shared/button";
import { InputElement } from "../shared/input-element";

interface ClientModalProps {
  onClick: () => void;
  numOfClients: number;
  setExpectedClients: React.Dispatch<React.SetStateAction<number>>;
}

const ExpectedClientModal = ({
  onClick,
  numOfClients,
  setExpectedClients,
}: ClientModalProps) => {
  return (
    <Dialog.Root
      motionPreset="slide-in-bottom"
      placement="center"
      closeOnInteractOutside={false}
    >
      <Dialog.Trigger asChild>
        <Button
          px="2rem"
          bg="yellow.150"
          w={{ base: "full", xl: "fit-content" }}
          fontSize="1.5rem"
        >
          CREATE BOOKING
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="800px"
            w="full"
            p={{ base: "2rem", md: "5rem" }}
            m=".5rem"
          >
            <Dialog.Header>
              <Dialog.Title
                fontSize="2rem"
                fontWeight="bold"
                mb="4rem"
                lineHeight={1.3}
              >
                Expected Number of clients
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <InputElement
                inputItem
                type="number"
                label="Please enter the number of expected clients"
                placeholder="1"
                bg="gray.250"
                defaultValue={numOfClients}
                min={1}
                onChange={(e) => {
                  setExpectedClients(Number(e.target.value));
                }}
              />
            </Dialog.Body>
            <Dialog.Footer pt="4rem">
              <Dialog.ActionTrigger asChild>
                <Button
                  bg="transparent"
                  borderWidth="1px"
                  borderColor="black"
                  color="black"
                  px={{ base: "2rem", sm: "5rem" }}
                >
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button onClick={onClick} px={{ base: "2rem", sm: "5rem" }}>
                  Continue
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild _hover={{ bg: "gray.250" }}>
              <CloseButton size="2xl" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ExpectedClientModal;
