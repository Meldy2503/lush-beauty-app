"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUsModal from "./contact-us/contact-modal";
import MobileNav from "./mobile-nav";
import ProfileMenu from "./profile-menu";
import Cart from "./shop-page/cart";
import Button from "./ui/button";
import Logo from "./ui/logo";

interface NavbarProps {
  display?: string;
  top?: string;
}

const Navbar = ({ display, top }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <>
      <Box
        w="100%"
        bg="yellow.100"
        position="fixed"
        top="0"
        zIndex={500}
        display={display}
      >
        <Flex
          color="white"
          align={"center"}
          justify={{ base: "flex-end", sm: "space-between" }}
          width="90%"
          maxW={"1200px"}
          mx="auto"
          py="1rem"
        >
          <Text
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={"1.6rem"}
            fontFamily={"playfair"}
            textTransform={"uppercase"}
            display={{ base: "none", sm: "block" }}
          >
            Redefine Your Beauty
          </Text>
          <HStack gap="2rem">
            <Cart />
            {pathname !== "/book-appointment" && (
              <Button px="2rem" py=".5rem" href="/book-appointment">
                Book Now
              </Button>
            )}
          </HStack>
        </Flex>
      </Box>
      <Box
        w="100%"
        py="1rem"
        position={"fixed"}
        top={top ?? "5.4rem"}
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
          <MobileNav />
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
                fontWeight: pathname === "/about-us" ? "500" : "300",
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
                fontWeight: pathname === "/services" ? "500" : "300",
                borderBottom:
                  pathname === "/services" ? "2px solid #DB9935" : "none",
              }}
            >
              Services
            </Link>
            <ContactUsModal />
            <Link
              href={"/shop"}
              style={{
                color: "black",
                fontWeight: pathname === "/shop" ? "500" : "300",
                borderBottom:
                  pathname === "/shop" ? "2px solid #DB9935" : "none",
              }}
            >
              Shop
            </Link>
          </Flex>
          <ProfileMenu />
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
