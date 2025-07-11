"use client";

import { Box, CloseButton, Drawer, Flex, Icon, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../shared/logo";
import Button from "../shared/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface MobileNavProps {
  color?: string;
  bg?: string;
}

const MobileNav = ({ color, bg }: MobileNavProps) => {
  const pathname = usePathname();
  const token = useSelector((state: RootState) => state.auth.accessToken);

  return (
    <Drawer.Root placement={"start"} size="xl">
      <Drawer.Trigger asChild>
        <Box display={{ base: "block", lg: "none" }}>
          <Icon
            as={GiHamburgerMenu}
            boxSize={9}
            cursor="pointer"
            color={color ?? "white"}
          />
        </Box>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg={bg ?? "rgb(0,0,0,0.9)"}>
            <Drawer.Body>
              <Flex
                direction="column"
                rowGap={"1rem"}
                align={"center"}
                mt="5rem"
                fontSize={"1.6rem"}
              >
                <Logo />
                <Flex
                  align={"center"}
                  gap="4rem"
                  flexDirection={"column"}
                  mt="5rem"
                  mb="3rem"
                >
                  <Link
                    href={"/about-us"}
                    style={{
                      color: color ?? "white",
                      fontWeight: pathname === "/about-us" ? "500" : "400",
                      borderBottom:
                        pathname === "/about-us" ? "2px solid #DB9935" : "none",
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href={"/services"}
                    style={{
                      color: color ?? "white",
                      fontWeight: pathname === "/services" ? "500" : "400",
                      borderBottom:
                        pathname === "/services" ? "2px solid #DB9935" : "none",
                    }}
                  >
                    Services
                  </Link>
                  <Link
                    href={"/shop"}
                    style={{
                      color: color ?? "white",
                      fontWeight: pathname === "/services" ? "500" : "400",
                      borderBottom:
                        pathname === "/shop" ? "2px solid #DB9935" : "none",
                    }}
                  >
                    Shop
                  </Link>
                </Flex>
                {token && (
                  <Button
                    w="100%"
                    href="/login"
                    borderColor="yellow.150"
                    borderWidth="1px"
                  >
                    {" "}
                    Sign in
                  </Button>
                )}
                {!pathname.includes("book-appointment") && (
                  <Box mt="2rem" display={{ base: "block", sm: "none" }}>
                    <Button
                      px="3rem"
                      href={token ? "/book-appointment" : "/login"}
                      bg="yellow.150"
                    >
                      Book Appointment
                    </Button>
                  </Box>
                )}
              </Flex>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild bg="gray.250">
              <CloseButton size="2xl" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileNav;
