import { RootState } from "@/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "../axios";
import urls from "../urls";
import { BookAppointmentType } from "@/types/book-appointment";
import { Params } from "@/types";

// to get all branches/locations
export const useGetBranches = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["branches", accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getBranchesUrl);
      return res.data.data.data;
    },
    enabled: !!accessToken,
  });
};

// to get all services
export const useGetServices = (branchId?: string) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["services", branchId, accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getServicesUrl, {
        params: {
          branchId,
        }
      });
      return res.data.data.data;
    },
    enabled: !!accessToken,
  });
};

// to get all specialists
export const useGetSpecialists = (params?: Params) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return useQuery({
    queryKey: ["specialists", params, accessToken],
    queryFn: async () => {
      const res = await axios.get(urls.getSpecilalistsUrl, { params });
      return res.data.data.data;
    },
    enabled: !!accessToken,
  });
};

// to book a personal appointment
export const usePersonalBookingMutation = () => {
  // const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["personalBooking"],
    mutationFn: async (personalBooking: BookAppointmentType) => {
      const res = await axios.post(
        urls.bookPersonalAppointment,
        personalBooking
      );
      return res.data;
    },
    // onSuccess: (data) => {
    //   const token = data?.data?.token;
    //   if (token) {
    //     dispatch(setToken(token));
    //   }
    // },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });
};

// to book a group appointment
export const useGroupBookingMutation = () => {
  // const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["groupBooking"],
    mutationFn: async (groupBooking: BookAppointmentType) => {
      const res = await axios.post(urls.bookGroupAppointment, groupBooking);
      return res.data;
    },
    // onSuccess: (data) => {
    //   const token = data?.data?.token;
    //   if (token) {
    //     dispatch(setToken(token));
    //   }
    // },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });
};
