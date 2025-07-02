import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Wrapper from "../ui/wrapper";
import { Tabs, Box, HStack, Text, Heading, Span } from "@chakra-ui/react";
import NewAppointments from "./new-appointments";
import PastAppointments from "./past-appointments";
import { GoBack } from "../ui/go-back";

const UserAppointments = () => {
  return (
    <>
      <Navbar />
      <Wrapper bg="gray.250">
        <GoBack />

        <Box mt="1rem" bg="white" p="3rem 2rem">
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
          <Tabs.Root defaultValue="new-appointment" variant="plain">
            <Tabs.List bg="gray.250" p="1">
              <Tabs.Trigger
                value="new-appointment"
                p="2rem"
                fontSize={"1.6rem"}
              >
                <HStack gap=".5rem" w="fit-content">
                  <Text>
                    New{" "}
                    <Span display={{ base: "none", sm: "inline" }}>
                      Appointment
                    </Span>
                  </Text>
                  <Span>(2)</Span>
                </HStack>
              </Tabs.Trigger>
              <Tabs.Trigger
                value="past-appointment"
                p="2rem"
                fontSize={"1.6rem"}
              >
                Past{" "}
                <Span display={{ base: "none", sm: "inline" }}>
                  Appointment
                </Span>
              </Tabs.Trigger>
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
            <Tabs.Content value="new-appointment" my="2rem">
              <NewAppointments />
            </Tabs.Content>
            <Tabs.Content value="past-appointment">
              <PastAppointments />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserAppointments;
