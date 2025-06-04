"use client";

import { Box, Flex, Icon, Drawer, Portal, CloseButton } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { useState } from "react";
import Button from "./button";
import { TbLogin2 } from "react-icons/tb";
import Logo from "./logo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Box
      w="100%"
      py="1rem"
      position={"fixed"}
      top={"0px"}
      bg={"white"}
      color={"black"}
      zIndex={500}
    >
      <Flex
        width="90%"
        maxW={"1200px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="black"
      >
        <Logo />

        <Flex
          align={"center"}
          gap="4rem"
          display={{ base: "none", lg: "flex" }}
        >
          <Link
            href={"/jobs"}
            style={{
              color: "#000",
              fontWeight: pathname === "/about-us" ? "bold" : "300",
              borderBottom:
                pathname === "/about-us" ? "2px solid #006adc" : "none",
            }}
          >
            About Us
          </Link>
          <Link
            href={"/jobs"}
            style={{
              color: "#000",
              fontWeight: pathname === "/services" ? "bold" : "300",
              borderBottom:
                pathname === "/services" ? "2px solid #006adc" : "none",
            }}
          >
            Services
          </Link>
          <Link
            href={"/contact-us"}
            style={{
              color: "black",
              fontWeight: pathname === "/contact-us" ? "bold" : "300",
              borderBottom:
                pathname === "/contact-us" ? "2px solid #006adc" : "none",
            }}
          >
            Contact Us
          </Link>
          <Link
            href={"/contact-us"}
            style={{
              color: "black",
              fontWeight: pathname === "/contact-us" ? "bold" : "300",
              borderBottom:
                pathname === "/contact-us" ? "2px solid #006adc" : "none",
            }}
          >
            Store
          </Link>
        </Flex>
        <Flex align={"center"} gap="2rem">
          <Box position="relative">
            <GiShoppingBag style={{ fontSize: "3rem" }} />
            <Flex
              position="absolute"
              top="60%"
              right="50%"
              transform="translate(50%, -50%)"
              borderRadius="50%"
              color="white"
              justifyContent="center"
              alignItems="center"
              fontSize="1.3rem"
              zIndex={1}
              pointerEvents="none"
            >
              0
            </Flex>
          </Box>

          <Button>Book Now</Button>
        </Flex>

        <Box
          onClick={() => setOpen(!open)}
          display={{ base: "block", lg: "none" }}
        >
          <Icon
            as={open ? AiOutlineClose : GiHamburgerMenu}
            boxSize={7}
            cursor={"pointer"}
          />
        </Box>
      </Flex>

      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
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
                        pathname === "/contact-us"
                          ? "2px solid #006adc"
                          : "none",
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
                    mb="1rem"
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
    </Box>
  );
};

export default Navbar;
