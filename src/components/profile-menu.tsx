import { Box, Flex, Menu, Portal, Text } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "./ui/button";

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
          <BsPerson />
          <Text>Account</Text>
          <Box mt=".5rem">
            <MdKeyboardArrowDown />
          </Box>
        </Flex>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content w="22rem" p="2rem">
            <Menu.Item value="sign in" >
              <Button w='100%' href='/login'> Sign in</Button>
            </Menu.Item>
            <Menu.Item value="settings" fontSize={"1.6rem"} p="1.2rem" mt='1rem'>
              Settings
            </Menu.Item>
            <Menu.Item value="orders" fontSize={"1.6rem"} p="1.2rem">
              My Orders
            </Menu.Item>
            <Menu.Item value="logout" fontSize={"1.6rem"} p="1.2rem">
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default ProfileMenu;
