import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import urls from "../urls";
import { Params } from "@/types";

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
