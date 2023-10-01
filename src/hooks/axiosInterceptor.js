import axios from "axios";
import useLocalStorage from "./localStorage";
import { environment } from "../environment/environment";
import { ToastrService } from "../services";
import { useNavigate } from "react-router-dom";

const useAxiosInterceptor = () => {
  // const navigate = useNavigate();
  const axiosApiInstance = axios.create({ baseURL: environment.apiUrl });

  // Request interceptor for API calls
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const { getToken } = useLocalStorage();
      const token = getToken();
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { clearLocalStorage } = useLocalStorage();
      const errorResponse = error.response;
      if (errorResponse.status === 403) {
        ToastrService.error(error.message, error.name);
      }
      if (errorResponse.status === 404) {
        ToastrService.error(error.message, error.name);
        // navigate("/login", { replace: true });
      }
      if (errorResponse.status === 401) {
        clearLocalStorage();
        ToastrService.error("Your session has been expired", "Session Expired");
      }
      if (errorResponse.status === 500) {
        ToastrService.error(
          "Please contact your developer.",
          "Developer Error"
        );
      }
      return Promise.reject(error);
    }
  );
  return { axiosApiInstance };
};

export default useAxiosInterceptor;
