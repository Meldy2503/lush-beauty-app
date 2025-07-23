"use client";

import {
  useDeleteCartItem,
  useGetCartItems,
  useUpdateItemQuantityMutation,
} from "@/services/api/cart";
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
import { usePathname, useRouter } from "next/navigation";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Button from "../shared/button";
import EmptyCart from "../shared/empty-cart";
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRedirectToOrderSummary } from "@/store/slices/cart-slice";

interface CartProps {
  children?: React.ReactNode;
}

const Cart = ({ children }: CartProps) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const updateItemQuantityMutation = useUpdateItemQuantityMutation();
  const [updatingItemIds, setUpdatingItemIds] = useState<Set<string>>(
    new Set()
  );

  const { mutateAsync: updateItemQuantity } = updateItemQuantityMutation;
  const existingGuestId = useSelector((state: RootState) => state.cart.guestId);
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);

  const loggedInUser = useSelector((state: RootState) => state.auth.user);
  const storedCartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  );
  const { data: cartItems, isLoading } = useGetCartItems({
    guestId: existingGuestId,
    userId: loggedInUser?.id,
  });

  const { mutateAsync: deleteCartItem } = useDeleteCartItem();

  const totalPrice = cartItems?.reduce((acc: number, item: CartItemsType) => {
    const itemPrice = item?.productItem?.price || 0;
    const quantity = item?.quantity || 0;
    return acc + itemPrice * quantity;
  }, 0);

  const handleCartItemDelete = async (productId: string) => {
    try {
      setDeletingItemId(productId);
      const result = await deleteCartItem({
        productId,
        guestId: existingGuestId,
        userId: loggedInUser?.id,
      });

      if (result) {
        toast.success("Item Deleted Successfully!");
      }
    } catch (error) {
      console.error("Delete Cart Item error:", error);
    } finally {
      setDeletingItemId(null);
    }
  };

  const handleCheckout = () => {
    if (!loggedInUser) {
      dispatch(setRedirectToOrderSummary(true));
      router.push("/login");
    } else {
      router.push("/shop/order-summary");
    }
  };

  const handleUpdateItemQuantity = async (
    productId: string,
    newQuantity: number
  ) => {
    try {
      // Add item to updating set
      setUpdatingItemIds((prev) => new Set(prev).add(productId));

      //Add artificial delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 200)); // 300ms delay

      await updateItemQuantity({
        productId,
        quantity: newQuantity,
        ...(existingGuestId && { guestId: existingGuestId }),
        ...(loggedInUser?.id && { userId: loggedInUser?.id }),
      });
    } catch (error) {
      console.error("Update Cart Item quantity error:", error);
    } finally {
      // Remove item from updating set
      setUpdatingItemIds((prev) => {
        const updated = new Set(prev);
        updated.delete(productId);
        return updated;
      });
    }
  };

  console.log(cartItems, "cartItems");

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
              {cartItems?.length ?? 0}
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
                Cart: {cartItems?.length || storedCartItems?.length || 0} Items
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p="2rem">
              {isLoading ? (
                <Flex alignItems="center" justifyContent="center">
                  <Spinner my="20rem" />
                </Flex>
              ) : !cartItems || cartItems?.length === 0 ? (
                <EmptyCart />
              ) : (
                cartItems &&
                cartItems?.map((item: CartItemsType) => {
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
                          {deletingItemId === item?.id ? (
                            <Spinner />
                          ) : (
                            <Box
                              onClick={() =>
                                handleCartItemDelete(item?.id ?? "")
                              }
                              cursor="pointer"
                            >
                              <RiDeleteBin6Line color="red" size={20} />
                            </Box>
                          )}
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
                              <Box
                                cursor={"pointer"}
                                onClick={() => {
                                  const currentQty = item?.quantity ?? 1;
                                  const newQty =
                                    currentQty === 1 ? 1 : currentQty - 1;
                                  if (newQty >= 1) {
                                    handleUpdateItemQuantity(
                                      item?.id ?? "",
                                      newQty
                                    );
                                  }
                                }}
                              >
                                <FiMinus />
                              </Box>
                              {updatingItemIds.has(item?.id ?? "") ? (
                                <Spinner />
                              ) : (
                                <Text>{item?.quantity}</Text>
                              )}
                              <Box
                                cursor={"pointer"}
                                onClick={() => {
                                  const currentQty = item?.quantity ?? 1;
                                  const newQty = currentQty + 1;
                                  if (newQty >= 1) {
                                    handleUpdateItemQuantity(
                                      item?.id ?? "",
                                      newQty
                                    );
                                  }
                                }}
                              >
                                {" "}
                                <FiPlus />
                              </Box>
                            </Flex>
                          </Box>
                          <Flex
                            alignItems={"flex-end"}
                            flexDir={"column"}
                            gap="1rem"
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

            {cartItems && cartItems?.length !== 0 && (
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
                    {pathname !== "/shop/order-summary" &&
                    pathname !== "/shop/order-confirmation" ? (
                      <Button
                        w="100%"
                        px={{ base: "3rem", sm: "5rem" }}
                        onClick={handleCheckout}
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
                    {pathname === "/shop" ? (
                      <Drawer.ActionTrigger asChild>
                        <Button
                          bg="transparent"
                          borderWidth="1px"
                          borderColor="black"
                          color="black"
                          w="100%"
                          px={{ base: "1rem", sm: "5rem" }}
                        >
                          Add More Items
                        </Button>
                      </Drawer.ActionTrigger>
                    ) : (
                      <Button
                        href="/shop"
                        bg="transparent"
                        borderWidth="1px"
                        borderColor="black"
                        color="black"
                        w="100%"
                        px={{ base: "1rem", sm: "5rem" }}
                      >
                        Add More Items
                      </Button>
                    )}
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
