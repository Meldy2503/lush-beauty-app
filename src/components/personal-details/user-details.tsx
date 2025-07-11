"use client";

import { Box, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import PersonalDetailsModal from "./personal-details-modal";
import { useGetUserProfile } from "@/services/api/user";
import { UserAddressType, UserProfileType } from "@/types/user";

interface DetailsWrapperType {
  title: string;
  value: string;
  user: UserProfileType;
}
const DetailsWrapper = ({ title, value, user }: DetailsWrapperType) => {
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
        fontSize={{ base: "1.5rem", md: "1.6rem" }}
      >
        <Text color="gray.100" w={{ base: "90%", md: "30%" }}>
          {title}
        </Text>
        <Text
          w={{ base: "90%", md: "70%" }}
          wordBreak="break-all"
          whiteSpace="pre-line"
        >
          {value}
        </Text>
      </Flex>
      <PersonalDetailsModal user={user} />
    </HStack>
  );
};

const UserDetails = () => {
  const { data: userDetails, isLoading } = useGetUserProfile();
  const defaultAddress = userDetails?.addresses?.find(
    (address: UserAddressType) => address?.isDefault
  );
  return (
    <Box>
      <Text mb="3rem">
        Please keep your details up to date. This way you can checkout quick &
        easy, and see your personalised offers.
      </Text>
      {isLoading ? (
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Spinner my="10rem" />
        </Flex>
      ) : (
        <Flex gap="2rem" flexDir="column">
          <DetailsWrapper
            title="Name"
            value={userDetails?.fullName}
            user={userDetails}
          />
          <DetailsWrapper
            title="Email Address"
            value={userDetails?.email}
            user={userDetails}
          />
          <DetailsWrapper
            title="Phone Number"
            value={userDetails?.phone}
            user={userDetails}
          />
          {defaultAddress && (
            <DetailsWrapper
              title="Address"
              value={`${defaultAddress.address}, ${defaultAddress.state}, ${defaultAddress.country}`}
              user={userDetails}
            />
          )}
        </Flex>
      )}
    </Box>
  );
};

export default UserDetails;
