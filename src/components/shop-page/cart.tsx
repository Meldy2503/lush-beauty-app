"use client";

import { useGetCartItems } from "@/services/api/cart";
import { RootState } from "@/store";
import { CartItemsType } from "@/types/cart";
import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  Grid,
  Heading,
  HStack,
  Portal,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Button from "../shared/button";
import EmptyCart from "../shared/empty-cart";

interface CartProps {
  children?: React.ReactNode;
}

const Cart = ({ children }: CartProps) => {
  const pathname = usePathname();
  const existingGuestId = useSelector((state: RootState) => state.cart.guestId);
  const loggedInUser = useSelector((state: RootState) => state.auth.user);
  const id = loggedInUser?.id ?? existingGuestId;
  const { data: items, isLoading } = useGetCartItems(id);

  const totalPrice = items?.reduce((acc: number, item: CartItemsType) => {
    const itemPrice = item?.productItem?.price || 0;
    const quantity = item?.quantity || 0;
    return acc + itemPrice * quantity;
  }, 0);

  console.log(items, "items");

  return (
    <Drawer.Root size="xl" placement={"end"}>
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
              {items?.length ?? 0}
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
                Cart: {items?.length ?? 0} Items
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p="2rem">
              {isLoading ? (
                <Flex alignItems="center" justifyContent="center">
                  <Spinner my="20rem" />
                </Flex>
              ) : !items ? (
                <EmptyCart />
              ) : (
                items &&
                items.map((item: CartItemsType) => {
                  return (
                    <Flex
                      key={item?.id}
                      justifyContent="space-between"
                      gap="1.5rem"
                      mt="3rem"
                      pb="1rem"
                      fontSize={"1.6rem"}
                      borderBottom="1px solid #e1e5e5"
                    >
                      {/* Left: Image*/}
                      {item?.productItem?.imageUrl && (
                        <Box w="15rem">
                          <Image
                            src={item?.productItem?.imageUrl}
                            alt="beauty salon product image"
                            width={100}
                            height={100}
                          />
                        </Box>
                      )}

                      {/* Right: Text Content */}
                      <Box>
                        <Flex>
                          <Box>
                            <Heading
                              as="h2"
                              fontSize="1.45rem"
                              fontFamily="playfair"
                              textTransform={"uppercase"}
                            >
                              {item?.productItem?.name}
                            </Heading>
                            <Text
                              pt="1rem"
                              w="92%"
                              fontSize={"1.35rem"}
                              lineHeight={1.4}
                              lineClamp="2"
                            >
                              {item?.productItem?.description}
                            </Text>
                          </Box>
                          <Box>
                            <RiDeleteBin6Line color="red" size={20} />
                          </Box>
                        </Flex>

                        <Flex
                          justifyContent={"space-between"}
                          mt="1rem"
                          fontSize={"1.35rem"}
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
                              <Text>{item?.quantity}</Text>
                              <Box>
                                <FiPlus />
                              </Box>
                            </Flex>
                          </Box>
                          <Flex
                            alignItems={"flex-end"}
                            flexDir={"column"}
                            gap=".5rem"
                          >
                            {item?.productItem?.price && item?.quantity && (
                              <Text fontWeight={"600"} fontSize={"1.8rem"}>
                                £{item?.productItem?.price * item?.quantity}
                              </Text>
                            )}
                            <Text color="yellow.100">
                              {item?.productItem?.price}
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                  );
                })
              )}
            </Drawer.Body>

            {items && (
              <Drawer.Footer bg="white" p="2rem" borderTop="1px solid #e1e5e5">
                <Flex flexDirection={"column"} w="full" gap="3rem">
                  <HStack
                    justifyContent={"space-between"}
                    fontSize={"2rem"}
                    fontWeight={"bold"}
                  >
                    <Text>Total</Text>
                    <Text>£{totalPrice?.toFixed(2)}</Text>
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
                        <Button w="100%" px={{ base: "3rem", sm: "5rem" }}>
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
            )}
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
