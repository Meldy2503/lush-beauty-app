"use client";

import {
  Box,
  CloseButton,
  Dialog,
  Flex,
  Heading,
  Portal
} from "@chakra-ui/react";
import { useState } from "react";
import contactBg from "../../assets/images/contact-bg.webp";
import Button from "../ui/button";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

interface ContactUsModalProps {
  color?: string;
}

const ContactUsModal = ({ color }: ContactUsModalProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Dialog.Root
      lazyMount
      motionPreset="slide-in-bottom"
      placement={"center"}
      scrollBehavior="inside"
      closeOnInteractOutside={false}
    >
      <Dialog.Trigger asChild>
        <Button
          bg="transparent"
          color={color ?? "white"}
          hover="transparent"
          fontWeight="400"
          px="0"
          py="0"
          onClick={() => setIsContactModalOpen(true)}
        >
          Contact Us
        </Button>
      </Dialog.Trigger>
      <Portal>
        {isContactModalOpen && (
          <Box
            backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${contactBg.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            height="100vh"
            width="100vw"
            position="fixed"
            top={"0"}
            left={0}
            zIndex={1000}
          />
        )}

        <Dialog.Positioner>
          <Dialog.Content
            bg="gray.250"
            maxW="1000px"
            w="full"
            p={{ base: "2rem", md: "5rem" }}
          >
            <Dialog.Header>
              <Dialog.Title fontSize="2rem" fontWeight="bold" mb="2rem">
                Contact Us
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body h="100%" fontSize="1.6rem">
              <Heading
                as="h2"
                fontSize="2rem"
                fontFamily="playfair"
                fontWeight="600"
                lineHeight={1.4}
                my="3rem"
              >
                LET&apos;S TALK
              </Heading>{" "}
              <Flex
                justifyContent={"space-between"}
                gapX="1.5rem"
                gapY={"5rem"}
                flexDir={{ base: "column", md: "row" }}
              >
                {/* left form content */}
                <Box w={{ base: "100%", md: "60%" }}>
                  <ContactForm />
                </Box>
                {/* right content */}
                <ContactDetails />
              </Flex>
            </Dialog.Body>
            <Dialog.Footer pt= {{ base: "3rem", sm: "4rem" }}>
              <Flex
                gap="1rem"
                w="full"
              >
                <Button
                  borderWidth="2px"
                  borderColor="black"
                  px={{base: "2rem", sm: "5rem"}}
                  py='2.1rem'
                >
                  Send Message
                </Button> 
                <Dialog.ActionTrigger asChild>
                  <Button
                    bg="transparent"
                    borderWidth="1px"
                    borderColor="black"
                    color="black"
                    onClick={() => setIsContactModalOpen(false)}
                    
                  >
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              </Flex>
            </Dialog.Footer>
            <Dialog.CloseTrigger
              asChild
              bg="gray.200"
              onClick={() => setIsContactModalOpen(false)}
            >
              <CloseButton size={"2xl"} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ContactUsModal;
