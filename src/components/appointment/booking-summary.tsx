"use client";

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";

const BookingSummary = () => {
  return (
    <Box bg="white" position={"relative"} display="flex" flexDirection="column">
      <Heading
        as="h3"
        fontSize={{ base: "1.8rem", md: "1.9rem" }}
        fontFamily="playfair"
        mb="2rem"
        px="1.5rem"
        pt="2rem"
        lineHeight={1.3}
        textTransform={"uppercase"}
      >
        Booking summary{" "}
      </Heading>{" "}
      <Box overflowY="auto" h="65vh" pb="4rem" px="1.5rem">
        <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
          <HStack bg="white" p=".8rem" rounded={"full"} shadow={"md"}>
            <IoLocationOutline size={"2.3rem"} />
          </HStack>
          <Box>
            <Heading
              as="h4"
              fontFamily="playfair"
              mb="1rem"
              lineHeight={1.4}
              textTransform={"uppercase"}
              fontSize="1.5rem"
            >
              Lush & Luxe – Central London{" "}
            </Heading>
            <Text lineHeight={1.35} w="95%" fontSize="1.4rem">
              68 Charlotte Street, Fitzrovia, London, W1T 4QF
            </Text>
          </Box>
        </Flex>
        <Box
          borderTopWidth={"2px"}
          borderColor={"gray.250"}
          py="1rem"
          mt="2rem"
        >
          <Flex pb="1rem" justifyContent={"space-between"} gap="2rem">
            <Text>Skin Analysis </Text>
            <Text>$4</Text>
          </Flex>
          <Flex pb="1rem" justifyContent={"space-between"} gap="2rem">
            <Text>Skin Analysis </Text>
            <Text>$4</Text>
          </Flex>
        </Box>
        <Box borderTopWidth={"2px"} borderColor={"gray.250"} pt="1.5rem">
          <Text fontWeight={"bold"} mb="1rem">
            Technician selected
          </Text>
          <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
            <Image
              src={personalBookingImg}
              alt="a lush & luxe staff"
              style={{
                borderRadius: "50%",
                height: "6rem",
                width: "6rem",
                objectFit: "cover",
              }}
              width={100}
              height={100}
            />{" "}
            <Box>
              <Heading
                as="h4"
                fontFamily="playfair"
                mb=".5rem"
                lineHeight={1.4}
                textTransform={"uppercase"}
                fontSize="1.5rem"
              >
                Ruth Patricia{" "}
              </Heading>
              <Text lineHeight={1.3} fontSize="1.35rem">
                Facial expert - 35yrs{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
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
                fontSize="1.5rem"
              >
                Tue, June 02, 2025{" "}
              </Heading>
              <Text lineHeight={1.3} fontSize="1.35rem">
                09:00 AM{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex
        p="2.5rem 1.5rem"
        w="full"
        position="sticky"
        bottom="0"
        left="0"
        zIndex="10"
        justifyContent={"space-between"}
        alignItems={"center"}
        gap="2rem"
        borderTopWidth={"2px"}
        borderColor={"gray.250"}
      >
        <Text fontWeight={"400"}>Booking Total</Text>{" "}
        <Text fontWeight={"600"}>$10.00</Text>{" "}
      </Flex>
    </Box>
  );
};

export default BookingSummary;
