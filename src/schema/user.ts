import * as yup from "yup";

export const AddAddressSchema = yup.object().shape({
  address: yup.string().trim().required("Address is required!"),
  state: yup.string().trim().required("State is required!"),
  country: yup.string().trim().required("Country is required!"),
  isDefault: yup.boolean().optional(),
});
