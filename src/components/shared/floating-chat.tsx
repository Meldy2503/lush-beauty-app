"use client";

import { FaWhatsapp } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { Flex } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

export default function FloatingChat() {
  const phoneNumber = "+447881172787";
  const whatsappNumber = "447881172787";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <Flex
      direction="column"
      gap={3}
      position="fixed"
      right={{ base: "1rem", md: "2rem" }}
      bottom={{ base: "1rem", md: "2rem" }}
      zIndex={100}
    >
      {/* WhatsApp Chat Button */}
      <Tooltip
        content="Chat on WhatsApp"
        showArrow
        positioning={{ placement: "right-end" }}
        contentProps={{
          fontSize: "1.5rem",
          backgroundColor: "black",
          color: "white",
          padding: "1.3rem",
        }}
      >
        <Flex
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          color="white"
          bg="green.500"
          _hover={{ bg: "green.600", transform: "scale(1.05)", shadow: "xl" }}
          shadow="lg"
          rounded="full"
          align="center"
          justify="center"
          h={{ base: "4.5rem", md: "6rem" }}
          w={{ base: "4.5rem", md: "6rem" }}
          border="1px solid white"
          transition="all 0.3s"
          fontSize={"2rem"}
        >
          <FaWhatsapp size={32} />
        </Flex>
      </Tooltip>

      {/* Phone Button */}
      <Tooltip
        content="Call Us Now"
        showArrow
        positioning={{ placement: "right-end" }}
        contentProps={{
          fontSize: "1.5rem",
          backgroundColor: "black",
          color: "white",
          padding: "1.3rem",
        }}
      >
        <Flex
          onClick={handlePhoneClick}
          aria-label="Call Us"
          color="white"
          bg="yellow.100"
          _hover={{ bg: "yellow.150", transform: "scale(1.05)", shadow: "xl" }}
          shadow="lg"
          rounded="full"
          align="center"
          justify="center"
          w={{ base: "4.5rem", md: "5.5rem" }}
          h={{ base: "4.5rem", md: "5.5rem" }}
          border="1px solid white"
          p=".5rem"
          transition="all 0.3s"
        >
          <BiPhone size={32} />
        </Flex>
      </Tooltip>
    </Flex>
  );
}
