export interface IUser {
  user: {
    id: string;
    email: string;
    profileImage: string;
    appliedJobs?: string[];
  };
  tokenType: string;
  accessToken: string;
  refreshToken: string;
}
