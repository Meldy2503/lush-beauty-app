"use client";

import { DataType } from "@/types";
import { ProductsType } from "@/types/products";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


interface ProductProps {
  data: DataType<ProductsType[]>;
  templateColumns?: object;
  gap?: string
}

  const Products = ({ data, gap, templateColumns }: ProductProps) => {
    const products = data?.data;

    return (
      <Grid
        templateColumns={
          templateColumns ?? {
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
          }
        }
        gap={gap ?? "1.5rem"}
      >
        {products?.map((product: ProductsType) => (
          <Link href={`/shop/${product?.id}`} key={product?.id}>
            <GridItem w="100%">
              <Image
                src={product?.imageUrl}
                alt={product?.heading ?? "beauty products"}
                style={{ position: "relative" }}
                width={1000}
                height={1000}
              />
              <VStack textAlign="center" py="1rem">
                <Heading
                  as="h4"
                  fontSize={{ base: "1.4rem", sm: "1.5rem", lg: "1.6rem" }}
                  fontWeight={"400"}
                  fontFamily={"playfair"}
                >
                  {product?.name}
                </Heading>
                <Text color="yellow.100" textAlign="center" fontWeight={"600"}>
                  £{product?.price}
                </Text>
              </VStack>
            </GridItem>
          </Link>
        ))}
      </Grid>
    );
  };

export default Products;
