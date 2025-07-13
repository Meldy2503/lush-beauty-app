import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required!")
    .email("Invalid email!"),
  password: yup.string().trim().required("Password is required!"),
});

export const signUpSchema = yup.object().shape({
  fullName: yup.string().trim().required("Full name is required!"),
  email: yup
    .string()
    .trim()
    .required("Email is required!")
    .email("Invalid email!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters"),
  address: yup.string().trim().required("Address is required!"),
  country: yup.string().trim().required("Country is required!"),
  state: yup.string().trim().required("State is required!"),
  phone: yup
    .string()
    .trim()
    .required("Phone number is required!")
    .matches(
      /^\+?[1-9]\d{1,14}$/,
      "Invalid format. Include country code (e.g. +447056835551)"
    ),
});

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().trim().required("Old password is required!"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required!")
    .email("Invalid email!"),
});

export const resetPasswordSchema = yup.object().shape({
  token: yup
    .string()
    .required("OTP is required")
    .trim()
    .length(6, "OTP must be exactly 6 characters"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),
});
