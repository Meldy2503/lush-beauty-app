"use client";

import { Box, Flex } from "@chakra-ui/react";
import BookingSummary from "../book-appointment-page/booking-summary";
import ApptCheckoutForm from "./appt-checkout-form";
import Navbar from "../navbar";
import { GoBack } from "../shared/go-back";
import Wrapper from "../shared/wrapper";
import Footer from "../footer";

const AppointmentPaymentPage = () => (
  <>
    <Navbar />
    <Wrapper bg="gray.250">
      <GoBack />
      <Flex gap="2rem">
        <ApptCheckoutForm />
        <Box
          w={{ base: "100%", md: "35%" }}
          display={{ base: "none", md: "block" }}
        >
          <BookingSummary />
        </Box>
      </Flex>
    </Wrapper>
    <Footer />
  </>
);
export default AppointmentPaymentPage;
