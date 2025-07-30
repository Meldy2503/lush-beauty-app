"use client";

import { Box, Flex, Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import Tag from "../shared/tag";
import ViewAppointmentDetailsModal from "./view-appointment-modal";
import Navbar from "../navbar";
import Wrapper from "../shared/wrapper";
import { GoBack } from "../shared/go-back";
import Footer from "../footer";
import { useGetUserAppointments } from "@/services/api/user";
import { UserAppointmentType } from "@/types/user";
import { formatAppointmentDateTime, scrollToTop } from "@/utils";
import { useState } from "react";
import Pagination from "../shared/pagination";
import { Params } from "@/types";
import EmptyState from "../shared/empty-state";
import { useMakeAppointmentPaymentMutation } from "@/services/api/book-appointment";
import {
  setAppointmentId,
  setApptClientSecretKey,
} from "@/store/slices/appointment-slice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Button from "../shared/button";

const UserAppointmentsPage = () => {
  const [viewAppointmentDetailsId, setViewAppointmentDetailsId] = useState("");
  const [params, setParams] = useState<Params>({
    page: 1,
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserAppointments({
    page: params?.page,
  });

  const { mutateAsync: makeAppointmentPayment } =
    useMakeAppointmentPaymentMutation();

  const userAppointments = data?.data;

  const handleNext = () => {
    if (data?.meta?.page < data?.meta?.totalPages) {
      setParams((prev) => ({ ...prev, page: prev.page + 1 }));
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (data?.meta?.page > 1) {
      setParams((prev) => ({ ...prev, page: prev.page - 1 }));
      scrollToTop();
    }
  };

  const handlePayForAppointment = async (appointmentId: string) => {
    try {
      const response = await makeAppointmentPayment({ appointmentId });
      const clientSecret = response?.data?.clientSecret;

      if (!clientSecret) {
        console.error("No client secret returned");
        return;
      }
      router.push("/appointment-payment");
      dispatch(setApptClientSecretKey(clientSecret));
      dispatch(setAppointmentId(appointmentId));
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper bg="gray.250">
        <GoBack />
        <Box mt="1rem" bg="white" p={{ base: "3rem 1.5rem", md: "3rem 2rem" }}>
          <Heading
            as="h2"
            fontSize={{ base: "1.8rem", md: "1.9rem" }}
            fontFamily="playfair"
            mb="3rem"
            lineHeight={1.3}
            textTransform={"uppercase"}
          >
            My Appointments
          </Heading>
          {isLoading ? (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Spinner my="20rem" />
            </Flex>
          ) : !userAppointments ? (
            <EmptyState />
          ) : (
            <Box mt="3rem">
              {userAppointments?.map((appointment: UserAppointmentType) => {
                const { date, time } = formatAppointmentDateTime(
                  appointment?.createdAt
                );

                return (
                  <Flex
                    key={appointment?.id}
                    borderWidth={"2px"}
                    borderColor={"gray.250"}
                    alignItems={{ base: "flex-start", md: "center" }}
                    flexDir={{ base: "column", md: "row" }}
                    gap="2rem 4rem"
                    justifyContent={"space-between"}
                    p="1.5rem"
                    mb="1rem"
                  >
                    <Box fontSize="1.6rem">
                      <Tag label={appointment?.status} />
                      {appointment?.numberOfClients && (
                        <Flex
                          mt="1rem"
                          flexWrap={"wrap"}
                          gap=".2rem 1rem"
                          alignItems={"center"}
                        >
                          <Heading
                            as="h4"
                            lineHeight={1.4}
                            fontSize={{ base: "1.6rem", md: "1.7rem" }}
                            color="gray.100"
                            textTransform={"uppercase"}
                          >
                            {appointment?.type} Appointment
                          </Heading>
                          <Text>
                            ({appointment?.numberOfClients}{" "}
                            {appointment?.numberOfClients > 1
                              ? "persons"
                              : "person"}
                            )
                          </Text>
                        </Flex>
                      )}

                      <Flex
                        gap="1rem"
                        textTransform="lowercase"
                        my=".6rem"
                        flexWrap={"wrap"}
                      >
                        {appointment?.services?.map((serviceItem) =>
                          serviceItem?.categories?.map((categoryItem) => (
                            <Text
                              key={categoryItem?.id}
                              lineHeight={1.3}
                              bg="gray.250"
                              p=".5rem 1rem"
                              rounded={"md"}
                              color="gray.100"
                            >
                              {categoryItem?.category?.name}
                            </Text>
                          ))
                        )}
                      </Flex>
                      <HStack fontSize="1.4rem" pt="1rem">
                        <Text lineHeight={1.3}>
                          {date} / {time}
                        </Text>
                      </HStack>
                      <Text
                        fontSize="1.7rem"
                        pt=".8rem"
                        fontWeight={"semibold"}
                      >
                        £{appointment?.totalCost}
                      </Text>
                    </Box>
                    <Flex alignSelf="flex-end" flexWrap={"wrap"} gap="1rem">
                      <ViewAppointmentDetailsModal
                        onClick={() =>
                          setViewAppointmentDetailsId(appointment?.id ?? "")
                        }
                        viewAppointmentDetailsId={viewAppointmentDetailsId}
                      />
                      {appointment?.status === "PENDING" && (
                        <Button
                          px={{ base: "1rem", md: "1.5rem" }}
                          py="1.9rem"
                          fontSize="1.5rem"
                          onClick={() =>
                            handlePayForAppointment(appointment?.id || "")
                          }
                        >
                          Pay for Order
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                );
              })}
            </Box>
          )}
        </Box>
        {userAppointments && (
          <Pagination
            totalCount={data?.meta?.total}
            currentPage={data?.meta?.page}
            pageSize={data?.meta?.pageSize}
            totalPages={data?.meta?.totalPages}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserAppointmentsPage;
