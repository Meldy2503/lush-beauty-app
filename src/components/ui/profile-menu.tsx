import { Box, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import Button from "./button";
import Link from "next/link";
import { IoPersonCircleSharp } from "react-icons/io5";

const ProfileMenu = () => {
  return (
    <Menu.Root size="md">
      <Menu.Trigger asChild>
        <Flex
          gap=".7rem"
          alignItems={"center"}
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
        >
          <IoPersonCircleSharp size="2.5rem" />

          <Text>Hi Emelder</Text>
          <Box mt=".5rem">
            <MdKeyboardArrowDown size="2.3rem" />
          </Box>
        </Flex>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content p="2rem">
            <Menu.Item value="sign in">
              <Button w="100%" href="/login">
                {" "}
                Sign in
              </Button>
            </Menu.Item>
            <Menu.Item
              value="settings"
              fontSize={"1.6rem"}
              p="1.2rem"
              mt="1rem"
            >
              <Link href={"/user-details"}>Personal Account</Link>
            </Menu.Item>
            <Menu.Item value="orders" fontSize={"1.6rem"} p="1.2rem">
              <Link href={"/orders"}> My Orders</Link>
            </Menu.Item>
            <Menu.Item value="appointments" fontSize={"1.6rem"} p="1.2rem">
              <Link href={"/appointments"}> My Appointments</Link>
            </Menu.Item>
            <Menu.Item
              value="logout"
              fontSize={"1.6rem"}
              p="1.2rem"
              color="red.600"
            >
              <HStack gap="1rem">
                <MdLogout />
                <Text>Sign out</Text>
              </HStack>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default ProfileMenu;
