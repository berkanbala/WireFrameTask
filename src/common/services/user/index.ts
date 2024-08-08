import { wireFrameApiClient } from "@common/clients/wireFrameClient";
import { IUser } from "@common/models/user";

export const getUserProfile = async (): Promise<IUser> => {
  const response = await wireFrameApiClient.get("profile");

  return response.data;
};
