"use client";

import { useMakeAppointmentPaymentMutation } from "@/services/api/book-appointment";
import { useCancelUserAppointment } from "@/services/api/user";
import {
  setAppointmentId,
  setApptClientSecretKey,
} from "@/store/slices/appointment-slice";
import { UserAppointmentType } from "@/types/user";
import { Box, Flex, Menu, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Button from "../shared/button";
import DeleteModal from "../shared/delete-modal";
import ViewAppointmentDetailsModal from "./view-appointment-modal";

interface AppointmentActionsProps {
  viewAppointmentDetailsId?: string;
  setViewAppointmentDetailsId: (id: string) => void;
  appointment: UserAppointmentType;
}

const AppointmentActions = ({
  viewAppointmentDetailsId,
  setViewAppointmentDetailsId,
  appointment,
}: AppointmentActionsProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutateAsync: makeAppointmentPayment } =
    useMakeAppointmentPaymentMutation();
  const { mutateAsync: cancelAppointment, isPending } =
    useCancelUserAppointment();

  const handleCancelAppointment = async (appointmentId: string) => {
    try {
      await cancelAppointment(appointmentId);
      toast.success("Appointment cancelled successfully");
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      toast.error("Failed to cancel appointment");
    }
  };

  const handlePayForAppointment = async (appointmentId: string) => {
    try {
      const response = await makeAppointmentPayment({ appointmentId });
      const clientSecret = response?.data?.clientSecret;

      if (!clientSecret) {
        console.error("No client secret returned");
        return;
      }
      router.push("/appointment-payment");
      dispatch(setApptClientSecretKey(clientSecret));
      dispatch(setAppointmentId(appointmentId));
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <Button bg="gray.150" px="3rem">
          <BsThreeDotsVertical size={30} />
          Actions
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Flex
                alignSelf="flex-end"
                flexDir={"column"}
                gap="1rem"
                p="1rem"
                flexWrap={"wrap"}
              >
                <ViewAppointmentDetailsModal
                  onClick={() =>
                    setViewAppointmentDetailsId(appointment?.id ?? "")
                  }
                  viewAppointmentDetailsId={viewAppointmentDetailsId}
                />
                {appointment?.status === "PENDING" && (
                  <Flex gap="1rem" flexDir={"column"}>
                    <Box borderYWidth={"1px"} borderColor="gray.200" py=".5rem">
                      <Button
                        w="100%"
                        py="1.9rem"
                        bg="transparent"
                        color="black"
                        onClick={() =>
                          handlePayForAppointment(appointment?.id || "")
                        }
                      >
                        Pay for Appointment
                      </Button>
                    </Box>
                    <DeleteModal
                      triggerItem={
                        <Button
                          py="1.9rem"
                          w="100%"
                          color="red.600"
                          bg="transparent"
                        >
                          Cancel Appointment
                        </Button>
                      }
                      onClick={() =>
                        handleCancelAppointment(appointment?.id || "")
                      }
                      isLoading={isPending}
                      btnText="Cancel"
                      text="This action cannot be undone. The selected appointment will be removed from your pending payments and you will no longer be able to pay for it."
                    />{" "}
                  </Flex>
                )}
              </Flex>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default AppointmentActions;
