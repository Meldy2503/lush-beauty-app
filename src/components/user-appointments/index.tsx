import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Wrapper from "../wrapper";
import { Tabs, Box, HStack, Text, Heading } from "@chakra-ui/react";
import NewAppointments from "./new-appointments";
import PastAppointments from "./past-appointments";

const UserAppointments = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Box mt="5rem">
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
                <HStack gap=".5rem">
                  <Text>New Appointment</Text>
                  <Text>(2)</Text>
                </HStack>
              </Tabs.Trigger>
              <Tabs.Trigger
                value="past-appointment"
                p="2rem"
                fontSize={"1.6rem"}
              >
                Past appointment
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
