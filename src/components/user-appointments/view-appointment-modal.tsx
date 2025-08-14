"use client";

import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Button from "../shared/button";
import AppointmentDetailsContent from "./modal-content";

interface AppointmentDetailsProp {
  onClick?: () => void;
  viewAppointmentDetailsId?: string;
}

const ViewAppointmentDetailsModal = ({
  onClick,
  viewAppointmentDetailsId,
}: AppointmentDetailsProp) => {
  return (
    <Dialog.Root
      placement={{ base: "top", md: "center" }}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger asChild>
        <Button
          py="1.8rem"
          bg="transparent"
          color="black"
          w="100%"
          onClick={onClick}
        >
          View Details
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop bg="backdrop" />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="1000px"
            w="full"
            p={{ base: "2rem", md: "3rem" }}
            bg="gray.250"
            fontSize="1.6rem"
          >
            <Dialog.Header>
              <Dialog.Title fontSize="2rem">Appointment details</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <AppointmentDetailsContent
                viewAppointmentDetailsId={viewAppointmentDetailsId}
              />
            </Dialog.Body>
            <Dialog.Footer mt="2rem">
              <Dialog.ActionTrigger asChild>
                <Button
                  bg="transparent"
                  borderColor="black"
                  borderWidth="2px"
                  color="black"
                  py="1.9rem"
                  px={{ base: "3rem", sm: "5rem" }}
                >
                  Close
                </Button>
              </Dialog.ActionTrigger>

              <Button
                href="/book-appointment"
                py="2rem"
                px={{ base: "2rem", sm: "3rem" }}
              >
                Book again
              </Button>
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

export default ViewAppointmentDetailsModal;
