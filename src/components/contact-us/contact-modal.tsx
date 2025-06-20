"use client";

import {
  Box,
  CloseButton,
  Dialog,
  Flex,
  Heading,
  Portal,
  Text,
} from "@chakra-ui/react";
import Button from "../ui/button";
import ContactForm from "./contact-form";
import { useState } from "react";
import contactBg from "../../assets/images/contact-bg.webp";

const ContactUsModal = () => {
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
          fontFamily={"lato"}
          color="#000"
          hover="transparent"
          fontWeight="300"
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
                <Flex
                  w={{ base: "100%", md: "35%" }}
                  flexDir={"column"}
                  gap="2rem"
                >
                  <Box>
                    <Heading
                      as="h3"
                      fontFamily="playfair"
                      mb={3}
                      fontWeight={"600"}
                      fontSize="1.7rem"
                    >
                      Working Hours{" "}
                    </Heading>{" "}
                    <Text lineHeight={1.4}>
                      Monday – Saturday: 9:00 AM – 8:00 PM
                    </Text>
                    <Text pt="1rem">Sunday: Closed</Text>
                  </Box>
                  <Box>
                    <Heading
                      as="h3"
                      fontFamily="playfair"
                      mb={3}
                      fontWeight={"600"}
                      fontSize="1.7rem"
                    >
                      Location{" "}
                    </Heading>{" "}
                    <Text lineHeight={1.4}>
                      125 Kingsway, London WC2B 6NH, United Kingdom
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontFamily="playfair"
                      mb={3}
                      fontWeight={"600"}
                      fontSize="1.7rem"
                    >
                      Email{" "}
                    </Heading>{" "}
                    <Text>hello@lushluxe.co.uk</Text>
                  </Box>
                  <Box>
                    <Heading
                      as="h3"
                      fontFamily="playfair"
                      mb={3}
                      fontWeight={"600"}
                      fontSize="1.7rem"
                    >
                      Call Us{" "}
                    </Heading>{" "}
                    <Text>+44 20 1234 5678</Text>
                  </Box>
                </Flex>
              </Flex>
            </Dialog.Body>
            <Dialog.Footer mt="5rem">
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap="1.5rem"
                w="full"
              >
                <Button
                  borderWidth="2px"
                  borderColor="black"
                  w={{ base: "100%", sm: "fit-content" }}
                >
                  Send Message
                </Button>
                <Dialog.ActionTrigger asChild>
                  <Button
                    bg="transparent"
                    borderWidth="1px"
                    borderColor="black"
                    color="black"
                    w={{ base: "100%", sm: "fit-content" }}
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
