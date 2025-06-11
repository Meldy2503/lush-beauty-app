"use client";

import { Box, CloseButton, Drawer, Flex, Icon, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbLogin2 } from "react-icons/tb";
import Button from "./ui/button";
import Logo from "./ui/logo";


const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Drawer.Root placement={"start"} size="xl" closeOnInteractOutside={false}>
      <Drawer.Trigger asChild>
        <Box display={{ base: "block", lg: "none" }}>
          <Icon as={GiHamburgerMenu} boxSize={9} cursor="pointer" />
        </Box>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg={"white"}>
            <Drawer.Body>
              <Flex
                direction="column"
                rowGap={"1rem"}
                align={"center"}
                mt="4rem"
              >
                <Logo />
                <Link
                  href={"/jobs"}
                  style={{
                    color: "black",
                    fontWeight: pathname === "/jobs" ? "bold" : "300",
                    borderBottom:
                      pathname === "/jobs" ? "2px solid #006adc" : "none",
                    marginTop: "2rem",
                  }}
                >
                  Jobs
                </Link>
                <Link
                  href={"/contact-us"}
                  style={{
                    color: "black",
                    margin: "1rem 0",
                    fontWeight: pathname === "/contact-us" ? "bold" : "300",
                    borderBottom:
                      pathname === "/contact-us" ? "2px solid #006adc" : "none",
                  }}
                >
                  Contact Us
                </Link>
                <Button
                  bg={"transparent"}
                  color={"black"}
                  fontSize={"1rem"}
                  href={"/login"}
                  hover="#fff"
                >
                  Login
                </Button>{" "}
                <Button px="1rem" href={"/signup"}>
                  <TbLogin2 />
                  Sign up
                </Button>{" "}
              </Flex>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileNav;
