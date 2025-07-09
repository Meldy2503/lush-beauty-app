// // hooks/useAuth.ts
// import { LoginType } from "@/types/auth";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import urls from "../urls";
// import axios from "../axios";

// export const useLoginMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (login: LoginType) => {
//       const res = await axios.post(urls.loginUrl, login);
//       return res.data; // Return just the data, not the entire response
//     },
//     onSuccess: (data) => {
//       // Store the token in sessionStorage
//       if (data.access_token) {
//         sessionStorage.setItem("admin", JSON.stringify(data));
//       }

//       // Optionally invalidate any user-related queries
//       queryClient.invalidateQueries({ queryKey: ["user"] });

//       // You can also redirect here or handle success
//       console.log("Login successful:", data);
//     },
//     onError: (error) => {
//       // Error handling is already done in your axios interceptor
//       // But you can add additional error handling here if needed
//       console.error("Login failed:", error);
//     },
//   });
// };

import { LoginType, SignUpType } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import urls from "../urls";
import axios from "../axios";
import { useDispatch } from "react-redux";
import {  setToken } from "@/store/slices/auth-slice";

export const useLoginMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (login: LoginType) => {
      const res = await axios.post(urls.loginUrl, login);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.token) {
        dispatch(setToken(data.token));
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};


export const useSignUpMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (signUp: SignUpType) => {
      const res = await axios.post(urls.signUpUrl, signUp);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.token) {
        dispatch(setToken(data.token));
      }
    },
    onError: (error) => {
      console.error("SignUp failed:", error);
    },
  });
};
