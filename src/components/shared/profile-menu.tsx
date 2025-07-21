import { RootState } from "@/store";
import { logout } from "@/store/slices/auth-slice";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  Portal,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { CiClock2, CiDeliveryTruck } from "react-icons/ci";
import { IoPersonCircleSharp, IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Button from "./button";
import { usePathname } from "next/navigation";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const loggedInUser = useSelector((state: RootState) => state.auth.user);
  const name = loggedInUser?.fullName;
  const userImg = loggedInUser?.imageUrl;
  const firstName = name?.split(" ")[0];


  console.log(loggedInUser, "loggedInUser");

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

          <Text>{loggedInUser ? `Hi ${firstName}` : "Sign in"}</Text>
          <Box mt=".5rem">
            <MdKeyboardArrowDown size="2.3rem" />
          </Box>
        </Flex>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content p="3rem 2rem" w="30rem">
            {loggedInUser ? (
              <HStack
                px="1.2rem"
                pb="1rem"
                gap="1rem"
                borderBottomWidth={"2px"}
                borderBottomColor={"gray.250"}
              >
                <Avatar.Root size="2xl">
                  <Avatar.Fallback name={name} />
                  <Avatar.Image src={userImg} />
                </Avatar.Root>
                <Text fontWeight={"600"}>{name}</Text>
              </HStack>
            ) : (
              <Menu.Item value="sign in">
                <Box w="full" bg="black">
                  <Button
                    w="100%"
                    href={`/login?redirect=${encodeURIComponent(pathname)}`}
                  >
                    {" "}
                    Sign in
                  </Button>
                </Box>
              </Menu.Item>
            )}
            <Menu.Item
              value="settings"
              fontSize={"1.6rem"}
              p="1.2rem"
              mt="1rem"
            >
              {" "}
              <Link href={token ? "/personal-details" : "/login"}>
                <HStack gap="1rem">
                  <IoPersonOutline size="2rem" />
                  <Text>Personal Account</Text>
                </HStack>
              </Link>
            </Menu.Item>
            <Menu.Item value="orders" fontSize={"1.6rem"} p="1.2rem">
              <Link href={token ? "/orders" : "/login"}>
                <HStack gap="1rem">
                  <CiDeliveryTruck size="2.5rem" />
                  <Text> My Orders</Text>
                </HStack>
              </Link>
            </Menu.Item>
            <Menu.Item value="appointments" fontSize={"1.6rem"} p="1.2rem">
              <Link href={token ? "/appointments" : "/login"}>
                <HStack gap="1rem">
                  <CiClock2 size="2.1rem" />
                  <Text> My Appointments</Text>
                </HStack>
              </Link>
            </Menu.Item>
            {token && (
              <Menu.Item
                value="logout"
                fontSize={"1.6rem"}
                p="1.2rem"
                color="red.600"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <HStack gap="1rem">
                  <MdLogout />
                  <Text>Sign out</Text>
                </HStack>
              </Menu.Item>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default ProfileMenu;
