// "use client";

// import { DataType } from "@/types";
// import { ProductsType } from "@/types/cart";
// import {
//   Box,
//   Grid,
//   GridItem,
//   Heading,
//   Skeleton,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// interface ProductProps {
//   data: DataType<ProductsType[]>;
//   templateColumns?: object;
//   gap?: string;
// }

// const Products = ({ data, gap, templateColumns }: ProductProps) => {
//   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
//   const products = data?.data;

//   const handleImageLoad = (productId: string) => {
//     setLoadedImages((prev) => new Set(prev).add(productId));
//   };

//   return (
//     <Grid
//       templateColumns={
//         templateColumns ?? {
//           base: "repeat(2, 1fr)",
//           sm: "repeat(3, 1fr)",
//         }
//       }
//       gap={gap ?? "1.5rem"}
//     >
//       {products?.map((product: ProductsType) => (
//         <Link href={`/shop/${product?.id}`} key={product?.id}>
//           <GridItem w="100%">
//             <Box position="relative" w="100%" aspectRatio={1}>
//               <Skeleton
//                 loading={!loadedImages.has(product?.id)}
//                 w="100%"
//                 h="100%"
//                 borderRadius="md"
//               >
//                 <Image
//                   src={product?.imageUrl}
//                   alt={product?.name ?? "beauty products"}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   style={{
//                     objectFit: "cover",
//                     borderRadius: "0.5rem",
//                   }}
//                   onLoad={() => handleImageLoad(product?.id)}
//                 />
//               </Skeleton>
//             </Box>

//             <VStack textAlign="center" py="1rem">
//               <Heading
//                 as="h4"
//                 fontSize={{ base: "1.4rem", sm: "1.5rem", lg: "1.6rem" }}
//                 fontWeight={"400"}
//                 fontFamily={"playfair"}
//               >
//                 {product?.name}
//               </Heading>
//               <Text color="yellow.100" textAlign="center" fontWeight={"600"}>
//                 £{product?.price}
//               </Text>
//             </VStack>
//           </GridItem>
//         </Link>
//       ))}
//     </Grid>
//   );
// };

// export default Products;

"use client";

import { DataType } from "@/types";
import { ProductsType } from "@/types/cart";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductProps {
  data: DataType<ProductsType[]>;
  templateColumns?: object;
  gap?: string;
}

const Products = ({ data, gap, templateColumns }: ProductProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const products = data?.data;

  const handleImageLoad = (productId: string) => {
    // Add a small delay before hiding skeleton for smoother transition
    setTimeout(() => {
      setLoadedImages((prev) => new Set(prev).add(productId));
    }, 600);
  };

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
            <Box position="relative" w="100%" aspectRatio={1}>
              <Skeleton
                loading={!loadedImages.has(product?.id)}
                w="100%"
                h="100%"
                borderRadius="md"
                animationDuration="0.6s"
              >
                <Box
                  opacity={loadedImages.has(product?.id) ? 1 : 0}
                  transition="opacity 0.4s ease-in-out"
                  w="100%"
                  h="100%"
                >
                  <Image
                    src={product?.imageUrl}
                    alt={product?.name ?? "beauty products"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0.5rem",
                    }}
                    onLoad={() => handleImageLoad(product?.id)}
                  />
                </Box>
              </Skeleton>
            </Box>

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
