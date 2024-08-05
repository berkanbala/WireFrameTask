import { wireFrameApiClient } from "../../clients/wireFrameClient";

export const getUserProfile = async () => {
  const response = await wireFrameApiClient.get("profile");

  return response.data;
};
