import { wireFrameApiClient } from "../../clients/wireFrameClient";

export const login = async (values: any) => {
  const response = await wireFrameApiClient.post("login", values);

  return response.data;
};
export const signUp = async (values: any) => {
  const response = await wireFrameApiClient.post("register", values);

  return response.data;
};
