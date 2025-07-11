import { RootState } from "@/store";
import { AddAddressType } from "@/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "../axios";
import urls from "../urls";

// to get logged in user details
export const useGetUserProfile = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["userProfile", accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getUserProfileUrl);
      return res.data.data.data;
    },
    enabled: !!accessToken,
  });
};
// to get logged in user addresses
export const useGetUserAddresses = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["userAddress", accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getUserAddressesUrl);
      return res.data.data;
    },
    enabled: !!accessToken,
  });
};

// to add a new address
export const useAddAddressMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addAddress"],
    mutationFn: async (addAddress: AddAddressType) => {
      const res = await axios.post(urls.addNewAddressUrl, addAddress);
      return res.data;
    },
    onSuccess: () => {
      // Invalidate user addresses so they refetch
      queryClient.invalidateQueries({ queryKey: ["userAddress"] });
    },
    onError: (error) => {
      console.error("Add address failed:", error);
    },
  });
};
