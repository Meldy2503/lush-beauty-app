import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import urls from "../urls";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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
