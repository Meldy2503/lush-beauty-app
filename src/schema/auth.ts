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


// data
// : 
// message
// : 
// "Login successful"
// token
// : 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NWM0NWMyNS0yN2MxLTRlM2ItYjZhNi1mYjk2YmM1NDgzMzkiLCJpYXQiOjE3NTIwOTQ1MDIsImV4cCI6MTc1MjE4MDkwMn0.wkBfOEqyXJ8tATUn7O0EEjjXG5HQEa2t8j437phwL90"
// user
// : 
// createdAt
// : 
// "2025-07-06T10:38:46.651Z"
// email
// : 
// "zara.doe@example.com"
// fullName
// : 
// "Zara High"
// id
// : 
// "45c45c25-27c1-4e3b-b6a6-fb96bc548339"
// imageUrl
// : 
// null
// phone
// : 
// "08089345678"
// status
// : 
// true
// updatedAt
// : 
// "2025-07-06T10:38:46.651Z"
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object
// message
// : 
// "Request successful"
// success
// : 
// true