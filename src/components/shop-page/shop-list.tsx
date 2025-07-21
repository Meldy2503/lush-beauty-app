"use client";

import {
  Box,
  Flex,
  Heading,
  Portal,
  RadioGroup,
  Select,
  Spinner,
  Text,
  createListCollection,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import Button from "../shared/button";
import { InputElement } from "../shared/input-element";
import Wrapper from "../shared/wrapper";
import Products from "./products";
import { useGetProducts } from "@/services/api/cart";
import { Params } from "@/types";
import { ProductsType } from "@/types/cart";

interface CategoriesData {
  label: string;
  value: string;
  count?: number;
}

const ShopListSection = () => {
  const [value, setValue] = useState<string[]>([]);
  const [params, setParams] = useState<Params>({
    page: 1,
  });
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);

  const [debouncedSearchQuery] = useDebounce(params?.term, 500);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useGetProducts({
    ...(debouncedSearchQuery && { term: debouncedSearchQuery }),
    page: params?.page,
  });
  const hasMoreProducts = data?.meta?.totalPages > params?.page;

  // to update the product list when data changes
  useEffect(() => {
    if (data?.data) {
      if (params.page === 1) {
        setAllProducts(data?.data);
      } else {
        setAllProducts((prev) => [...prev, ...data.data]);
      }
    }
  }, [data, params.page]);

  // Handle load more
  const handleLoadMore = () => {
    setParams((prevState) => ({
      ...prevState,
      page: prevState?.page + 1,
    }));
  };

  // Handle show less
  const handleShowLess = () => {
    setParams((prevState) => ({ ...prevState, page: 1 }));

    // Wait for React to update the DOM
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const categoriesCollection = createListCollection({
    items: categories,
  });

  return (
    <Wrapper bg="gray.250" pt="5rem" ref={sectionRef}>
      {/* search section */}
      <Flex
        mb="3rem"
        justifyContent={{ base: "space-between", md: "flex-end" }}
        gap="1rem"
        alignItems={"center"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box w={{ base: "100%", sm: "65%", md: "74%" }}>
          <InputElement
            inputItem
            placeholder="Search Item...."
            border="1px solid gray.100"
            onChange={(e) => {
              setAllProducts([]);
              setParams((prevState) => ({
                ...prevState,
                term: e.target.value,
                page: 1,
              }));
            }}
          />
        </Box>
        {/* Filter section */}
        <Box
          width={{ base: "100%", sm: "35%" }}
          display={{ base: "block", md: "none" }}
          mt=".5rem"
        >
          <Select.Root
            collection={categoriesCollection}
            value={value}
            onValueChange={(e) => setValue(e.value)}
          >
            <Select.HiddenSelect />
            <Select.Control bg="white">
              <Select.Trigger fontSize="1.6rem">
                <Select.ValueText py="1.5rem" px="1rem" placeholder="Filter" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator fontSize="1.6rem" p="1rem" />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {categoriesCollection.items.map((category) => (
                    <Select.Item
                      item={category}
                      key={category.value}
                      p="1rem"
                      fontSize="1.6rem"
                    >
                      {category.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>
      </Flex>
      <Flex gap="2rem" direction={{ base: "column", md: "row" }}>
        <Box
          w={{ base: "100%", md: "25%" }}
          display={{ base: "none", md: "block" }}
          mt="-6rem"
        >
          <Heading
            as="h2"
            fontSize={{ base: "1.8rem", md: "2rem" }}
            fontFamily="playfair"
            fontWeight="300"
            lineHeight={{ base: 0.8, md: 0.4 }}
            mb="3rem"
          >
            FILTER BY
          </Heading>
          <RadioGroup.Root
            fontSize={{ base: "1.6rem", md: "1.7rem" }}
            borderTopWidth={"1px"}
            borderTopColor={"black"}
            borderBottomWidth={"1px"}
            borderBottomColor={"black"}
            py="2rem"
            size="lg"
            defaultValue={categories[0].value}
            w={{ base: "100%", lg: "90%" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "1.7rem", md: "1.8rem" }}
              fontWeight="400"
              lineHeight={{ base: 0.8, md: 0.4 }}
              mb="4rem"
              mt="2rem"
            >
              Category
            </Heading>
            {categories.map((item) => (
              <Flex
                justify={"space-between"}
                gap="2rem"
                key={item.label}
                mt="1rem"
                w="95%"
              >
                <Box>
                  <RadioGroup.Item value={item.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText
                      fontSize={{ base: "1.6rem", md: "1.7rem" }}
                      ml=".5rem"
                    >
                      {item.label}
                    </RadioGroup.ItemText>
                  </RadioGroup.Item>
                </Box>
                <Text as="span">{item.count}</Text>
              </Flex>
            ))}
          </RadioGroup.Root>
        </Box>
        {/* products section */}
        <Box w={{ base: "100%", md: "75%" }}>
          {isLoading && params.page === 1 ? (
            <Flex alignItems="center" justifyContent="center">
              <Spinner my="15rem" />
            </Flex>
          ) : !isLoading && data?.data?.length === 0 ? (
            <Flex alignItems="center" justifyContent="center" my="5rem">
              <Text fontSize="1.6rem">
                {`No results found for "${params.term}"`}
              </Text>
            </Flex>
          ) : (
            <>
              <Products data={{ ...data, data: allProducts }} />
              {isLoading && params.page > 1 && (
                <Flex alignItems="center" justifyContent="center" mt="5rem">
                  <Spinner />
                </Flex>
              )}
            </>
          )}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my="6rem"
            gap="1.5rem"
            flexWrap={"wrap"}
          >
            {allProducts?.length > (data?.meta?.perPage || 0) &&
              params?.page !== 1 && (
                <Button
                  bg="transparent"
                  px={{ base: "2rem", md: "5rem" }}
                  borderWidth="1px"
                  borderColor="black"
                  color="black"
                  onClick={handleShowLess}
                >
                  Show Less
                </Button>
              )}
            {hasMoreProducts && (
              <Button
                onClick={handleLoadMore}
                px={{ base: "2rem", md: "5rem" }}
              >
                Load More
              </Button>
            )}
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default ShopListSection;

const categories: CategoriesData[] = [
  { label: "All", value: "All", count: 145 },
  { label: "Cosmetics", value: "Cosmetics", count: 12 },
  { label: "Lotion", value: "Lotion", count: 18 },
  { label: "Nails", value: "Nails", count: 15 },
];
