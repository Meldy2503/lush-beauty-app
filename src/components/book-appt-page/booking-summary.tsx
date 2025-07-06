"use client";

import { Avatar, Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import personalBookingImg from "../../assets/images/personal-booking-img.webp";
import { FiMinus, FiPlus } from "react-icons/fi";

const BookingSummary = () => {
  return (
    <Box
      bg="white"
      position={"relative"}
      display="flex"
      flexDirection="column"
      shadow={"sm"}
    >
      <Heading
        as="h3"
        fontSize={{ base: "1.7rem", md: "1.8rem" }}
        fontFamily="playfair"
        mb="2rem"
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
        <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
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
              fontSize="1.45rem"
            >
              Lush & Luxe – Central London{" "}
            </Heading>
            <Text lineHeight={1.3} w="95%" fontSize="1.3rem">
              68 Charlotte Street, Fitzrovia, London, W1T 4QF
            </Text>
          </Box>
        </Flex>
        {/* Expected clients section */}
        <Box
          borderTopWidth={"2px"}
          borderColor={"gray.250"}
          py="1.5rem"
          mt="1.5rem"
        >
          <Flex justifyContent={"space-between"} gap="2rem">
            <Text>Number of Clients</Text>
            <Text>3</Text>
          </Flex>
        </Box>
        {/* services section */}
        <Box borderTopWidth={"2px"} borderColor={"gray.250"} py="1.5rem">
          <Flex
            justifyContent={"space-between"}
            gapX="2rem"
            gapY="1rem"
            w="full"
            flexWrap={"wrap"}
          >
            <Text>Skin Analysis </Text>
            <Flex
              w={{ base: "100%", sm: "auto" }}
              gap="1rem"
              justifyContent={{ base: "flex-end", sm: "inherit" }}
            >
              <Text>£40</Text>
              <Text fontStyle="italic">x</Text>{" "}
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="6.5rem"
                border="1px solid black"
                p=".3rem .5rem"
                fontSize={"1.3rem"}
              >
                <Box>
                  <FiMinus />
                </Box>
                <Text>3</Text>
                <Box>
                  <FiPlus />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {/* technician section */}
        <Box borderTopWidth={"2px"} borderColor={"gray.250"} pt="1.5rem">
          <Text fontWeight={"bold"} mb="1rem">
            Technician selected
          </Text>
          <Flex bg="gray.250" alignItems={"center"} p="1rem" gap="1.5rem">
            <Avatar.Root size="2xl" boxSize={"5rem"} variant={"solid"}>
              <Avatar.Fallback name="Grace Edith" />
              <Avatar.Image src={personalBookingImg.src} />
            </Avatar.Root>
            <Box>
              <Heading
                as="h4"
                fontFamily="playfair"
                mb=".5rem"
                lineHeight={1.4}
                textTransform={"uppercase"}
                fontSize="1.45rem"
              >
                Ruth Patricia{" "}
              </Heading>
              <Text lineHeight={1.3} fontSize="1.35rem">
                Facial expert - 35yrs{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* date and time section */}
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
                fontSize="1.45rem"
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
      >
        <Text fontWeight={"400"}>Booking Total</Text>{" "}
        <Text fontWeight={"600"}>$10.00</Text>{" "}
      </Flex>
    </Box>
  );
};

export default BookingSummary;
