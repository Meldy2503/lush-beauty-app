import { CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "./button";

interface DeleteModalProps {
  text?: string;
  onClick?: () => void;
  open?: boolean;
  isLoading?: boolean;
  onOpenChange?: (e: { open: boolean }) => void;
}

const DeleteModal = ({
  text,
  onClick,
  open,
  isLoading,
  onOpenChange,
}: DeleteModalProps) => {
  return (
    <Dialog.Root
      role="alertdialog"
      motionPreset="slide-in-bottom"
      size={"xl"}
      open={open}
      placement="center"
      onOpenChange={onOpenChange}
    >
      <Dialog.Trigger asChild>
        <RiDeleteBin6Line size="2rem" color="red" />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop bg="backdrop" />
        <Dialog.Positioner>
          <Dialog.Content p="2rem" m=".5rem">
            <Dialog.Header>
              <Dialog.Title fontSize="1.8rem">Are you sure?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text fontSize="1.6rem" lineHeight={1.4} mt="2rem">
                {text}
              </Text>
            </Dialog.Body>
            <Dialog.Footer mt="3rem">
              <Dialog.ActionTrigger asChild>
                <Button
                  bg="transparent"
                  borderColor="red.600"
                  borderWidth="1.5px"
                  color="red.600"
                  px="3rem"
                  type="button"
                  py="1.8rem"
                >
                  Close
                </Button>
              </Dialog.ActionTrigger>

              <Button
                disabled={isLoading}
                bg="red.600"
                onClick={onClick}
                px="3rem"
                py="1.9rem"
              >
                {isLoading ? "Processing..." : "Delete"}
              </Button>
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

export default DeleteModal;
