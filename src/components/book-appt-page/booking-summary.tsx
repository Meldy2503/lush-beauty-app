"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { branches } from "./select-location";
import { staffs } from "./select-technician";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { formatAppointmentDateTime } from "@/utils";
import { serviceItems } from "./select-service";
import { useState } from "react";

const BookingSummary = () => {
  const branchId = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.branchId
  );
  const branchDetails = branches.find((branch) => branch.id === branchId);
  const numOfClients = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.numberOfClients
  );
  const [updateClientCount, setUpdateClientCount] = useState<number>(
    numOfClients ?? 1
  );

  // const [updateClientCounts, setUpdateClientCounts] = useState<number[]>(
  //   Array(numOfClients || 1).fill(1) // Initial count of 1 per client
  // );
  const serviceSelections = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.serviceSelections
  );

  const specialistId = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.specialistId
  );
  const staffDetails = staffs.find((staff) => staff.id === specialistId);
  const appointmentDateTime = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.appointmentDateTime
  );
  const { date, time } = formatAppointmentDateTime(appointmentDateTime);

  const handleClientCountChange = (increment: boolean) => {
    setUpdateClientCount((prevCount) =>
      increment
        ? Math.min(prevCount + 1, numOfClients ?? 1)
        : Math.max(prevCount - 1, 1)
    );
  };

  // const handleClientCountChange = useCallback(
  //   (increment: boolean, index: number) => {
  //     setUpdateClientCounts((prevCounts) => {
  //       const updated = [...prevCounts];
  //       updated[index] = increment
  //         ? Math.min(updated[index] + 1, numOfClients ?? 1)
  //         : Math.max(updated[index] - 1, 1);
  //       return updated;
  //     });
  //   },
  //   [numOfClients]
  // );

  return (
    <Box
      bg="white"
      position={"relative"}
      display="flex"
      flexDirection="column"
      shadow={"sm"}
      w="full"
    >
      <Heading
        as="h3"
        fontSize={{ base: "1.7rem", md: "1.8rem" }}
        fontFamily="playfair"
        mb="2rem"
        px="1.5rem"
        pt="2rem"
        lineHeight={1.3}
        textTransform={"uppercase"}
      >
        Booking summary{" "}
      </Heading>{" "}
      <Box
        overflowY="auto"
        h={{ base: "100%", md: "65vh" }}
        pb="4rem"
        px="1.5rem"
      >
        {/* location section */}
        {branchDetails && (
          <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
            <HStack bg="white" p=".8rem" rounded={"full"} shadow={"md"}>
              <IoLocationOutline size={"2.3rem"} />
            </HStack>
            <Box>
              <Heading
                as="h4"
                fontFamily="playfair"
                mb=".5rem"
                lineHeight={1.4}
                textTransform={"uppercase"}
                fontSize="1.4rem"
              >
                Lush & Luxe – {branchDetails.name}
              </Heading>
              <Text lineHeight={1.3} w="95%" fontSize="1.3rem">
                {branchDetails.address}, {branchDetails.city},{" "}
                {branchDetails.country}
              </Text>
            </Box>
          </Flex>
        )}
        {/* Expected clients section */}
        <Box
          borderTopWidth={"2px"}
          borderColor={"gray.250"}
          py="1.5rem"
          mt="1.5rem"
        >
          <Flex justifyContent={"space-between"} gap="2rem" fontSize={"1.5rem"}>
            <Text>Number of Clients</Text>
            <Text>{numOfClients}</Text>
          </Flex>
        </Box>
        {/*services section */}
        <Box
          borderTopWidth={"2px"}
          borderColor={"gray.250"}
          py=".5rem"
          fontSize={"1.5rem"}
        >
          {serviceSelections
            ?.filter((selection) => selection.categoryIds.length > 0)
            .map((selection) => {
              const serviceDetail = serviceItems.find(
                (item) => item.value === selection.serviceId
              );

              if (!serviceDetail) return null;

              const selectedCategories = serviceDetail.categories.filter(
                (cat) => selection.categoryIds.includes(cat.name)
              );
              return selectedCategories.map((category) => (
                <Flex
                  key={`${selection.serviceId}-${category.name}`}
                  justifyContent={"space-between"}
                  gapX="2rem"
                  gapY="1rem"
                  w="full"
                  flexWrap={"wrap"}
                  py="1rem"
                >
                  <Text>{category.name}</Text>
                  <Flex
                    w={{ base: "100%", sm: "auto" }}
                    gap="1rem"
                    justifyContent={{ base: "flex-end", sm: "inherit" }}
                    alignItems={"center"}
                  >
                    <Text>£{category.price}</Text>
                    {numOfClients > 1 && (
                      <HStack gap="1rem">
                        <Text fontStyle="italic">x</Text>

                        <HStack
                          justifyContent={"space-between"}
                          border="1px solid black"
                          fontSize={"1.5rem"}
                          p=".2rem"
                        >
                          <Button
                            bg="transparent"
                            color="black"
                            onClick={() => handleClientCountChange(false)}
                            disabled={updateClientCount === 1}
                            cursor={
                              updateClientCount === 1
                                ? "not-allowed"
                                : "pointer"
                            }
                          >
                            <FiMinus />
                          </Button>
                          <Text>{updateClientCount}</Text>
                          <Button
                            bg="transparent"
                            color="black"
                            onClick={() => handleClientCountChange(true)}
                            disabled={updateClientCount === numOfClients}
                            cursor={
                              updateClientCount === numOfClients
                                ? "not-allowed"
                                : "pointer"
                            }
                          >
                            <FiPlus />
                          </Button>
                        </HStack>
                      </HStack>
                    )}
                  </Flex>
                </Flex>
              ));
            })}
        </Box>

        {/* technician section */}
        {staffDetails && (
          <Box borderTopWidth={"2px"} borderColor={"gray.250"} pt="1.5rem">
            <Text fontWeight={"bold"} mb="1rem">
              Technician selected
            </Text>
            <Flex
              bg="gray.250"
              alignItems={"center"}
              p="1rem"
              gap="1.5rem"
              justifyContent={"space-between"}
            >
              <Avatar.Root size="2xl" boxSize={"5rem"} variant={"solid"}>
                <Avatar.Fallback name={staffDetails.name} />
                <Avatar.Image src={staffDetails.img.src} />
              </Avatar.Root>
              <Box>
                <Heading
                  as="h4"
                  fontFamily="playfair"
                  mb=".5rem"
                  lineHeight={1.4}
                  textTransform={"uppercase"}
                  fontSize="1.4rem"
                >
                  {staffDetails.name}
                </Heading>
                <Text lineHeight={1.3} fontSize="1.3rem">
                  {staffDetails.typeOfService} - {staffDetails.age}yrs
                </Text>
              </Box>
              <IoIosCheckmarkCircle color="#DB9935" size="2.5rem" />
            </Flex>
          </Box>
        )}
        {/* date and time section */}
        {(date || time) && (
          <Box
            borderTopWidth={"2px"}
            borderColor={"gray.250"}
            mt="2rem"
            pt="1.5rem"
          >
            <Text fontWeight={"bold"} mb="1rem">
              Scheduled date and time{" "}
            </Text>
            <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
              <HStack bg="white" p="1rem" rounded={"full"} shadow={"md"}>
                <LuCalendarDays size={"2rem"} />
              </HStack>
              <Box>
                <Heading
                  as="h4"
                  fontFamily="playfair"
                  mb=".5rem"
                  lineHeight={1.4}
                  fontSize="1.45rem"
                >
                  {date}
                </Heading>
                <Text lineHeight={1.3} fontSize="1.35rem">
                  {time}
                </Text>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
      {/* Booking Total Section */}
      <Flex
        p="2.5rem 1.5rem"
        w="full"
        position="sticky"
        bottom="0"
        left="0"
        justifyContent={"space-between"}
        alignItems={"center"}
        gap="2rem"
        borderTopWidth={"2px"}
        borderColor={"gray.250"}
        bg="white"
        zIndex={100}
      >
        <Text fontWeight={"400"}>Booking Total</Text>{" "}
        <Text fontWeight={"600"}>$10.00</Text>{" "}
      </Flex>
    </Box>
  );
};

export default BookingSummary;
