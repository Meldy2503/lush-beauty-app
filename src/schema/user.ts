import * as yup from "yup";

export const AddAddressSchema = yup.object().shape({
  address: yup.string().trim().required("Address is required!"),
  state: yup.string().trim().required("State is required!"),
  country: yup.string().trim().required("Country is required!"),
  isDefault: yup.boolean().optional(),
});

export const UpdateUserProfileSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .optional(),

  phone: yup
    .string()
    .trim()
    .matches(/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number")
    .optional(),
});
