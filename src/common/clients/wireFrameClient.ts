import axios from "axios";

export const createApiClient = (options: { baseUrl: string }) => {
  if (!options.baseUrl) {
    console.warn("cannot not find app baseUrl");
  }

  const accessToken = window.localStorage.getItem("accessToken") ?? undefined;

  const apiClient = axios.create({
    baseURL: options.baseUrl,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      "Access-Control-Allow-Credentials": true,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  apiClient.interceptors.request.use(
    async (config: any) => {
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
    async (error) => {
      switch (error.response.status) {
        case 400:
          return Promise.reject(error);
        case 401:
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
};

const createWireFrameClient = () => {
  return createApiClient({ baseUrl: process.env.REACT_APP_API_URL! });
};

export const wireFrameApiClient = createWireFrameClient();

