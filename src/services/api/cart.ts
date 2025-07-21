// import { RootState } from "@/store";
import { Params } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useSelector } from "react-redux";
import axios from "../axios";
import urls from "../urls";
import { AddToCartType, DeleteCartItemType } from "@/types/cart";
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

// to get all product categories
export const useGetProductCategories = () => {
  return useQuery({
    queryKey: ["productCategories"],
    queryFn: async () => {
      const res = await axios.get(urls.getProductCategories);
      return res.data.data.data;
    },
  });
};

// to get all items in the cart
export const useGetCartItems = ({
  guestId,
  userId,
}: {
  guestId?: string | null;
  userId?: string | null;
}) => {
  const isEnabled = !!guestId || !!userId;

  return useQuery({
    queryKey: ["cartItems", guestId ?? userId],
    queryFn: async () => {
      if (!guestId && !userId) return [];

      const res = await axios.get(
        urls.getCartItems({
          guestId: guestId ?? undefined,
          userId: userId ?? undefined,
        })
      );
      return res.data.data.data;
    },
    enabled: isEnabled,
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

// to delete an item from the cart
export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCartItem"],
    mutationFn: async ({ productId, userId, guestId }: DeleteCartItemType) => {
      const res = await axios.delete(urls.deleteCartItemUrl(productId), {
        data: { userId, guestId },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: (error) => {
      console.error("Delete Cart Item failed:", error);
    },
  });
};
