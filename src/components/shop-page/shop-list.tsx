"use client";

import { useGetProductCategories, useGetProducts } from "@/services/api/cart";
import { Params } from "@/types";
import { ProductCategoryType, ProductsType } from "@/types/cart";
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

type CategoryItem = {
  label: string;
  value: string;
  count: number;
};

const ShopListSection = () => {
  const [params, setParams] = useState<Params>({
    page: 1,
    categoryId: "", // Empty string represents "All"
  });
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [debouncedSearchQuery] = useDebounce(params?.term, 500);
  const sectionRef = useRef<HTMLDivElement>(null);

  // to fetch all products data
  const { data, isLoading } = useGetProducts({
    ...(debouncedSearchQuery && { term: debouncedSearchQuery }),
    ...(params?.categoryId && { categoryId: params?.categoryId }),
    page: params?.page,
  });

  // to fetch all categories data
  const { data: categoriesData, isLoading: isLoadingCategory } =
    useGetProductCategories();
  const hasMoreProducts = data?.meta?.totalPages > params?.page;

  // to update the product list when data changes
  useEffect(() => {
    if (data?.data) {
      if (params.page === 1) {
        setAllProducts(data?.data);
      } else {
        setAllProducts((prev) => [...prev, ...data.data]);
        setIsLoadingMore(false);
      }
    }
  }, [data, params.page]);

  const handleLoadMore = async () => {
    if (!hasMoreProducts || isLoadingMore) return;
    setIsLoadingMore(true);
    // Wait a little for UI to fully load
    await new Promise((resolve) => setTimeout(resolve, 600));

    setParams((prev) => ({
      ...prev,
      page: prev.page + 1,
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

  const categories: CategoryItem[] =
    categoriesData?.map((category: ProductCategoryType) => ({
      label: category?.name,
      value: category?.id,
      count: category?.items?.length,
    })) || [];

  // Create categories with "All" option
  const categoriesWithAll: CategoryItem[] = [
    { label: "All", value: "", count: data?.meta?.total || 0 },
    ...categories,
  ];

  const categoriesCollection = createListCollection({
    items: categoriesWithAll,
  });

  return (
    <Wrapper bg="gray.250" pt="5rem" ref={sectionRef}>
      {/* search section */}
      <Flex
        mb="3rem"
        justifyContent={{ base: "space-between", md: "flex-end" }}
        gap="1.5rem"
        alignItems={"center"}
        flexDir={{ base: "column-reverse", sm: "row" }}
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
        >
          <Select.Root
            collection={categoriesCollection}
            value={params?.categoryId ? [params?.categoryId] : [""]} // Default to "All" (empty string)
            onValueChange={(details) => {
              setAllProducts([]);
              setParams((prevState) => ({
                ...prevState,
                categoryId: details.value[0] || "",
                page: 1,
              }));
            }}
          >
            <Select.HiddenSelect />
            <Select.Control bg="white">
              <Select.Trigger fontSize="1.6rem">
                <Select.ValueText py="1.5rem" px="1rem" placeholder="All" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator fontSize="1.6rem" p="1rem" />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {categoriesCollection?.items?.map((category) => (
                    <Select.Item
                      item={category}
                      key={category?.value || "All"}
                      p="1rem"
                      fontSize="1.6rem"
                    >
                      {category?.label}
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
            value={params?.categoryId || ""} // Default to "All" (empty string)
            onValueChange={(e) => {
              setAllProducts([]);
              setParams((prevState) => ({
                ...prevState,
                categoryId: e.value || "",
                page: 1,
              }));
            }}
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
            {categoriesCollection?.items?.map((category) => (
              <Flex
                justify={"space-between"}
                gap="2rem"
                key={category?.value || "all"} // Handle empty value for "All"
                mt="1rem"
                w="95%"
              >
                <Box>
                  <RadioGroup.Item value={category?.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText
                      fontSize={{ base: "1.6rem", md: "1.7rem" }}
                      ml=".5rem"
                    >
                      {category?.label}
                    </RadioGroup.ItemText>
                  </RadioGroup.Item>
                </Box>
                <Text as="span">{category?.count}</Text>
              </Flex>
            ))}
          </RadioGroup.Root>
        </Box>
        {/* products section */}
        <Box w={{ base: "100%", md: "75%" }}>
          {(isLoading || isLoadingCategory) && params.page === 1 ? (
            <Flex alignItems="center" justifyContent="center">
              <Spinner my="15rem" />
            </Flex>
          ) : (!isLoading || !isLoadingCategory) && data?.data?.length === 0 ? (
            <Flex alignItems="center" justifyContent="center" my="5rem">
              <Text fontSize="1.6rem">
                {`No results found for "${params.term}"`}
              </Text>
            </Flex>
          ) : (
            <>
              <Products data={{ ...data, data: allProducts }} />
              {isLoadingMore && (
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
                disabled={isLoadingMore}
              >
                {isLoadingMore ? "Loading..." : "Load More"}
              </Button>
            )}
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default ShopListSection;
