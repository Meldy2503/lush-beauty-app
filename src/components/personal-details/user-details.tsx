"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import PersonalDetailsModal from "../shop-page/personal-details-modal";

const DetailsWrapper = ({ title, value }: { title: string; value: string }) => {
  return (
    <HStack
      gap="2rem"
      justifyContent={"space-between"}
      p="2rem"
      borderWidth={"1px"}
      borderColor="gray.200"
      borderRadius={"sm"}
    >
      <Flex
        w="90%"
        justifyContent={"space-between"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Text color="gray.100" w={{ base: "90%", sm: "30%" }}>
          {title}
        </Text>
        <Text w={{ base: "90%", sm: "70%" }}>{value}</Text>
      </Flex>
      <PersonalDetailsModal />
    </HStack>
  );
};

const UserDetails = () => {
  return (
    <Box>
      <Text mb="3rem">
        Please keep your details up to date. This way you can checkout quick &
        easy, and see your personalised offers.
      </Text>
      <Flex gap="2rem" flexDir="column">
        <DetailsWrapper title="Name" value=" Emelder Okafor" />
        <DetailsWrapper
          title="Email Address"
          value=" emelder.charles25@gmail.com"
        />
        <DetailsWrapper title="Phone Number" value=" 07881175122" />
        <DetailsWrapper title="Address" value=" 25 Beverly St. London, UK" />
      </Flex>
    </Box>
  );
};

export default UserDetails;
