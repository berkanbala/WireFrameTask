import { wireFrameApiClient } from "../../clients/wireFrameClient";
import { IUser } from "../../models/user";

export const getUserProfile = async (): Promise<IUser> => {
  const response = await wireFrameApiClient.get("profile");

  return response.data;
};
