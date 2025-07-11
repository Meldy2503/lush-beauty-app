"use client";

import { useGetUserAddresses } from "@/services/api/user";
import { UserAddressType } from "@/types/user";
import { Box, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import { FaDotCircle, FaRegEdit } from "react-icons/fa";
import { MdOutlineCircle } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddressModal from "./address-modal";

const ManageAddress = () => {
  const { data: userAddress, isLoading } = useGetUserAddresses();

  const defaultAddress = userAddress?.filter(
    (item: UserAddressType) => item.isDefault === true
  );

  return (
    <Box>
      <Text mb="3rem" mt="1rem">
        Add new addresses here. Orders are sent to your default delivery
        address. You can change this at any time.
      </Text>

      {isLoading ? (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Spinner my="10rem" />
        </Flex>
      ) : (
        <Flex gap="2rem" flexDir="column" w="full" mb="3rem">
          {userAddress.map((address: UserAddressType) => (
            <Flex
              key={address?.id}
              justifyContent={"space-between"}
              w="full"
              borderWidth={"1px"}
              borderColor="gray.200"
              borderRadius={"sm"}
              p="1.5rem"
              gap="2rem"
              flexDir={{ base: "column", sm: "row" }}
            >
              <HStack gap="1rem">
                {defaultAddress[0]?.id === address?.id ? (
                  <FaDotCircle size="1.8rem" />
                ) : (
                  <MdOutlineCircle size="1.8rem" />
                )}
                <Text>
                  {" "}
                  {`${address?.address}, ${address?.state}, ${address?.country}`}
                </Text>
              </HStack>
              <Flex
                cursor={"pointer"}
                color="yellow.100"
                gap="1rem"
                alignSelf={{ base: "flex-end", md: "center" }}
              >
                <AddressModal icon={<FaRegEdit size="2rem" />} />
                <Box
                  onClick={() => {
                    alert("Are you sure you want to delete?");
                  }}
                >
                  <RiDeleteBin6Line size="2rem" color="red" />
                </Box>
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
      <HStack justifyContent={"center"}>
        <AddressModal />
      </HStack>
    </Box>
  );
};

export default ManageAddress;
