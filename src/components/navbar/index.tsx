"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUsModal from "../contact-us/contact-modal";
import Cart from "../shop-page/cart";
import Button from "../ui/button";
import Logo from "../ui/logo";
import ProfileMenu from "../ui/profile-menu";
import SocialMediaIcons from "../ui/social-media-icons";
import MobileNav from "./mobile-nav";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface NavbarProps {
  display?: string;
  top?: string;
  bg?: string;
  color?: string;
}

const Navbar = ({ display, top, bg, color }: NavbarProps) => {
  const pathname = usePathname();
  const token = useSelector((state: RootState) => state.auth.accessToken);

  return (
    <>
      <Box
        w="100%"
        bg="yellow.150"
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
          <Box display={{ base: "none", sm: "block" }}>
            <SocialMediaIcons boxSize="2rem" />
          </Box>
          <HStack gap="1.5rem">
            <Cart />
            <ProfileMenu />
          </HStack>
        </Flex>
      </Box>
      <Box
        w="100%"
        py="1.2rem"
        position={"fixed"}
        top={top ?? "4.8rem"}
        bg={bg ?? "rgb(0,0,0,0.8)"}
        color={color ?? "white"}
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
            <ContactUsModal
              btn={
                <Text cursor="pointer" color={color}>
                  Contact Us{" "}
                </Text>
              }
            />
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

          {!pathname.includes("book-appointment") && (
            <Box display={{ base: "none", sm: "block" }}>
              <Button
                px="2rem"
                py="1.9rem"
                href={token ? "/book-appointment" : "/login"}
                borderColor="yellow.150"
                borderWidth="1.5px"
              >
                Book Appointment
              </Button>
            </Box>
          )}
          <MobileNav color={color} bg={bg} />
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
