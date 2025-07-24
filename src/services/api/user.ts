import { RootState } from "@/store";
import { AddAddressType, UpdateUserProfileType } from "@/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "../axios";
import urls from "../urls";
import { Params } from "@/types";

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

// to update a user profile
export const useUpdateUserProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateUserProfile"],
    mutationFn: async (updateUserProfile: UpdateUserProfileType) => {
      const res = await axios.patch(
        urls.updateUserProfileUrl,
        updateUserProfile
      );
      return res.data;
    },
    onSuccess: () => {
      // Invalidate user profile so they refetch
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      console.error("User profile update failed:", error);
    },
  });
};

// to update an address
export const useUpdateAddressMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateAddress"],
    mutationFn: async ({
      addressId,
      updateAddress,
    }: {
      addressId: string;
      updateAddress: AddAddressType;
    }) => {
      const res = await axios.patch(
        urls.updateAddressUrl(addressId),
        updateAddress
      );
      return res.data;
    },
    onSuccess: () => {
      // Invalidate user addresses so they refetch
      queryClient.invalidateQueries({ queryKey: ["userAddress"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      console.error("Address update failed:", error);
    },
  });
};

// to delete an address
export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteAddress"],
    mutationFn: async (addressId: string) => {
      const res = await axios.delete(urls.deleteAddressUrl(addressId));
      return res.data;
    },
    onSuccess: () => {
      // Invalidate user addresses so they refetch
      queryClient.invalidateQueries({ queryKey: ["userAddress"] });
    },
    onError: (error) => {
      console.error("Delete address failed:", error);
    },
  });
};

// to get all appointments booked by a user
export const useGetUserAppointments = (params?: Params) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["userAppointments", params, accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getUserAppointmentUrl, { params });
      return res.data.data.data;
    },
    enabled: !!accessToken,
  });
};


// to get all user orders
export const useGetUserOrders = (params?: Params) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["userOrders", params, accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getUserOrdersUrl, { params });
      return res.data.data.data;
    },
    enabled: !!accessToken,
  });
};
