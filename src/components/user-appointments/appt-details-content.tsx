"use client";

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import Tag from "../tag";


const AppointmentDetailsContent = () => {
  return (
    <Flex
      justify={"space-between"}
      w="full"
      mt="3rem"
      gap="1rem"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box w={{ base: "100%", md: "49%" }} bg="white" p="2rem">
        <Box>
          <Tag label="ongoing" />
          <Heading
            as="h4"
            fontFamily="playfair"
            mb="2rem"
            lineHeight={1.4}
            textTransform={"uppercase"}
            fontSize={{ base: "1.8rem", md: "2rem" }}
          >
            facial treatment{" "}
          </Heading>
          <Flex pb="1.5rem" justifyContent={"space-between"} gap="2rem">
            <Text>Skin Analysis </Text>
            <Text>$4</Text>
          </Flex>
          <Flex pb="1.5rem" justifyContent={"space-between"} gap="2rem">
            <Text>Skin Analysis </Text>
            <Text>$4</Text>
          </Flex>
        </Box>
        <Flex
          bg="gray.250"
          alignItems={"center"}
          p="1rem"
          gap="1.5rem"
          mt="5rem"
        >
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
              fontSize="1.5rem"
            >
              Lush & Luxe – Central London{" "}
            </Heading>
            <Text lineHeight={1.3} w="95%" fontSize="1.4rem">
              68 Charlotte Street, Fitzrovia, London, W1T 4QF
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "49%" }} bg="white" p="2rem">
        <Box>
          <Text fontWeight={"bold"} mb="1.5rem">
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
              <Text lineHeight={1.3} fontSize="1.4rem">
                Facial expert - 35yrs{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box mt="3rem">
          <Text fontWeight={"bold"} mb="1.5rem">
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
              <Text lineHeight={1.3} fontSize="1.4rem">
                09:00 AM{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex
          py="2rem"
          w="full"
          justifyContent={"space-between"}
          alignItems={"center"}
          gap="2rem"
          borderTopWidth={"2px"}
          borderColor={"gray.250"}
          mt="2rem"
        >
          <Text fontWeight={"400"}>Booking Total</Text>{" "}
          <Text fontWeight={"600"} fontSize={"2rem"}>
            $10.00
          </Text>{" "}
        </Flex>
      </Box>
    </Flex>
  );
};

export default AppointmentDetailsContent;
