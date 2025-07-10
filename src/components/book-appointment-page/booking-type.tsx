"use client";

import { updateAppointment } from "@/store/slices/appointment-slice";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import groupBookingImg from "../../assets/images/group-booking-img.webp";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Button from "../ui/button";
import ExpectedClientModal from "./expected-client-modal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
 import { useRouter } from "next/navigation";

const BookingTypePage = () => {
  const dispatch = useDispatch();
   const router = useRouter();
  const numOfClients = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.numberOfClients
  );

  const [expectedClients, setExpectedClients] = useState<number>(
    numOfClients ?? 1
  );

  const handleBooking = (clients: number) => {
    setExpectedClients(clients);
    dispatch(
      updateAppointment({
        numberOfClients: clients,
      })
    );
     router.push("/book-appointment/select-location");
  };

  return (
    <Flex
      bg="white"
      shadow={"sm"}
      justifyContent={"center"}
      flexDir={"column"}
      h={{ base: "100%", md: "80vh" }}
      overflowY={"auto"}
      p={{ base: "2rem", sm: "3rem" }}
    >
      <Flex gap="4rem 2rem" flexDir={{ base: "column", md: "row" }}>
        {bookingTypeData.map((bookingType) => {
          return (
            <Box
              key={bookingType.id}
              borderWidth={"2px"}
              borderColor="white"
              _hover={{ borderColor: "yellow.100" }}
              cursor="pointer"
              bg="gray.250"
            >
              <Image
                src={bookingType.image}
                priority
                alt="a smiling single lady"
                style={{ position: "relative" }}
                width={1000}
                height={1000}
              />
              <Flex
                justifyContent={"space-between"}
                p="3rem 2rem"
                gap="2rem"
                flexDir={{ base: "column", xl: "row" }}
              >
                <Text fontWeight={"600"} fontSize="1.8rem">
                  {bookingType.title}
                </Text>
                {bookingType.id === "personal" ? (
                  <Button
                    href="/book-appointment/select-location"
                    px="2rem"
                    bg="yellow.150"
                    onClick={() => handleBooking(1)}
                    w={{ base: "full", xl: "fit-content" }}
                    fontSize="1.5rem"
                  >
                    CREATE BOOKING
                  </Button>
                ) : (
                  <ExpectedClientModal
                    onClick={() => handleBooking(expectedClients)}
                    numOfClients={numOfClients}
                    setExpectedClients={setExpectedClients}
                  />
                )}
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default BookingTypePage;

const bookingTypeData = [
  {
    id: "personal",
    title: "Personal Booking",
    image: personalBookingImg,
  },
  {
    id: "group",
    title: "Group Booking",
    image: groupBookingImg,
  },
];
