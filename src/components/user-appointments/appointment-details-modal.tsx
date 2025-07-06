import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import Button from "../ui/button";
import AppointmentDetailsContent from "./appt-details-content";

const ViewAppointmentDetailsModal = () => {
  return (
    <Dialog.Root
      placement={{ base: "top", md: "center" }}
      motionPreset="slide-in-bottom"
    >
      <Dialog.Trigger asChild>
        <Button px="1rem" fontSize="1.4rem">
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
              <Dialog.Title fontSize="2rem">Appointment details</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <AppointmentDetailsContent />
            </Dialog.Body>
            <Dialog.Footer mt="2rem">
              <Dialog.ActionTrigger asChild>
                <Button
                  bg="transparent"
                  borderColor="black"
                  borderWidth="2px"
                  color="black"
                  py="2rem"
                  px={{ base: "3rem", sm: "5rem" }}
                >
                  Close
                </Button>
              </Dialog.ActionTrigger>
              <Button
                py="1.6rem"
                href="/book-appointment"
                px={{ base: "2rem", sm: "5rem" }}
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
