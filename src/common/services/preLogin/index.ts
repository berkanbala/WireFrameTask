import { wireFrameApiClient } from "../../clients/wireFrameClient";
import { IUser } from "../../models/user";

export const login = async (values: IUserValues): Promise<IUser> => {
  const response = await wireFrameApiClient.post("login", values);

  return response.data;
};

export const signUp = async (values: IUserValues): Promise<IUser> => {
  const response = await wireFrameApiClient.post("register", values);

  return response.data;
};

interface IUserValues {
  email: string;
  password: string;
}
