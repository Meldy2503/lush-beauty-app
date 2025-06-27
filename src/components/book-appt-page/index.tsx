"use client";

import { Box, Icon, Steps } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiCalendarScheduleLine, RiServiceLine } from "react-icons/ri";
import Navbar from "../navbar";
import BookingType from "./booking-type";
import SelectDateTime from "./select-date-time";
import SelectLocation from "./select-location";
import SelectService from "./select-service";
import SelectTechnician from "./select-technician";
import { useState } from "react";
// import MakePayment from "./make-payment";
import ConfirmBooking from "./confirm-booking";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type SetStep = React.Dispatch<React.SetStateAction<number>>;

const steps = [
  {
    title: "Booking type",
    icon: RiCalendarScheduleLine,
    content: (setStep: SetStep, step: number) => (
      <BookingType setStep={setStep} step={step} />
    ),
  },
  {
    title: "Select Location",
    icon: FaLocationDot,
    content: (setStep: SetStep, step: number) => (
      <SelectLocation setStep={setStep} step={step} />
    ),
  },
  {
    title: "Select Services",
    icon: RiServiceLine,
    content: (setStep: SetStep, step: number) => (
      <SelectService setStep={setStep} step={step} />
    ),
  },
  {
    title: "Select Technician",
    icon: MdOutlinePersonAddAlt,
    content: (setStep: SetStep, step: number) => (
      <SelectTechnician setStep={setStep} step={step} />
    ),
  },
  {
    title: "Select Date/Time",
    icon: FaRegCalendarAlt,
    content: (setStep: SetStep, step: number) => (
      <SelectDateTime setStep={setStep} step={step} />
    ),
  },
  {
    title: "Confirm Booking",
    icon: IoCheckmarkCircleOutline,
    content: (setStep: SetStep, step: number) => (
      <ConfirmBooking setStep={setStep} step={step} />
    ),
  },
  // {
  //   title: "Make Payment",
  //   icon: FaRegCreditCard,
  //   content: (setStep: SetStep, step: number) => (
  //     <MakePayment setStep={setStep} step={step} />
  //   ),
  // },
];

const AppointmentPage = () => {
  const [step, setStep] = useState(0);

  return (
    <Box minH="100vh" bg="gray.250" pb="2rem">
      <Navbar />
      <Steps.Root
        step={step}
        count={steps.length}
        orientation={{ base: "horizontal", md: "vertical" }}
        my="9rem"
        bg="gray.250"
      >
        <Steps.List
          w="23rem"
          p="2rem"
          position="fixed"
          top="8.7rem"
          bg="white"
          left="0"
          zIndex="10"
          mt="3rem"
          overflowY="auto"
          display={{ base: "none", lg: "block" }}
          shadow={"sm"}
          h="100%"
        >
          {steps.map((stepItem, index) => (
            <Steps.Item key={index} index={index} alignItems="center" pb="5rem">
              <Steps.Indicator bg="white" border="none" p="2rem">
                <Steps.Status
                  incomplete={
                    <Icon as={stepItem.icon} color="gray.50" boxSize="8" />
                  }
                  complete={
                    <Icon as={stepItem.icon} color="yellow.100" boxSize="8" />
                  }
                  current={
                    <Icon as={stepItem.icon} color="black" boxSize="8" />
                  }
                />
              </Steps.Indicator>
              <Steps.Title
                fontSize="1.6rem"
                color={
                  step > index
                    ? "yellow.100"
                    : step === index
                    ? "black"
                    : "gray.50"
                }
                fontWeight={step > index ? "600" : "400"}
              >
                {stepItem.title}
              </Steps.Title>
              <Steps.Separator
                my="1rem"
                h="4.1rem"
                ml=".7rem"
                bg={step > index ? "yellow.100" : "gray.50"}
              />
            </Steps.Item>
          ))}
        </Steps.List>
        <Box
          ml={{ base: "0", lg: "23rem" }}
          w={{ base: "100%", lg: "calc(100% - 23rem)" }}
          p="4.7rem 2rem"
          h="100%"
        >
          {/* Render all step contents */}
          {steps.map((stepObj, index) => (
            <Steps.Content key={index} index={index}>
              {stepObj.content(setStep, step)}
            </Steps.Content>
          ))}
          {/* <Steps.CompletedContent>
            All steps are complete!
          </Steps.CompletedContent> */}
        </Box>
      </Steps.Root>
    </Box>
  );
};

export default AppointmentPage;
