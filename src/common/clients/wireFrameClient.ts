import axios from "axios";
import { refresh } from "../services/refresh";

const createApiClient = (options: { baseUrl: string }) => {
  if (!options?.baseUrl) {
    console.warn("cannot find appConfig baseUrl");
  }

  const accessToken = window.localStorage.getItem("accessToken") ?? undefined;

  const apiClient = axios.create({
    baseURL: options.baseUrl,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  apiClient.interceptors.request.use(
    async (config: any) => {
      // if (
      //   accessToken &&
      //   accessToken !== window.localStorage.getItem("accessToken")
      // ) {
      //   window.location.href = "/";
      //   window.localStorage.clear();
      // }

      return config;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error: any) => {
      switch (error.response.status) {
        case 400:
          return Promise.reject(error);
        case 401:
          await refresh();
          return Promise.reject(error);
        case 404:
          return Promise.reject(error);
        case 500:
          return Promise.reject(error);
        default:
          return Promise.reject(error);
      }
    }
  );

  return apiClient;
};

const createWireFrameClient = () => {
  return createApiClient({ baseUrl: import.meta.env.VITE_APP_API_URL! });
};

export const wireFrameApiClient = createWireFrameClient();
