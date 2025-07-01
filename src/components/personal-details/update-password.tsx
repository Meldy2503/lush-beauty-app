"use client";

import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";
import Button from "../ui/button";

const UpdatePassword = () => {
  return (
    <Box>
      <Text mb="3rem" mt='1rem' textAlign={'center'}>
        You can update your password at any time below.
      </Text>

      <Box
        borderWidth={"1px"}
        borderColor="gray.200"
        borderRadius={"sm"}
        w={{ base: "full", md: "80%", lg: "60%", xl: "50%" }}
        p={{ base: "1rem", sm: "2rem", lg: "3rem", xl: "4rem" }}
        mx="auto"
      >
        <form>
          <Stack gap="1.5rem" mb="3rem">
            <InputElement type="password" placeholder="Current password*" />
            <InputElement type="password" placeholder="New password*" />
            <InputElement type="password" placeholder="Confirm new password*" />
          </Stack>
          <Button w="full">Update</Button>
        </form>
      </Box>
    </Box>
  );
};

export default UpdatePassword;
