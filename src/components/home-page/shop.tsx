"use client";

import { useGetProducts } from "@/services/api/cart";
import { Box, Flex, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import academyBg from "../../assets/images/academy-bg.webp";
import Button from "../shared/button";
import Wrapper from "../shared/wrapper";
import Products from "../shop-page/products";

const ShopSection = () => {
  const { data, isLoading } = useGetProducts({
    page: 1,
    limit: 4,
  });
  return (
    <Box
      bgImage={`url(${academyBg.src})`}
      backgroundPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Wrapper bg="rgb(0, 0, 0, 0.3)" color="white" pb="10rem">
        <VStack textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "10rem", md: "13rem", lg: "16rem" }}
            color="gray.50"
            fontFamily="allura"
            fontWeight="300"
            lineHeight={{ base: 0.7, md: 0.4 }}
          >
            Our Store
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
            fontFamily="playfair"
            color="white"
            mt={{ base: "2rem", md: "5rem" }}
            mb={{ base: "1rem", md: "2rem" }}
          >
            SHOP NOW
          </Heading>
          <Text maxW="450px" mx="auto" mb="5rem">
            Your go-to destination for premium beauty products that enhance your
            natural radiance.
          </Text>
        </VStack>

        <>
          {isLoading ? (
            <Flex alignItems="center" justifyContent="center">
              <Spinner my="15rem" />
            </Flex>
          ) : (
            <Products
              data={data}
              templateColumns={{
                base: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap="3rem 1rem"
            />
          )}
        </>
        <Flex mt="5rem" alignItems={"center"} justifyContent={"center"}>
          <Button href="/shop" bg="yellow.150">
            View more
          </Button>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default ShopSection;
