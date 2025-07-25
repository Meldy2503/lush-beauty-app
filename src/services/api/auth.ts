import {
  ChangePasswordType,
  ForgotPasswordType,
  LoginType,
  ResetPasswordType,
  SignUpType,
} from "@/types/auth";
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

// change password
export const useChangePasswordMutation = () => {
  return useMutation({
    mutationKey: ["changePassword"],
    mutationFn: async (changePassword: ChangePasswordType) => {
      const res = await axios.patch(urls.changePasswordUrl, changePassword);
      return res.data;
    },
    onError: (error) => {
      console.error("Password change failed:", error);
    },
  });
};

// forgot password
export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: async (forgotPassword: ForgotPasswordType) => {
      const res = await axios.post(urls.forgotPasswordUrl, forgotPassword);
      return res.data;
    },
    onError: (error) => {
      console.error("Forgot Password failed:", error);
    },
  });
};
// reset password
export const useResetPasswordMutation = () => {
  return useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: async (resetPassword: ResetPasswordType) => {
      const res = await axios.post(urls.resetPasswordUrl, resetPassword);
      return res.data;
    },
    onError: (error) => {
      console.error("Reset Password failed:", error);
    },
  });
};
