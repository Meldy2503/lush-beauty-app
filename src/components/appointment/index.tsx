// "use client";

// import { Box, ButtonGroup, Flex, Icon, Steps } from "@chakra-ui/react";
// import { FaRegCalendarAlt, FaRegCreditCard } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlinePersonAddAlt } from "react-icons/md";
// import { RiCalendarScheduleLine, RiServiceLine } from "react-icons/ri";
// import Footer from "../footer";
// import Navbar from "../navbar";
// import Wrapper from "../wrapper";
// import AppointmentType from "./appointment-type";
// import Button from "../ui/button";

// const AppointmentPage = () => {
//   return (
//     <>
//       <Navbar />
//       <Wrapper bg="gray.250">
//         <Steps.Root
//           defaultStep={1}
//           count={steps.length}
//           //   size="xs"
//           orientation="vertical"
//           height="full"
//           my="5rem"
//           overflow={"scroll"}
//           //   bg="white"
//         >
//           <Flex w="full" justifyContent={"space-between"} gap="1.5rem">
//             <Steps.List w="30rem" bg="white" p="2rem" h="70vh" position={'sticky'} top='20rem'>
//               {steps.map((step, index) => (
//                 <Steps.Item
//                   key={index}
//                   index={index}
//                   pb="4rem"
//                   alignItems={"center"}
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
//                   <Steps.Title fontSize={"1.6rem"}>{step.title}</Steps.Title>
//                   {/* <Steps.Separator /> */}
//                 </Steps.Item>
//               ))}
//             </Steps.List>
//             <Box w="85%" h="80vh">
//               {steps.map((step, index) => (
//                 <Steps.Content key={index} index={index}>
//                   {step.description}
//                 </Steps.Content>
//               ))}
//               <Steps.CompletedContent>
//                 All steps are complete!
//               </Steps.CompletedContent>

//               <ButtonGroup size="sm" variant="outline">
//                 <Steps.PrevTrigger asChild>
//                   <Button>Prev</Button>
//                 </Steps.PrevTrigger>
//                 <Steps.NextTrigger asChild>
//                   <Button>Continue</Button>
//                 </Steps.NextTrigger>
//               </ButtonGroup>
//             </Box>
//           </Flex>
//         </Steps.Root>
//       </Wrapper>
//       <Footer />
//     </>
//   );
// };
// export default AppointmentPage;

// const steps = [
//   {
//     title: "Select Appointment type",
//     icon: RiCalendarScheduleLine,
//     description: <AppointmentType />,
//   },
//   {
//     title: "Select Location",
//     icon: FaLocationDot,
//     description: "Payment",
//   },
//   {
//     title: "Select Services ",
//     icon: RiServiceLine,
//     description: "Book an Appointment",
//   },
//   {
//     title: "Select Technician ",
//     icon: MdOutlinePersonAddAlt,
//     description: "Contact Details",
//   },
//   {
//     title: "Schedule Date and Time",
//     icon: FaRegCalendarAlt,
//     description: "Payment",
//   },
//   {
//     title: "Make Payment",
//     icon: FaRegCreditCard,
//     description: "Book an Appointment",
//   },
// ];

"use client";

import { Box, ButtonGroup, Flex, Icon, Steps } from "@chakra-ui/react";
import { FaRegCalendarAlt, FaRegCreditCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiCalendarScheduleLine, RiServiceLine } from "react-icons/ri";
import Navbar from "../navbar";
import Wrapper from "../wrapper";
import BookingType from "./booking-type";
import Button from "../ui/button";
import SelectLocation from "./select-location";
import SelectService from "./select-service";
import SelectTechnician from "./select-technician";
import SelectDateTime from "./select-date-time";
import MakePayment from "./make-payment";

const AppointmentPage = () => {
  return (
    <>
      <Navbar display="none" top="0" />
      <Wrapper bg="gray.250">
        <Steps.Root
          defaultStep={0}
          count={steps.length}
          //   orientation={'vertical'}
          mt="5rem"
          w="full"
          mx="auto"
        >
          <Flex w="full" gap="10rem" direction={"column"}>
            {/* Fixed Steps List */}
            <Steps.List
              //   w="30rem"
              bg="white"
              p="1.5rem"
              position="fixed"
              left="0"
              right="0"
              mx="auto"
              w="90%"
              maxW="1200px"
              top={{ base: "6.5rem", lg: "7rem" }}
              zIndex="10"
              overflowY="auto"
              gap="3rem"
            >
              {steps.map((step, index) => (
                <Steps.Item
                  key={index}
                  index={index}
                  //   pb="4rem"
                  alignItems={"center"}
                  textAlign={"center"}
                  flexDirection={"column"}
                  px="0"
                >
                  <Steps.Indicator bg="gray.250" border="none" p="2rem">
                    <Steps.Status
                      incomplete={
                        <Icon as={step.icon} color="gray.50" boxSize="8" />
                      }
                      complete={
                        <Icon as={step.icon} color="yellow.100" boxSize="8" />
                      }
                    />
                  </Steps.Indicator>
                  <Steps.Title
                    fontSize={"1.5rem"}
                    lineHeight={1.2}
                    display={{ base: "none", lg: "block" }}
                  >
                    {step.title}
                  </Steps.Title>
                </Steps.Item>
              ))}
            </Steps.List>

            {/* Scrollable Content Area */}
            <Box
              mt={{ base: "2.5rem", md:'0', lg: "2.5rem" }}

              //   w="calc(100% - 30rem)"
              //   h="full"
              //   ml="20rem"
              //   overflowY="auto"
              //   pr="1rem"
            >
              {steps.map((step, index) => (
                <Steps.Content key={index} index={index}>
                  <Box>
                    {/* <Box minH="40vh" bg="white" p="2rem" borderRadius="md"> */}
                    {step.description}
                  </Box>
                </Steps.Content>
              ))}
              <Steps.CompletedContent>
                <Box minH="60vh" bg="white" p="2rem" borderRadius="md">
                  All steps are complete!
                </Box>
              </Steps.CompletedContent>

              <Box mt="2rem" p="2rem" bg="white" borderRadius="md">
                <ButtonGroup size="sm" variant="outline">
                  <Steps.PrevTrigger asChild>
                    <Button
                      bg="transparent"
                      borderWidth="1.5px"
                      borderColor="black"
                      color="black"
                    >
                      Prev
                    </Button>
                  </Steps.PrevTrigger>
                  <Steps.NextTrigger asChild>
                    <Button>Continue</Button>
                  </Steps.NextTrigger>
                </ButtonGroup>
              </Box>
            </Box>
          </Flex>
        </Steps.Root>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default AppointmentPage;

const steps = [
  {
    title: "Booking type",
    icon: RiCalendarScheduleLine,
    description: <BookingType />,
  },
  {
    title: "Select Location",
    icon: FaLocationDot,
    description: <SelectLocation />,
  },
  {
    title: "Select Services",
    icon: RiServiceLine,
    description: <SelectService />,
  },
  {
    title: "Select Technician",
    icon: MdOutlinePersonAddAlt,
    description: <SelectTechnician />,
  },
  {
    title: "Select Date/Time",
    icon: FaRegCalendarAlt,
    description: <SelectDateTime />,
  },
  {
    title: "Make Payment",
    icon: FaRegCreditCard,
    description: <MakePayment />,
  },
];
