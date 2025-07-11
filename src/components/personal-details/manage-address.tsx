"use client";

import { useDeleteAddress, useGetUserAddresses } from "@/services/api/user";
import { UserAddressType } from "@/types/user";
import { Box, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import { FaDotCircle, FaRegEdit } from "react-icons/fa";
import { MdOutlineCircle } from "react-icons/md";
import AddressModal from "./address-modal";
import toast from "react-hot-toast";
import DeleteModal from "../shared/delete-modal";
import { useState } from "react";

const ManageAddress = () => {
  const { data: userAddress, isLoading } = useGetUserAddresses();
  const { mutateAsync: deleteAddress, isPending: isDeleteAddressLoading } =
    useDeleteAddress();
  const [isOpen, setIsOpen] = useState(false);

  const defaultAddress = userAddress?.filter(
    (item: UserAddressType) => item.isDefault === true
  );

  const handleDeleteAddress = async ({ id }: { id: string }) => {
    try {
      const result = await deleteAddress(id);

      if (result) {
        toast.success("Address Deleted Successfully!");
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Delete Address error:", error);
    }
  };

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
                <DeleteModal
                  isLoading={isDeleteAddressLoading}
                  open={isOpen}
                  onOpenChange={(e) => setIsOpen(e.open)}
                  onClick={() => handleDeleteAddress({ id: address.id })}
                  text="This action cannot be undone. This will permanently delete the selected address from your dashboard."
                />
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
