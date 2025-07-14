"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Span,
  Text,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { staffs } from "./select-technician";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { formatAppointmentDateTime } from "@/utils";
import { serviceItems } from "./select-service";
import { useCallback, useState } from "react";

interface SummaryContainerProps {
  title?: string;
  fallbackName?: string;
  img?: string;
  heading?: React.ReactNode;
  text?: React.ReactNode;
  tick?: boolean;
  icon?: React.ReactNode;
}

const SummaryContainer = ({
  title,
  text,
  fallbackName,
  img,
  heading,
  tick,
  icon,
}: SummaryContainerProps) => {
  return (
    <Box borderBottomWidth={"2px"} borderColor={"gray.250"} py="1.4rem">
      <Text fontWeight={"bold"} mb=".8rem" fontSize={"1.6rem"}>
        {title}
      </Text>
      <Flex
        bg="gray.250"
        alignItems={"center"}
        p="1rem"
        gap="1.5rem"
        justifyContent={tick ? "space-between" : "flex-start"}
      >
        <>
          {icon ? (
            <HStack bg="white" p="1rem" rounded={"full"} shadow={"md"}>
              {icon}
            </HStack>
          ) : (
            <Avatar.Root size="2xl" boxSize={"5rem"} variant={"solid"}>
              <Avatar.Fallback name={fallbackName} />
              <Avatar.Image src={img} />
            </Avatar.Root>
          )}
        </>
        <Box>
          <Heading
            as="h4"
            fontFamily="playfair"
            mb=".5rem"
            lineHeight={1.4}
            textTransform={"uppercase"}
            fontSize="1.4rem"
          >
            {heading}
          </Heading>
          <Text lineHeight={1.3} fontSize="1.35rem">
            {text}
          </Text>
        </Box>
        {tick && <IoIosCheckmarkCircle color="#DB9935" size="2.5rem" />}{" "}
      </Flex>
    </Box>
  );
};

const BookingSummary = () => {
  const storedBranch = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.selectedBranch
  );

  const numOfClients = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.numberOfClients
  );
  // const [updateClientCount, setUpdateClientCount] = useState<number>(
  //   numOfClients ?? 1
  // );

  // const [updateClientCounts, setUpdateClientCounts] = useState<number[]>(
  //   Array(numOfClients || 1).fill(1) // Initial count of 1 per client
  // );

  const [updateClientCount, setUpdateClientCount] = useState<number[]>(() =>
    Array(numOfClients).fill(numOfClients ?? 1)
  );
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

  // const handleClientCountChange = (increment: boolean) => {
  //   setUpdateClientCount((prevCount) =>
  //     increment
  //       ? Math.min(prevCount + 1, numOfClients ?? 1)
  //       : Math.max(prevCount - 1, 1)
  //   );
  // };

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

  const handleClientCountChange = useCallback(
    (increment: boolean, index: number) => {
      setUpdateClientCount((prevCounts) => {
        const updated = [...prevCounts];
        updated[index] = increment
          ? Math.min(updated[index] + 1, numOfClients ?? 1)
          : Math.max(updated[index] - 1, 1);
        return updated;
      });
    },
    [numOfClients]
  );

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
        {storedBranch && (
          <SummaryContainer
            icon={<IoLocationOutline size={"2.3rem"} />}
            heading={`Lush & Luxe – ${storedBranch.name}`}
            text={`${storedBranch.address}, ${storedBranch.city},
                ${storedBranch.country}`}
          />
        )}
        {/* Expected clients section */}
        <Box py="1.5rem">
          <Flex justifyContent={"space-between"} gap="2rem" fontSize={"1.5rem"}>
            <Text>Number of Clients</Text>
            <Text>{numOfClients}</Text>
          </Flex>
        </Box>
        {/*services section */}
        <Box
          borderYWidth={"2px"}
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
              return selectedCategories.map((category, index) => (
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
                            onClick={() =>
                              handleClientCountChange(false, index)
                            }
                            disabled={updateClientCount[index] === 1}
                            cursor={
                              updateClientCount[index] === 1
                                ? "not-allowed"
                                : "pointer"
                            }
                          >
                            <FiMinus />
                          </Button>
                          <Span>{updateClientCount[index]}</Span>
                          <Button
                            bg="transparent"
                            color="black"
                            onClick={() => handleClientCountChange(true, index)}
                            disabled={updateClientCount[index] === numOfClients}
                            cursor={
                              updateClientCount[index] === numOfClients
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
          <SummaryContainer
            tick
            title="Technician Selected"
            fallbackName={staffDetails.name}
            img={staffDetails.img.src}
            heading={staffDetails.name}
            text={`${staffDetails.typeOfService} - ${staffDetails.age}yrs`}
          />
        )}
        {/* date and time section */}
        {(date || time) && (
          <SummaryContainer
            title="Scheduled Date and Time"
            icon={<LuCalendarDays size={"2rem"} />}
            heading={date}
            text={time}
          />
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
