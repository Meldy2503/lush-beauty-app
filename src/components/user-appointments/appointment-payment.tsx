"use client";

import { Box, Flex } from "@chakra-ui/react";
import BookingSummary from "../book-appointment-page/booking-summary";
import ApptCheckoutForm from "./appt-checkout-form";
import Navbar from "../navbar";
import { GoBack } from "../shared/go-back";
import Wrapper from "../shared/wrapper";
import Footer from "../footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useGetUserAppointmentById } from "@/services/api/user";

const AppointmentPaymentPage = () => {
  const appointmentId = useSelector(
    (state: RootState) => state.appointment.appointmentId
  );
  const { data: appointmentDetails } = useGetUserAppointmentById(
    appointmentId as string
  );

  return (
    <>
      <Navbar />
      <Wrapper bg="gray.250">
        <GoBack />
        <Flex gap="2rem" flexDir={{ base: "column", md: "row" }} mt="2rem">
          <ApptCheckoutForm />
          <Box w={{ base: "100%", md: "35%" }}>
            <BookingSummary appointmentDetails={appointmentDetails} />
          </Box>
        </Flex>
      </Wrapper>
      <Footer />
    </>
  );
};
export default AppointmentPaymentPage;
