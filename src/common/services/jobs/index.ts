import { wireFrameApiClient } from "../../clients/wireFrameClient";

export const getJobs = async (values: any) => {
  const response = await wireFrameApiClient.get("jobs", { params: values });

  return response.data;
};
