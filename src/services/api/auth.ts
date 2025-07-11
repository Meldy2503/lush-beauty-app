import { LoginType, SignUpType } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import urls from "../urls";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { setAuthData, setToken } from "@/store/slices/auth-slice";

// login request
export const useLoginMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (login: LoginType) => {
      const res = await axios.post(urls.loginUrl, login);
      return res.data;
    },
    onSuccess: (data) => {
      dispatch(
        setAuthData({
          token: data?.data?.token,
          user: data?.data?.user,
        })
      );
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

// sign up request
export const useSignUpMutation = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (signUp: SignUpType) => {
      const res = await axios.post(urls.signUpUrl, signUp);
      return res.data;
    },
    onSuccess: (data) => {
      const token = data?.data?.token;
      if (token) {
        dispatch(setToken(token));
      }
    },
    onError: (error) => {
      console.error("SignUp failed:", error);
    },
  });
};
