import { RootState } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "../axios";
import urls from "../urls";

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
