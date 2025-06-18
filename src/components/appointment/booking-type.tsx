// "use client";

// import { Box, ButtonGroup, Flex, Heading, HStack } from "@chakra-ui/react";
// import Image from "next/image";
// import groupBookingImg from "../../assets/images/group-booking-img.webp";
// import personalBookingImg from "../../assets/images/personal-booking-img.webp";
// import Button from "../ui/button";
// import { useState } from "react";

// interface BookingTypeProps {
//   step: number;
//   setStep: React.Dispatch<React.SetStateAction<number>>;
// }

// const BookingType = ({ setStep, step }: BookingTypeProps) => {
//   const [bookingType, setBookingType] = useState("");
//   console.log(bookingType);
//   console.log(step, "step");
//   console.log(setStep, "setStep");
//   return (
//     <Box>
//       <Heading
//         as="h3"
//         fontSize={{ base: "1.9rem", md: "2rem" }}
//         fontFamily="playfair"
//         mb="2rem"
//         lineHeight={1.3}
//       >
//         SELECT APPOINTMENT TYPE
//       </Heading>
//       <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
//         <Box
//           bg="white"
//           p="2rem"
//           borderColor={bookingType === "personal" ? "yellow.100" : "white"}
//           borderWidth={"2px"}
//           _hover={{ borderColor: "yellow.100" }}
//           onClick={() => setBookingType("personal")}
//         >
//           <Image
//             src={personalBookingImg}
//             alt="a smiling single lady"
//             style={{ position: "relative" }}
//             width={1000}
//             height={1000}
//           />
//           <HStack justifyContent={"space-between"} pt="2rem">
//             <Heading as="h4" fontSize="1.7rem">
//               Personal Booking{" "}
//             </Heading>
//             <Button px="3rem" bg="yellow.150">
//               SELECT
//             </Button>
//           </HStack>
//         </Box>
//         <Box
//           bg="white"
//           p="2rem"
//           borderColor={bookingType === "group" ? "yellow.100" : "white"}
//           borderWidth={"2px"}
//           _hover={{ borderColor: "yellow.100" }}
//           onClick={() => setBookingType("group")}
//         >
//           <Image
//             src={groupBookingImg}
//             alt="smiling group of ladies"
//             style={{ position: "relative" }}
//             width={1000}
//             height={1000}
//           />
//           <HStack justifyContent={"space-between"} pt="2rem">
//             <Heading as="h4" fontSize="1.7rem">
//               Group Booking{" "}
//             </Heading>
//             <Button px="3rem" bg="yellow.150">
//               SELECT
//             </Button>
//           </HStack>
//         </Box>
//       </Flex>
//       <ButtonGroup

//         mt="3rem"
//         position={{ base: "fixed", md: "relative" }}
//         bottom="0"
//         py={{ base: "2rem", lg: "2rem" }}
//         w="100%"
//         bg="gray.250"
//       >
//         <Button
//           bg="transparent"
//           borderWidth="1.5px"
//           borderColor="black"
//           color="black"
//           w={{ base: "100%", md: "fit-content" }}
//         >
//           Prev
//         </Button>

//         <Button
//           borderWidth="1.5px"
//           borderColor="black"
//           w={{ base: "100%", md: "fit-content" }}
//           onClick={() => setStep(step + 1)}
//         >
//           Continue
//         </Button>
//       </ButtonGroup>
//     </Box>
//   );
// };

// export default BookingType;

"use client";

import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import groupBookingImg from "../../assets/images/group-booking-img.webp";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";

interface BookingTypeProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BookingType = ({ setStep, step }: BookingTypeProps) => {
  const [bookingType, setBookingType] = useState("");

  const handleContinue = () => {
    if (bookingType) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Box bg="white" p="3rem" shadow={"sm"}>
      <Heading
        as="h3"
        fontSize={{ base: "1.7rem", md: "1.8rem" }}
        fontFamily="playfair"
        mb="2rem"
        lineHeight={1.3}
      >
        SELECT APPOINTMENT TYPE
      </Heading>
      <Flex gap="2rem" flexDir={{ base: "column", md: "row" }}>
        <Box
          borderColor={bookingType === "personal" ? "yellow.100" : "white"}
          borderWidth={"2px"}
          _hover={{ borderColor: "yellow.100" }}
          onClick={() => setBookingType("personal")}
          cursor="pointer"
          bg="gray.250"
        >
          <Image
            src={personalBookingImg}
            alt="a smiling single lady"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
          <HStack justifyContent={"space-between"} p="2rem" gap="2rem">
            <Heading as="h4" fontSize="1.7rem">
              Personal Booking{" "}
            </Heading>
            <Button
              px="3rem"
              bg="transparent"
              borderColor="black"
              borderWidth="2px"
              color="black"
            >
              SELECT
            </Button>
          </HStack>
        </Box>
        <Box
          borderColor={bookingType === "group" ? "yellow.100" : "white"}
          borderWidth={"2px"}
          _hover={{ borderColor: "yellow.100" }}
          onClick={() => setBookingType("group")}
          cursor="pointer"
          bg="gray.250"
        >
          <Image
            src={groupBookingImg}
            alt="smiling group of ladies"
            style={{ position: "relative" }}
            width={1000}
            height={1000}
          />
          <HStack justifyContent={"space-between"} p="2rem" gap="2rem">
            <Heading as="h4" fontSize="1.7rem">
              Group Booking{" "}
            </Heading>
            <Button
              px="3rem"
              bg="transparent"
              borderColor="black"
              borderWidth="2px"
              color="black"
            >
              SELECT
            </Button>
          </HStack>
        </Box>
      </Flex>
      <HStack
        mt="4rem"
        position={{ base: "sticky", md: "relative" }}
        bottom="0"
        w="full"
        gap="2rem"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          bg="transparent"
          borderWidth="1.5px"
          borderColor="black"
          color="black"
          w="49%"
          onClick={handlePrev}
          disabled={step === 0}
          opacity={step === 0 ? 0.2 : 1}
          cursor={step === 0 ? "not-allowed" : "pointer"}
        >
          Prev
        </Button>

        <Button
          borderWidth="1.5px"
          borderColor="black"
          w="49%"
          onClick={handleContinue}
          disabled={!bookingType}
          opacity={!bookingType ? 0.2 : 1}
          cursor={!bookingType ? "not-allowed" : "pointer"}
        >
          Continue
        </Button>
      </HStack>
    </Box>
  );
};

export default BookingType;
