import { wireFrameApiClient } from "../../clients/wireFrameClient";
import { IJobs, IJobsData } from "../../models/jobs";

export const getJobs = async (values: any): Promise<IJobs> => {
  const response = await wireFrameApiClient.get("jobs", { params: values });

  return response.data;
};

export const getJobById = async (id: string): Promise<IJobsData> => {
  const response = await wireFrameApiClient.get(`jobs/${id}`);

  return response.data;
};

export const postJobApply = async (id: string) => {
  const response = await wireFrameApiClient.post(`jobs/${id}/apply`);

  return response.data;
};
