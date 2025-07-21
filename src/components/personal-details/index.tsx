"use client";

import {
  Accordion,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdSchedule } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../footer";
import Navbar from "../navbar";
import Wrapper from "../shared/wrapper";
import ManageAddress from "./manage-address";
import UpdatePassword from "./update-password";
import UserDetails from "./user-details";
import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  href: string;
  icon: ReactNode;
  title: string;
  text: string;
}

const Card = ({ href, icon, title, text }: CardProps) => {
  return (
    <Link href={href}>
      <HStack
        borderWidth={"1px"}
        borderColor="gray.200"
        borderRadius={"sm"}
        p={{ base: "1.5rem", sm: "3rem" }}
        flex="1"
        gap="2rem"
        flexDir={{ base: "column", sm: "row" }}
        alignItems={{ base: "flex-start", sm: "center" }}
      >
        <Box bg="yellow.100" rounded={"full"} p="1.5rem" color="white">
          {icon}
        </Box>
        <Box>
          <Text mb=".5rem" fontWeight={"600"}>
            {title}
          </Text>
          <Text color="gray.700">{text}</Text>
        </Box>
      </HStack>
    </Link>
  );
};

const UserDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Wrapper bg="gray.250">
        <Box mt="6rem" bg="white" p={{ base: "3rem 1.5rem", md: "3rem 2rem" }}>
          <Heading
            as="h2"
            fontSize={{ base: "1.8rem", md: "1.9rem" }}
            fontFamily="playfair"
            mb="2rem"
            lineHeight={1.3}
            textTransform={"uppercase"}
          >
            Personal Details{" "}
          </Heading>

          <Text mb="3rem">
            Update and add new addresses here. Orders are sent to your default
            delivery address. You can change this at any time.
          </Text>

          <Accordion.Root
            collapsible
            defaultValue={["details"]}
            variant={"plain"}
            fontSize={"1.6rem"}
          >
            {items.map((item, index) => (
              <Accordion.Item key={index} value={item.value} mb="2rem">
                <Accordion.ItemTrigger
                  bg="gray.250"
                  py="2.5rem"
                  px={{ base: "1.3rem", sm: "2.5rem" }}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <HStack gap="1rem">
                    <Icon fontSize="2.5rem" color="fg.subtle">
                      {item.icon}
                    </Icon>
                    <Text
                      fontSize={{ base: "1.5rem", md: "1.6rem" }}
                      lineHeight={1.4}
                      fontWeight={"600"}
                    >
                      {item.title}
                    </Text>{" "}
                  </HStack>
                  <Accordion.ItemIndicator fontSize={"2rem"} />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent
                  bg="gray.250"
                  px={{ base: "1.5rem", sm: "2.9rem" }}
                >
                  <Accordion.ItemBody pb="2rem">
                    {item.content}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Box>
        {/* order and appointment section */}
        <Box mt="3rem" bg="white" p={{ base: "4rem 1.5rem", md: "4rem 2rem" }}>
          <Heading
            as="h2"
            fontSize={{ base: "1.8rem", md: "1.9rem" }}
            fontFamily="playfair"
            mb="1.5rem"
            lineHeight={1.3}
            textTransform={"uppercase"}
          >
            Your orders and appointments
          </Heading>
          <Text mb="4rem" mt="1rem">
            Stay up to date with your bookings and appointments. Click below to
            view your order and appointment history.
          </Text>
          <Flex gap="2rem" flexDir={{ base: "column", xl: "row" }}>
            {/* Orders Card */}
            <Card
              href="/orders"
              title="Your Orders"
              icon={<TbTruckDelivery size="3.5rem" />}
              text="Easily track your purchases and check order status. Reorder
                    items quickly or request support when needed. Keep all your
                    shopping history in one place."
            />
            {/* Appointments Card */}
            <Card
              href="/appointments"
              title="Your Appointments"
              icon={<MdSchedule size="3.5rem" />}
              text="Manage all your upcoming appointments with ease. Reschedule
                    or cancel sessions and get timely reminders. Stay organized
                    and never miss a booking."
            />
          </Flex>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserDetailsPage;

const items = [
  {
    value: "details",
    icon: <IoPersonOutline />,
    title: "Your Personal Details",
    content: <UserDetails />,
  },
  {
    value: "password",
    icon: <BsKey />,
    title: "Update Password",
    content: <UpdatePassword />,
  },
  {
    value: "address",
    icon: <AiOutlineHome />,
    title: "Manage your Address",
    content: <ManageAddress />,
  },
];
