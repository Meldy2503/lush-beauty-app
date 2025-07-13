import * as yup from "yup";

export const addAddressSchema = yup.object().shape({
  address: yup.string().trim().required("Address is required!"),
  state: yup.string().trim().required("State is required!"),
  country: yup.string().trim().required("Country is required!"),
  isDefault: yup.boolean().optional(),
});

export const updateUserProfileSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .optional()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),

  phone: yup
    .string()
    .trim()
    .optional()
    .matches(
      /^\+?[1-9]\d{1,14}$/,
      "Invalid format. Include country code (e.g. +447056835551)"
    ),
});
