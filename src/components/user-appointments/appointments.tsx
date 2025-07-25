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
import { formatAppointmentDateTime } from "@/utils";
import { useState } from "react";

const UserAppointmentsPage = () => {
  const { data: userAppointments, isLoading } = useGetUserAppointments();
  const [viewAppointmentDetailsId, setViewAppointmentDetailsId] = useState("");

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
            Appointments
          </Heading>
          {isLoading ? (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Spinner my="20rem" />
            </Flex>
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
                            textTransform={"uppercase"}
                            fontSize={{ base: "1.6rem", md: "1.7rem" }}
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
                        {appointment?.services &&
                          appointment?.services?.map((service) => {
                            return (
                              <Text
                                key={service?.id}
                                lineHeight={1.3}
                                bg="gray.250"
                                p=".5rem 1rem"
                                rounded={"md"}
                                color="gray.100"
                              >
                                {service?.service?.name}
                              </Text>
                            );
                          })}
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
                    <Flex alignSelf={{ base: "flex-end", md: "center" }}>
                      <ViewAppointmentDetailsModal
                        onClick={() =>
                          setViewAppointmentDetailsId(appointment?.id ?? "")
                        }
                        viewAppointmentDetailsId={viewAppointmentDetailsId}
                      />
                    </Flex>
                  </Flex>
                );
              })}
            </Box>
          )}
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserAppointmentsPage;
