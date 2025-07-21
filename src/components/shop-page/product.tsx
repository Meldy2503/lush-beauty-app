"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../shared/button";
import Wrapper from "../shared/wrapper";
import Cart from "./cart";
import { GoBack } from "../shared/go-back";
import { useParams } from "next/navigation";
import { useAddToCartMutation, useGetProductById } from "@/services/api/cart";
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addCartItems, setGuestId } from "@/store/slices/cart-slice";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { "product-id": id } = params;
  const [itemQuantity, setItemQuantity] = useState(1);
  const { data: product, isLoading } = useGetProductById(id as string);
  const addToCartMutation = useAddToCartMutation();
  const loggedInUser = useSelector((state: RootState) => state.auth.user);
  const existingGuestId = useSelector((state: RootState) => state.cart.guestId);

  const { mutateAsync: addToCart } = addToCartMutation;

  const handleAddTocart = async () => {
    let guestId: string;

    if (existingGuestId) {
      guestId = existingGuestId;
    } else {
      guestId = uuidv4();
      dispatch(setGuestId(guestId));
    }

    const payload = {
      ...(guestId && { guestId: guestId }),
      ...(loggedInUser?.id && { userId: loggedInUser.id }),
      productId: product?.id,
      quantity: itemQuantity,
    };

    try {
      const result = await addToCart(payload);

      if (result) {
        toast.success("Item Added Successfully!");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
    dispatch(
      addCartItems({
        guestId: guestId,
        productId: product?.id,
        quantity: itemQuantity,
      })
    );
  };

  return (
    <Wrapper bg="gray.250">
      <GoBack />
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center">
          <Spinner my="20rem" />
        </Flex>
      ) : (
        <Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            gap="2rem"
          >
            {/* Left: Image*/}
            {product?.imageUrl && (
              <Box w={{ base: "100%", md: "45%" }}>
                <Image
                  src={product?.imageUrl}
                  alt="beauty salon product images"
                  width={1500}
                  height={1000}
                  priority
                />
              </Box>
            )}

            {/* Right: Text Content */}
            <Box w={{ base: "100%", md: "50%" }}>
              <Text color="yellow.100" pb=".5rem">
                {product?.code}
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "1.9rem", md: "2.3rem" }}
                fontFamily="playfair"
                lineHeight={1.3}
                textTransform={"uppercase"}
              >
                {product?.name}
              </Heading>
              <Text py="1.5rem">{product?.description}</Text>
              <Text fontWeight={"600"} fontSize={"2rem"} pb="2rem">
                £{product?.price}
              </Text>
              <Box mb="2rem">
                <Text>Quantity*</Text>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w="15rem"
                  border="1px solid black"
                  p=".8rem"
                  mt=".5rem"
                >
                  <Box
                    cursor={"pointer"}
                    onClick={() =>
                      setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    <FiMinus />
                  </Box>
                  <Text>{itemQuantity}</Text>
                  <Box
                    cursor={"pointer"}
                    onClick={() => setItemQuantity((prev) => prev + 1)}
                  >
                    <FiPlus />
                  </Box>
                </Flex>
              </Box>

              <Cart>
                <Button bg="yellow.100" w="full" onClick={handleAddTocart}>
                  ADD TO CART
                </Button>
              </Cart>
              <Box mt="4rem">
                <HStack mb="1rem" fontWeight={600}>
                  <CiDeliveryTruck size={30} />
                  <Text fontFamily={"playfair"}>SHIPPING INFO</Text>
                </HStack>
                <List.Root fontSize={"1.55rem"} gap=".5rem" ps="8">
                  <List.Item>Processing Time: 1–2 business days </List.Item>
                  <List.Item>Delivery Time: 3–5 business days </List.Item>
                  <List.Item>
                    Shipping Provider: Royal Mail / DHL / UPS (depending on
                    destination){" "}
                  </List.Item>
                  <List.Item>
                    Tracking: A tracking number will be sent via email once your
                    order has shipped.
                  </List.Item>
                </List.Root>
              </Box>
            </Box>
          </Flex>
          <Box mt="4rem">
            <HStack mb="1rem" fontWeight={600}>
              <CiDeliveryTruck size={30} />
              <Text fontFamily={"playfair"}>RETURN & REFUND POLICY</Text>
            </HStack>
            <Text>
              We want you to love your{" "}
              <Text as="span" color="yellow.100">
                {product?.name}
              </Text>
              , but if you&apos;re not completely satisfied, we&apos;re here to
              help.
            </Text>
            <Flex
              gap={{ base: "1rem", md: "5rem", lg: "10rem" }}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box fontSize={"1.55rem"} mt="2rem">
                <Text mb="1rem">
                  You may return the item within 14 days of delivery if:
                </Text>
                <List.Root gap=".3rem" ps="7">
                  <List.Item>
                    The item is unused and in original condition
                  </List.Item>
                  <List.Item>All accessories are included </List.Item>
                  <List.Item>
                    The product is not damaged or tampered with
                  </List.Item>
                  <List.Item>
                    {" "}
                    Sale or clearance items are final and not eligible for
                    returns unless faulty.
                  </List.Item>
                </List.Root>
              </Box>
              <Box fontSize={"1.55rem"} mt="2rem">
                <Text mb="1rem">Refund Process: </Text>
                <List.Root gap=".3rem" ps="7">
                  <List.Item>
                    Returns must be initiated within 14 days of delivery to be
                    eligible for a refund.
                  </List.Item>
                  <List.Item>
                    Once we receive and inspect the item, your refund will be
                    processed within 5–7 business days.
                  </List.Item>
                  <List.Item>
                    We do not cover return shipping unless the item was faulty
                    or damaged on arrival.{" "}
                  </List.Item>
                  <List.Item>
                    Refunds will be issued to the original payment method.
                    Processing times may vary depending on your bank.
                  </List.Item>
                </List.Root>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
    </Wrapper>
  );
};

export default Product;
