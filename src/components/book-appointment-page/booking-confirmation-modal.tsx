"use client";

import {
  Dialog,
  Heading,
  HStack,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import tick from "../../assets/images/tick.svg";
import Button from "../shared/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  useGroupBookingMutation,
  usePersonalBookingMutation,
} from "@/services/api/book-appointment";
import { BookAppointmentType } from "@/types/book-appointment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearAppointments } from "@/store/slices/appointment-slice";

interface ConfirmationModalProps {
  disabled?: boolean;
}

const BookingConfirmationModal = ({ disabled }: ConfirmationModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();


  const totalPrice = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.totalPrice
  );

  const appointment = useSelector(
    (state: RootState) => state.appointment.appointments[0]
  );

  const personalBookingMutation = usePersonalBookingMutation();
  const groupBookingMutation = useGroupBookingMutation();

  const { mutateAsync: personalBooking } = personalBookingMutation;
  const { mutateAsync: groupBooking } = groupBookingMutation;

  const isLoading =
    groupBookingMutation.isPending || personalBookingMutation.isPending;


  const handleBooking = async () => {
    if (!appointment) return;

    const payload: BookAppointmentType = {
      specialistId: appointment?.selectedSpecialist?.id || "",
      appointmentDateTime: appointment.appointmentDateTime,
      branchId: appointment.selectedBranch?.id || "",
      totalCost: appointment.totalPrice,
      numberOfClients: appointment.numberOfClients,
      serviceSelections:
        appointment.serviceSelections?.map((service) => ({
          serviceId: service.serviceId,
          categoryIds: service.categoryIds
            .map((category) => category.id)
            .filter((id): id is string => id !== undefined), // Filter out undefined values
        })) || [],
    };

    try {
      const result =
        appointment.numberOfClients > 1
          ? await groupBooking(payload)
          : await personalBooking(payload);

      if (result && result.success === true) {
        dispatch(clearAppointments());
        setIsOpen(true);
        console.log("Booking successful:", result);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };


  return (
    <Dialog.Root
      scrollBehavior="inside"
      placement={"center"}
      closeOnInteractOutside={false}
      motionPreset="slide-in-bottom"
      open={isOpen}
    >
      <Dialog.Trigger asChild>
        <Button
          borderWidth="1.5px"
          borderColor="black"
          w="49%"
          disabled={disabled || isLoading}
          cursor={disabled ? "not-allowed" : "pointer"}
          onClick={handleBooking}
        >
          {isLoading ? "Processing..." : "Confirm Booking"}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop bg="backdrop" />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="600px"
            w="full"
            px={{ base: "2rem", md: "5rem" }}
            py="5rem"
            m=".5rem"
          >
            <Dialog.Body>
              <VStack textAlign={"center"}>
                <Image src={tick} alt="tick icon" width={100} height={100} />
                <Heading
                  as="h2"
                  fontSize={{ base: "2.2rem", md: "2.5rem" }}
                  my="1rem"
                  lineHeight={1.3}
                  textTransform={"uppercase"}
                >
                  Appointment Confirmed!{" "}
                </Heading>
                <Text
                  fontSize={"1.6rem"}
                  w={{ base: "100%", md: "80%" }}
                  lineHeight={1.5}
                >
                  Thanks for booking with Lush & Luxe! <br />A confirmation
                  email has been sent. You can pay online or in person at your
                  appointment day ✨
                </Text>
                <HStack
                  gap="1.5rem"
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  pt="3rem"
                  w="full"
                  flexDir={{ base: "column-reverse", sm: "row" }}
                >
                  <Button
                    bg="transparent"
                    borderWidth="1.5px"
                    borderColor="black"
                    color="black"
                    px={{ base: "5.5rem", sm: "2rem" }}
                    href="/"
                  >
                    Go to Home
                  </Button>
                  <Button px="2rem">Proceed to Pay £{totalPrice}</Button>
                </HStack>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default BookingConfirmationModal;
