// import { RootState } from "@/store";
import { Params } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useSelector } from "react-redux";
import axios from "../axios";
import urls from "../urls";
import { AddToCartType } from "@/types/cart";
// import { useDispatch } from "react-redux";

// to get all products
export const useGetProducts = (params?: Params) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const res = await axios.get(urls.getAllProducts, { params });
      return res.data.data;
    },
  });
};

// to get a single product by Id
export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const res = await axios.get(urls.getProductById(productId));
      return res.data.data;
    },
    enabled: !!productId,
  });
};

// to get all items in the cart
export const useGetCartItems = (guestId: string | null) => {
  return useQuery({
    queryKey: ["cartItems", guestId],
    queryFn: async () => {
      if (!guestId) {
        return []; // Return empty array if no guestId
      }
      const res = await axios.get(urls.getCartItems(guestId));
      return res.data.data.data;
    },
    enabled: !!guestId,
  });
};

// to add items to cart
export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async (addToCart: AddToCartType) => {
      const res = await axios.post(urls.addToCart, addToCart);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: (error) => {
      console.error("Adding Item Failed:", error);
    },
  });
};
