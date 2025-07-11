import { store } from "@/store";
import { APIResponse } from "@/types";
import Axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const axiosConfiguration = (config: InternalAxiosRequestConfig) => {
  const token = store.getState().auth.accessToken;

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

axios.interceptors.request.use(axiosConfiguration);

axios.interceptors.response.use(
  (res) => res,
  async (error: AxiosError<APIResponse>) => {
    const status = error.response?.status;
    const apiMessage = error.response?.data?.message;

    if (status === 401) {
      toast.error(apiMessage || "Unauthorized. Please login again.");
       return Promise.reject(error);
    }

    if ([400, 403, 404, 500].includes(status || 0)) {
      toast.error(apiMessage || "Something went wrong.");
      return Promise.reject(error.response);
    }

    toast.error(apiMessage || "An unexpected error occurred.");
    return Promise.reject(error);
  }
);

export default axios;
