"use client";

import { RootState } from "@/store";
import { updateAppointment } from "@/store/slices/appointment-slice";
import { AppointmentDetailsType } from "@/types/book-appointment";
import { formatAppointmentDateTime } from "@/utils";
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
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

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
}: SummaryContainerProps) => (
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
      {tick && <IoIosCheckmarkCircle color="#DB9935" size="2.5rem" />}
    </Flex>
  </Box>
);

interface BookingSummaryProps {
  appointmentDetails?: AppointmentDetailsType;
}

const BookingSummary = ({ appointmentDetails }: BookingSummaryProps) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  // All Redux selectors
  const appointment = useSelector(
    (state: RootState) => state.appointment.appointments[0]
  );
  const {
    selectedBranch: branch,
    numberOfClients: numClients,
    serviceSelections,
    selectedSpecialist,
    appointmentDateTime,
    serviceClientCounts,
  } = appointment || {};

  const flatCategories = useMemo(() => {
    // If appointmentDetails.services exists, flatten it
    if (appointmentDetails?.services) {
      return appointmentDetails?.services.flatMap((serviceObj) =>
        (serviceObj.categories ?? []).map((category) => ({
          category,
          serviceId: serviceObj.service.id,
        }))
      );
    }

    // Otherwise, flatten serviceSelections
    if (serviceSelections) {
      return serviceSelections.flatMap((selection) =>
        selection.categoryIds.map((categoryId) => ({
          category: categoryId, // This is just the id, not the full category object
          serviceId: selection.serviceId,
        }))
      );
    }

    return [];
  }, [appointmentDetails?.services, serviceSelections]);

  const { date, time } = useMemo(
    () =>
      formatAppointmentDateTime(
        appointmentDateTime || appointmentDetails?.appointmentDate
      ),
    [appointmentDetails?.appointmentDate, appointmentDateTime]
  );

  // total price for the numClients for each service
  const totalPrice = useMemo(
    () =>
      flatCategories?.reduce((sum, item) => {
        const categoryId = item?.category?.id;
        const count =
          categoryId && numClients !== 1
            ? serviceClientCounts?.[categoryId] || numClients || 1
            : numClients || 1;
        return sum + (item.category?.price || 0) * count;
      }, 0) || 0,
    [flatCategories, serviceClientCounts, numClients]
  );

  // Handler for client count changes
  const handleClientCountChange = useCallback(
    (increment: boolean, index: number) => {
      const categoryId = flatCategories?.[index]?.category?.id;
      if (!categoryId) return;

      const currentCount = serviceClientCounts?.[categoryId] || numClients || 1;
      const newCount = increment
        ? Math.min(currentCount + 1, numClients ?? 1)
        : Math.max(currentCount - 1, 1);

      if (newCount !== currentCount) {
        dispatch(
          updateAppointment({
            serviceClientCounts: { [categoryId]: newCount },
          })
        );
      }
    },
    [flatCategories, serviceClientCounts, numClients, dispatch]
  );
  // Only update if the totalPrice is different from what's in Redux store
  useEffect(() => {
    if (totalPrice !== appointment?.totalPrice) {
      dispatch(
        updateAppointment({
          totalPrice: totalPrice,
        })
      );
    }
  }, [totalPrice, appointment?.totalPrice, dispatch]);

  const isConfirmBooking = pathname.includes("confirm-booking");

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
        Booking summary
      </Heading>

      <Flex
        flexDir={"column"}
        justifyContent={"space-between"}
        h="100%"
        gap={"0rem"}
      >
        <Box overflowY="auto" h={{ base: "100%", md: "65vh" }} px="1.5rem">
          {/* Location */}
          {(branch || appointmentDetails) && (
            <SummaryContainer
              icon={<IoLocationOutline size={"2.3rem"} />}
              heading={`Lush & Luxe – ${
                branch?.name || appointmentDetails?.branch?.name
              }`}
              text={`${
                branch?.address || appointmentDetails?.branch?.address
              }, ${branch?.city || appointmentDetails?.branch?.city}, ${
                branch?.country || appointmentDetails?.branch?.country
              }`}
            />
          )}

          {/* Client count */}
          <Box py="1.5rem">
            <Flex
              justifyContent={"space-between"}
              gap="2rem"
              fontSize={"1.5rem"}
            >
              <Text>Number of Clients</Text>
              <Text>
                {!appointmentDetails
                  ? numClients
                  : appointmentDetails?.numberOfClients}
              </Text>
            </Flex>
          </Box>

          {/* Services */}
          <Box py=".5rem" fontSize={"1.5rem"}>
            {flatCategories?.map((item, index) => {
              const categoryId = item?.category?.id;

              // Default to numClients instead of 1
              const currentCount = categoryId
                ? serviceClientCounts?.[categoryId] || numClients || 1
                : numClients || 1;

              return (
                <Flex
                  key={`${item?.serviceId}-${categoryId}`}
                  justifyContent={"space-between"}
                  gapX="3rem"
                  gapY="1.5rem"
                  w="full"
                  flexWrap={"wrap"}
                  borderTopWidth={"2px"}
                  borderColor={"gray.250"}
                  alignItems={"center"}
                  py="1rem"
                > <Text>
                    {item?.category?.name || item?.category?.category?.name}
                  </Text>

                  {/* Quantity selector */}
                  {numClients > 1 && isConfirmBooking && (
                    <HStack gapX={"3rem"}>
                      <Text>{item?.category?.price}</Text>
                      <HStack justifyContent={"space-between"} p=".2rem">
                        <Button
                          bg="transparent"
                          color="black"
                          onClick={() => handleClientCountChange(false, index)}
                          disabled={currentCount === 1}
                          cursor={
                            currentCount === 1 ? "not-allowed" : "pointer"
                          }
                        >
                          <FiMinus />
                        </Button>
                        <Span>{currentCount}</Span>
                        <Button
                          bg="transparent"
                          color="black"
                          onClick={() => handleClientCountChange(true, index)}
                          disabled={currentCount === numClients}
                          cursor={
                            currentCount === numClients
                              ? "not-allowed"
                              : "pointer"
                          }
                        >
                          <FiPlus />
                        </Button>
                      </HStack>
                    </HStack>
                  )}

                  {/* Price */}
                  {(item.category?.price ||
                    item.category?.category?.price ||
                    appointmentDetails) && (
                    <Text fontWeight={"semibold"}>
                      £
                      {numClients > 1 && isConfirmBooking
                        ? (item?.category?.price ||
                            item?.category?.category?.price ||
                            0) * currentCount
                        : item?.category?.price ||
                          item?.category?.category?.price ||
                          0}
                    </Text>
                  )}
                </Flex>
              );
            })}
          </Box>

          {/* Technician */}
          {(selectedSpecialist || appointmentDetails) && (
            <SummaryContainer
              tick
              title="Technician Selected"
              fallbackName={
                selectedSpecialist?.name || appointmentDetails?.specialist?.name
              }
              img={
                selectedSpecialist?.imageUrl ||
                appointmentDetails?.specialist?.imageUrl
              }
              heading={
                selectedSpecialist?.name || appointmentDetails?.specialist?.name
              }
              text="Beauty Specialist"
            />
          )}

          {/* Date and time */}
          {(date || time) && (
            <SummaryContainer
              title="Scheduled Date and Time"
              icon={<LuCalendarDays size={"2rem"} />}
              heading={date}
              text={time}
            />
          )}
        </Box>

        {/* Booking Total */}
        {isConfirmBooking ||
          (appointmentDetails && (
            <HStack
              p="2.5rem 1.5rem"
              w="full"
              justifyContent={"space-between"}
              gap="2rem"
              borderTopWidth={"2px"}
              borderColor={"gray.250"}
              bg="white"
            >
              <Text fontWeight={"400"}>Booking Total</Text>
              <Text fontWeight={"600"}>
                £{totalPrice || appointmentDetails?.totalCost}.00
              </Text>
            </HStack>
          ))}
      </Flex>
    </Box>
  );
};

export default BookingSummary;
