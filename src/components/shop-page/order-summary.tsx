import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import academy from "../../assets/images/academy-1.webp";
import Button from "../shared/button";
import Wrapper from "../shared/wrapper";
import Cart from "./cart";
import PersonalDetailsModal from "../personal-details/personal-details-modal";
import { GoBack } from "../shared/go-back";

const OrderSummaryPage = () => {
  return (
    <Wrapper bg="gray.250">
      <GoBack />

      <Flex gap="2rem" flexDir={{ base: "column-reverse", lg: "row" }}>
        <Box w={{ base: "100%", lg: "70%" }}>
          {/* customer details section */}
          <Box bg="white" p="3rem 2rem ">
            <HStack
              pb="2rem"
              mb="2rem"
              borderBottomWidth={"2px"}
              borderBottomColor={"gray.250"}
              gap="1rem"
            >
              <IoIosCheckmarkCircle size={"2.5rem"} color="orange" />
              <Heading
                as="h3"
                fontSize={{ base: "1.7rem", md: "1.8rem" }}
                fontFamily="playfair"
                lineHeight={1.3}
                textTransform={"uppercase"}
              >
                CUSTOMER DETAILS{" "}
              </Heading>
            </HStack>

            <Text fontWeight={"600"}>Billing Details</Text>
            <Flex
              borderWidth={"2px"}
              borderColor={"gray.250"}
              flexDir={{ base: "column", sm: "row" }}
              gapY="1rem"
              gapX="2rem"
              justifyContent={"space-between"}
              p="1.5rem"
              mb="1rem"
              mt="2rem"
            >
              <Flex gap="1.5rem">
                <FaRegCircleDot size={"2.2rem"} />

                <Box fontSize="1.5rem">
                  <Heading
                    as="h4"
                    fontFamily="playfair"
                    mb=".5rem"
                    lineHeight={1.4}
                    textTransform={"uppercase"}
                    fontSize="1.6rem"
                    mt="-.4rem"
                  >
                    EMELDER OKAFOR
                  </Heading>
                  <Text lineHeight={1.3} mb=".5rem">
                    2, Beverley street - United state
                  </Text>
                  <Text lineHeight={1.3} mb=".5rem">
                    peter.smith@gmail.com{" "}
                  </Text>
                  <Text lineHeight={1.3}>+44241481957 </Text>
                </Box>
              </Flex>
              <Flex alignSelf={{ base: "flex-end", sm: "center" }}>
                <PersonalDetailsModal />
              </Flex>
            </Flex>
          </Box>
          {/* order details section */}
          <Box bg="white" mt="2rem" p="3rem 2rem">
            <HStack
              pb="2rem"
              mb="2rem"
              borderBottomWidth={"2px"}
              borderBottomColor={"gray.250"}
              gap="1rem"
            >
              <IoIosCheckmarkCircle size={"2.5rem"} color="orange" />
              <Heading
                as="h3"
                fontSize={{ base: "1.7rem", md: "1.8rem" }}
                fontFamily="playfair"
                lineHeight={1.3}
                textTransform={"uppercase"}
              >
                ORDER DETAILS{" "}
              </Heading>
            </HStack>

            <Text fontWeight={"600"}>Door delivery</Text>
            <Text>Delivery between 12 June and 15 June</Text>
            <Flex
              borderWidth={"2px"}
              borderColor={"gray.250"}
              alignItems={{ base: "flex-end", sm: "center" }}
              flexDir={{ base: "column", sm: "row" }}
              gapY=".4rem"
              gapX="2rem"
              justifyContent={"space-between"}
              p="1.5rem"
              mb="1rem"
              mt="2rem"
            >
              <Flex
                alignItems={{ base: "flex-start", md: "center" }}
                gap="1.5rem"
                flexDir={{ base: "column", sm: "row" }}
              >
                <Image
                  src={academy}
                  alt="product image"
                  style={{
                    objectFit: "cover",
                  }}
                  width={130}
                  height={130}
                />{" "}
                <Box fontSize="1.5rem" w={{ base: "full", md: "60%" }}>
                  <Heading
                    as="h4"
                    fontFamily="playfair"
                    mb=".5rem"
                    lineHeight={1.4}
                    textTransform={"uppercase"}
                    fontSize="1.6rem"
                  >
                    rechargeable face mask{" "}
                  </Heading>
                  <Text lineHeight={1.5}>
                    USB rechargeable face mask, 7-color LED beauty instrument,
                    suitable for all Light Beige types, Women&apos;s holiday
                    gift, Mother&apos;s Day gift{" "}
                  </Text>
                </Box>
              </Flex>
              <Text
                lineHeight={1.3}
                fontWeight={"600"}
                py=".5rem"
                fontSize={"1.8rem"}
              >
                $40
              </Text>
            </Flex>
            <Flex justifyContent={"center"}>
              <Cart>
                <Button
                  bg="transparent"
                  color="yellow.100"
                  fontSize="1.7rem"
                  fontWeight="600"
                >
                  MODIFY CART
                </Button>
              </Cart>
            </Flex>
          </Box>
        </Box>

        {/* order summary section */}
        <Box w={{ base: "100%", lg: "30%" }} bg="white" p="3rem 2rem">
          <Text fontWeight={"600"} pb="2rem">
            Order summary (2)
          </Text>

          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            borderTopWidth="2px"
            borderTopColor={"gray.250"}
            pt="2rem"
          >
            <Text fontWeight={"400"}>Subtotal</Text>{" "}
            <Text fontWeight={"600"} fontSize={"1.8rem"}>
              $50.00
            </Text>{" "}
          </HStack>
          <HStack
            mt="2rem"
            justifyContent={"space-between"}
            pb="2rem"
            gap="2rem"
            borderBottomWidth="2px"
            borderBottomColor={"gray.250"}
          >
            <Text fontWeight={"400"}>Shipping fee</Text>{" "}
            <Text fontWeight={"600"} fontSize={"1.8rem"}>
              $5.00
            </Text>{" "}
          </HStack>
          <HStack
            justifyContent={"space-between"}
            gap="2rem"
            mt="2rem"
            mb="4rem"
            fontWeight={"600"}
          >
            <Text>Total</Text> <Text fontSize={"1.8rem"}>$55.00</Text>{" "}
          </HStack>
          <Button w="full" href="/shop/order-confirmation">
            Confirm Order
          </Button>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default OrderSummaryPage;
