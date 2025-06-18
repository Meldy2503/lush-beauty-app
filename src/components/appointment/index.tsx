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
        my="11rem"
        bg="gray.250"
      >
        <Steps.List
          w="25rem"
          p="2rem"
          position="fixed"
          top="10rem"
          left="0"
          zIndex="10"
          mt="5.5rem"
          bg='white'
          overflowY="auto"
          display={{ base: "none", lg: "block" }}
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
                />
              </Steps.Indicator>
              <Steps.Title fontSize="1.6rem">{stepItem.title}</Steps.Title>
              <Steps.Separator my="1rem" h="4.1rem" ml=".7rem" />
            </Steps.Item>
          ))}
        </Steps.List>
        <Box
          ml={{ base: "0", lg: "25rem" }}
          w={{ base: "100%", lg: "calc(100% - 25rem)" }}
          p="4.7rem 2rem"
          h="100%"
        >
          {/* Render all step contents */}
          {steps.map((stepObj, index) => (
            <Steps.Content key={index} index={index}>
              {stepObj.content(setStep, step)}
            </Steps.Content>
          ))}
          <Steps.CompletedContent>
            All steps are complete!
          </Steps.CompletedContent>
        </Box>
      </Steps.Root>
    </Box>
  );
};

export default AppointmentPage;

// "use client";

// import { Box, ButtonGroup, Flex, Icon, Steps } from "@chakra-ui/react";
// import { FaRegCalendarAlt, FaRegCreditCard } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlinePersonAddAlt } from "react-icons/md";
// import { RiCalendarScheduleLine, RiServiceLine } from "react-icons/ri";
// import Navbar from "../navbar";
// import Wrapper from "../wrapper";
// import BookingType from "./booking-type";
// import Button from "../ui/button";
// import SelectLocation from "./select-location";
// import SelectService from "./select-service";
// import SelectTechnician from "./select-technician";
// import SelectDateTime from "./select-date-time";
// import MakePayment from "./make-payment";

// const AppointmentPage = () => {
//   return (
//     <>
//       <Navbar display="none" top="0" />
//       <Wrapper bg="gray.250">
//         <Steps.Root
//           defaultStep={0}
//           count={steps.length}
//           //   orientation={'vertical'}
//           mt="5rem"
//           w="full"
//           mx="auto"
//         >
//           <Flex w="full" gap="10rem" direction={"column"}>
//             {/* Fixed Steps List */}
//             <Steps.List
//               //   w="30rem"
//               bg="white"
//               p="1.5rem"
//               position="fixed"
//               left="0"
//               right="0"
//               mx="auto"
//               w="90%"
//               maxW="1200px"
//               top={{ base: "6.5rem", lg: "7rem" }}
//               zIndex="10"
//               overflowY="auto"
//               gap="3rem"
//             >
//               {steps.map((step, index) => (
//                 <Steps.Item
//                   key={index}
//                   index={index}
//                   //   pb="4rem"
//                   alignItems={"center"}
//                   textAlign={"center"}
//                   flexDirection={"column"}
//                   px="0"
//                 >
//                   <Steps.Indicator bg="gray.250" border="none" p="2rem">
//                     <Steps.Status
//                       incomplete={
//                         <Icon as={step.icon} color="gray.50" boxSize="8" />
//                       }
//                       complete={
//                         <Icon as={step.icon} color="yellow.100" boxSize="8" />
//                       }
//                     />
//                   </Steps.Indicator>
//                   <Steps.Title
//                     fontSize={"1.5rem"}
//                     lineHeight={1.2}
//                     display={{ base: "none", lg: "block" }}
//                   >
//                     {step.title}
//                   </Steps.Title>
//                 </Steps.Item>
//               ))}
//             </Steps.List>

//             {/* Scrollable Content Area */}
//             <Box
//               mt={{ base: "2.5rem", md:'0', lg: "2.5rem" }}

//               //   w="calc(100% - 30rem)"
//               //   h="full"
//               //   ml="20rem"
//               //   overflowY="auto"
//               //   pr="1rem"
//             >
//               {steps.map((step, index) => (
//                 <Steps.Content key={index} index={index}>
//                   <Box>
//                     {/* <Box minH="40vh" bg="white" p="2rem" borderRadius="md"> */}
//                     {step.description}
//                   </Box>
//                 </Steps.Content>
//               ))}
//               <Steps.CompletedContent>
//                 <Box minH="60vh" bg="white" p="2rem" borderRadius="md">
//                   All steps are complete!
//                 </Box>
//               </Steps.CompletedContent>

//               <Box mt="2rem" p="2rem" bg="white" borderRadius="md">
//                 <ButtonGroup size="sm" variant="outline">
//                   <Steps.PrevTrigger asChild>
//                     <Button
//                       bg="transparent"
//                       borderWidth="1.5px"
//                       borderColor="black"
//                       color="black"
//                     >
//                       Prev
//                     </Button>
//                   </Steps.PrevTrigger>
//                   <Steps.NextTrigger asChild>
//                     <Button>Continue</Button>
//                   </Steps.NextTrigger>
//                 </ButtonGroup>
//               </Box>
//             </Box>
//           </Flex>
//         </Steps.Root>
//       </Wrapper>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default AppointmentPage;

// const steps = [
//   {
//     title: "Booking type",
//     icon: RiCalendarScheduleLine,
//     description: <BookingType />,
//   },
//   {
//     title: "Select Location",
//     icon: FaLocationDot,
//     description: <SelectLocation />,
//   },
//   {
//     title: "Select Services",
//     icon: RiServiceLine,
//     description: <SelectService />,
//   },
//   {
//     title: "Select Technician",
//     icon: MdOutlinePersonAddAlt,
//     description: <SelectTechnician />,
//   },
//   {
//     title: "Select Date/Time",
//     icon: FaRegCalendarAlt,
//     description: <SelectDateTime />,
//   },
//   {
//     title: "Make Payment",
//     icon: FaRegCreditCard,
//     description: <MakePayment />,
//   },
// ];
