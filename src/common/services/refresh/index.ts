import { wireFrameApiClient } from "../../clients/wireFrameClient";

export const refresh = async () => {
  const refreshToken = window.localStorage.getItem("refreshToken");
  window.localStorage.clear();

  if (!refreshToken) {
    window.location.href = "/";
    return;
  }

  try {
    const response = await wireFrameApiClient.post("refresh", { refreshToken });
    wireFrameApiClient.defaults.headers["Authorization"] =
      `Bearer ${response.data.accessToken}`;
    window.localStorage.setItem("accessToken", response.data.accessToken);
    window.localStorage.setItem("refreshToken", response.data.refreshToken);
  } catch (error) {
    window.location.href = "/";
    return;
  }
  window.location.reload();
};
