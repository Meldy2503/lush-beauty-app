"use client";

import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  Grid,
  Heading,
  HStack,
  Portal,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import academy1 from "../../assets/images/academy-1.webp";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../shared/button";
import { GiShoppingBag } from "react-icons/gi";
import { usePathname } from "next/navigation";

interface CartProps {
  children?: React.ReactNode;
}

const Cart = ({ children }: CartProps) => {
  const pathname = usePathname();

  return (
    <Drawer.Root size="xl" placement={"end"} closeOnInteractOutside={false}>
      <Drawer.Trigger asChild>
        {children ?? (
          <Box position="relative" cursor="pointer">
            <GiShoppingBag style={{ fontSize: "2.8rem", color: "white" }} />
            <Flex
              position="absolute"
              top="60%"
              right="50%"
              transform="translate(50%, -50%)"
              borderRadius="50%"
              color="black"
              justifyContent="center"
              alignItems="center"
              fontSize="1.3rem"
              zIndex={1}
              pointerEvents="none"
              fontWeight={"bold"}
            >
              0
            </Flex>
          </Box>
        )}
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content fontSize={"1.6rem"} bg="gray.250">
            <Drawer.Header>
              <Drawer.Title
                bg="yellow.100"
                p="2rem"
                fontSize={"2rem"}
                color="white"
              >
                Cart: 1 Item
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p="2rem">
              <Flex
                justifyContent="space-between"
                gap="1.5rem"
                mt="3rem"
                pb="1rem"
                fontSize={"1.6rem"}
                borderBottom="1px solid #e1e5e5"
              >
                {/* Left: Image*/}
                <Box w="15rem">
                  <Image
                    src={academy1}
                    alt="beauty salon product image"
                    width={100}
                    height={100}
                  />
                </Box>

                {/* Right: Text Content */}
                <Box>
                  <Flex>
                    <Box>
                      <Heading as="h2" fontSize="1.45rem" fontFamily="playfair">
                        RECHARGABLE FACE MASK
                      </Heading>
                      <Text
                        pt="1rem"
                        w="92%"
                        fontSize={"1.2rem"}
                        lineHeight={1.4}
                        lineClamp="2"
                      >
                        USB rechargeable face mask, 7-color LED beauty
                        instrument, suitable for all Light Beige types,
                        Women&apos;s holiday gift, Mother&apos;s Day gift
                      </Text>
                    </Box>
                    <Box>
                      <RiDeleteBin6Line color="red" size={20} />
                    </Box>
                  </Flex>

                  <Flex
                    justifyContent={"space-between"}
                    mt="1rem"
                    fontSize={"1.2rem"}
                  >
                    <Box>
                      <Text mb=".6rem">Quantity*</Text>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        w="10rem"
                        border="1.5px solid orange"
                        p=".8rem"
                      >
                        <Box>
                          <FiMinus />
                        </Box>
                        <Text>1</Text>
                        <Box>
                          <FiPlus />
                        </Box>
                      </Flex>
                    </Box>
                    <Text fontWeight={"600"} fontSize={"1.7rem"}>
                      $45.00
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer bg="white" p="2rem" borderTop="1px solid #e1e5e5">
              <Flex flexDirection={"column"} w="full" gap="3rem">
                <HStack
                  justifyContent={"space-between"}
                  fontSize={"2rem"}
                  fontWeight={"bold"}
                >
                  <Text>Total</Text>
                  <Text>£58.00</Text>
                </HStack>

                <Grid
                  templateColumns={{ base: "1fr 1fr", sm: "1fr 1fr" }}
                  gap="1rem"
                  w="full"
                >
                  {pathname !== "/shop/order-summary" ? (
                    <Button
                      href="/shop/order-summary"
                      w="100%"
                      px={{ base: "3rem", sm: "5rem" }}
                    >
                      Checkout
                    </Button>
                  ) : (
                    <Drawer.ActionTrigger asChild>
                      <Button
                        w="100%"
                        px={{ base: "3rem", sm: "5rem" }}
                      >
                        Close
                      </Button>
                    </Drawer.ActionTrigger>
                  )}
                  <Button
                    href="/shop"
                    bg="transparent"
                    borderWidth="1px"
                    borderColor="black"
                    color="black"
                    w="100%"
                    px={{ base: "1rem", sm: "5rem" }}
                  >
                    Shop More
                  </Button>
                </Grid>
              </Flex>
            </Drawer.Footer>
            <Drawer.CloseTrigger bg="white" asChild>
              <CloseButton size="lg" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Cart;
