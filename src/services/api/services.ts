// import { LoginType } from "@/types/auth";
// import { useMutation } from "@tanstack/react-query";
// import urls from "../urls";
// import axios from "../axios";
// import { useDispatch } from "react-redux";
// import { setLoading, setToken } from "@/store/slices/auth-slice";

// export const useLoginMutation = () => {
//   const dispatch = useDispatch();

//   return useMutation({
//     mutationFn: async (login: LoginType) => {
//       dispatch(setLoading(true));
//       const res = await axios.post(urls.loginUrl, login);
//       return res.data;
//     },
//     onSuccess: (data) => {
//       if (data.token) {
//         dispatch(setToken(data.token));
//       }
//       dispatch(setLoading(false));
//       // Handle successful login (redirect, etc.)
//       console.log("Login successful:", data);
//     },
//     onError: (error) => {
//       dispatch(setLoading(false));
//       console.error("Login failed:", error);
//     },
//   });
// };
