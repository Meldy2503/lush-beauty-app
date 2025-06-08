"use client";

import {
  Box,
  Flex,
  Icon,
//   DrawerRoot,
//   DrawerBackdrop,
//   DrawerPositioner,
//   DrawerContent,
//   DrawerCloseTrigger,
//   DrawerBody,
  CloseButton,
  Text,
  Drawer,
  Portal,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { useState } from "react";
import Button from "./button";
import { TbLogin2 } from "react-icons/tb";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import ContactUsModal from "./contact-us/contact-modal";
// import { useModal } from "./ui/provider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   const { openContactModal } = useModal();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
    // const openContactModal = () => setIsContactModalOpen(true);
    // const closeContactModal = () => setIsContactModalOpen(false);


  const pathname = usePathname();

  return (
    <>
      <Flex
        w="100%"
        bg="yellow.100"
        color="white"
        position="fixed"
        top="0"
        zIndex={500}
        align={"center"}
        justify={"center"}
        py="3rem"
        h="6rem"
      >
        <Text textAlign={"center"} fontWeight={"600"} fontFamily={"allura"}>
          Lush & Luxe: Discover your inner beauty
        </Text>
      </Flex>
      <Box
        w="100%"
        py="1rem"
        position={"fixed"}
        top={"6rem"}
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
              href={"/about-us"}
              style={{
                color: "#000",
                fontWeight: pathname === "/about-us" ? "bold" : "300",
                borderBottom:
                  pathname === "/about-us" ? "2px solid #DB9935" : "none",
              }}
            >
              About Us
            </Link>
            <Link
              href={"/services"}
              style={{
                color: "#000",
                fontWeight: pathname === "/services" ? "bold" : "300",
                borderBottom:
                  pathname === "/services" ? "2px solid #DB9935" : "none",
              }}
            >
              Services
            </Link>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              bg="transparent"
              fontFamily={"lato"}
              color="#000"
              hover='transparent'
              
              px="0"
             
            >
              Contact Us
            </Button>
            <Link
              href={"/shop"}
              style={{
                color: "black",
                fontWeight: pathname === "/shop" ? "bold" : "300",
                borderBottom:
                  pathname === "/shop" ? "2px solid #DB9935" : "none",
              }}
            >
              Shop
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
              boxSize={20}
              cursor={"pointer"}
            />
          </Box>
        </Flex>

        <ContactUsModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

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
        {/* <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerPositioner>
            <DrawerContent bg="white" p={4}>
              <DrawerCloseTrigger asChild>
                <CloseButton size="sm" />
              </DrawerCloseTrigger>
              <DrawerBody>
                <Flex direction="column" rowGap="1rem" align="center" mt="4rem">
                  <Logo />
                  <Link
                    href="/jobs"
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
                    href="/contact-us"
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
                    bg="transparent"
                    color="black"
                    fontSize="1rem"
                    href="/login"
                    hover="#fff"
                    mb="1rem"
                  >
                    Login
                  </Button>
                  <Button px="1rem" href="/signup">
                    <TbLogin2 />
                    Sign up
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </DrawerRoot> */}
      </Box>
    </>
  );
};

export default Navbar;
