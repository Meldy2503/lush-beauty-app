"use client";

import { Box, Flex, HStack, RadioGroup, Text } from "@chakra-ui/react";
import AddressModal from "./address-modal";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageAddress = () => {
  return (
    <Box>
      <Text mb="3rem" mt="1rem">
        Add new addresses here. Orders are sent to your default delivery
        address. You can change this at any time.
      </Text>

      <RadioGroup.Root defaultValue="1" mb="3rem">
        <Flex gap="2rem" flexDir="column" w="full">
          {items.map((item) => (
            <Flex
              key={item.value}
              justifyContent={"space-between"}
              w="full"
              borderWidth={"1px"}
              borderColor="gray.200"
              borderRadius={"sm"}
              p="1.5rem"
            >
              <RadioGroup.Item value={item.value} gap="1.5rem">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator scale="1.2" />
                <RadioGroup.ItemText
                  fontSize={{ base: "1.5rem", md: "1.6rem" }}
                >
                  {item.label}
                </RadioGroup.ItemText>
              </RadioGroup.Item>
              <Flex cursor={"pointer"} color="yellow.100" gap="1.5rem">
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
      </RadioGroup.Root>
      <HStack justifyContent={"center"}>
        <AddressModal />
      </HStack>
    </Box>
  );
};

export default ManageAddress;

const items = [
  { label: "25 Beverly St. London, UK", value: "1" },
  { label: "25 Beverly St. Manchester, UK", value: "2" },
];
