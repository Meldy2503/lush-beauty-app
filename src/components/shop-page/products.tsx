"use client";

import {
    Grid,
    GridItem,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import academy1 from "../../assets/images/academy-1.webp";
import academy2 from "../../assets/images/academy-2.webp";
import academy3 from "../../assets/images/academy-3.webp";
import Link from "next/link";

interface CardData {
  id: number;
  imageUrl: StaticImageData;
  heading: string;
  amount?: string;
}
const Products = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
      }}
      gapX={{ base: "2rem", xl: "3rem" }}
      gapY={"3rem"}
    >
      {cardData.map((card) => (
        // <Link href={`/shop/${id}`} key={card.id}>
        <Link href={"/shop/1"} key={card.id}>
          <GridItem w="100%">
            <Image
              src={card.imageUrl}
              alt={card.heading}
              style={{ position: "relative" }}
              width={1000}
              height={1000}
            />
            <VStack textAlign="center">
              <Heading
                as="h4"
                mt={{ base: "1rem", md: "1.5rem" }}
                fontSize= {{base:'1.5rem', sm:'1.6rem', lg:'1.7rem'}}
                fontWeight={"400"}
              >
                {card.heading}
              </Heading>
              <Text color="yellow.100" textAlign="center" fontWeight={"500"}>
                {card.amount}
              </Text>
            </VStack>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};

export default Products;

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: academy1,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 2,
    imageUrl: academy2,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 3,
    imageUrl: academy3,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 4,
    imageUrl: academy1,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 5,
    imageUrl: academy1,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 6,
    imageUrl: academy2,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 7,
    imageUrl: academy3,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 8,
    imageUrl: academy2,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
  {
    id: 9,
    imageUrl: academy1,
    heading: "Chebe Hair Butter",
    amount: "$45.00",
  },
];
