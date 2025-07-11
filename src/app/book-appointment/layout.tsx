"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiCalendarScheduleLine, RiServiceLine } from "react-icons/ri";
import Navbar from "../../components/navbar";
import ProtectedRoute from "@/components/auth/protected-route";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <ProtectedRoute>
      <Box h="100vh" bg="gray.250" overflow={{ base: "auto", xl: "hidden" }}>
        <Navbar bg="white" color="black" />
        <Flex my="9rem" bg="gray.250">
          <Box
            w="23rem"
            p="2rem 1.5rem"
            pt="3.8rem"
            position="fixed"
            top="8rem"
            bg="white"
            left="0"
            zIndex="10"
            mt="3rem"
            overflowY="auto"
            display={{ base: "none", lg: "block" }}
            shadow={"sm"}
            h="100%"
          >
            <Flex flexDirection="column" gap="2rem">
              {links.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link href={"#"} passHref key={index}>
                    <Flex
                      alignItems="center"
                      fontWeight={"500"}
                      gap="1rem"
                      bg={isActive ? "yellow.100" : "white"}
                      color={isActive ? "white" : "black"}
                      p="1.3rem"
                      cursor={"not-allowed"}
                    >
                      <Icon as={link.icon} boxSize="2rem" />
                      <Text> {link.title}</Text>
                    </Flex>
                  </Link>
                );
              })}
            </Flex>
          </Box>
          <Box
            ml={{ base: "0", lg: "23rem" }}
            w={{ base: "100%", lg: "calc(100% - 23rem)" }}
            px="2rem"
            pt={{ base: "3rem", lg: "4.7rem" }}
            pb="2rem"
          >
            {/* Render all child contents */}
            {children}
          </Box>
        </Flex>
      </Box>
    </ProtectedRoute>
  );
}

const links = [
  {
    title: "Booking type",
    href: "/book-appointment",
    icon: RiCalendarScheduleLine,
  },
  {
    title: "Select Location",
    href: "/book-appointment/select-location",
    icon: IoLocationOutline,
  },
  {
    title: "Select Services",
    href: "/book-appointment/select-service",
    icon: RiServiceLine,
  },
  {
    title: "Select Technician",
    href: "/book-appointment/select-technician",
    icon: MdOutlinePersonAddAlt,
  },
  {
    title: "Select Date/Time",
    href: "/book-appointment/select-date-time",
    icon: FaRegCalendarAlt,
  },
  {
    title: "Confirm Booking",
    href: "/book-appointment/confirm-booking",
    icon: IoCheckmarkCircleOutline,
  },
];
