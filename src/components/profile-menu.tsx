import { Box, Flex, Menu, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProfileMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <Menu.Root
      open={isProfileOpen}
      onOpenChange={(details) => setIsProfileOpen(details.open)}
    >
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
          <Menu.Content>
            <Menu.Item value="profile">My Profile</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item>
            <Menu.Item value="orders">My Orders</Menu.Item>
            <Menu.Item value="logout">Logout</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default ProfileMenu;
