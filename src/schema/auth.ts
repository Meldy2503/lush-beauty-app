import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid email!")
    .required("Email is required!"),
  password: yup.string().trim().required("Password is required!"),
});


export const SignUpSchema = yup.object().shape({
  fullName: yup.string().trim().required("Full name is required!"),
  email: yup
    .string()
    .trim()
    .email("Invalid email!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required!"),
  address: yup.string().trim().required("Address is required!"),
  country: yup.string().trim().required("Country is required!"),
  state: yup.string().trim().required("State is required!"),
  phone: yup
    .string()
    .trim()
    .matches(/^\+?\d{7,15}$/, "Enter a valid phone number")
    .required("Phone number is required!"),
});

export const ChangePasswordSchema = yup.object().shape({
  old_password: yup.string().trim().required("Old password is required!"),
  new_password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirm_new_password: yup
    .string()
    .oneOf([yup.ref("new_password")], "New passwords must match")
    .required("Confirm your new password"),
});
