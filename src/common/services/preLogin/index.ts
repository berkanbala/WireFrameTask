import { wireFrameApiClient } from "../../clients/wireFrameClient";

export const login = async (values: any) => {
  const response = await wireFrameApiClient.post("login", values);

  return response;
};
