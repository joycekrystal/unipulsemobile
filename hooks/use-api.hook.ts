import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

export const useApi = () => {
  const initializeBaseApi = () => {
    const baseApiInstance: AxiosInstance = axios.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
    });

    baseApiInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        /**
         * Set Headers
         */
        config.headers["Accept"] = "application/json";
        config.headers["Content-Type"] = "application/json";

        // if (authToken) {
        //   config.headers["Authorization"] = getBearerTokenValue();
        // }

        return config;
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
      }
    );

    baseApiInstance.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        return response;
      },
      (error: AxiosError): Promise<AxiosError> => {
        if (error.response) {
          const { status } = error.response;

          if (status === 500) {
            // toast.error("Failed! An error occured");
          }
        }

        return Promise.reject(error);
      }
    );

    return baseApiInstance;
  };

  return {
    $baseApi: initializeBaseApi(),
  };
};
