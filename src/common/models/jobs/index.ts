export interface IJobs {
  data: IJobsData[];
  meta: IJobsMeta;
}

export interface IJobsData {
  companyName: string;
  keywords: string[];
  id: string;
  description: string;
  name: string;
  createdAt: string;
  location: string;
  salary: number;
  jobName?: string;
}

export interface IJobsMeta {
  total: number;
  page?: number;
  perPage?: number;
  current?: number;
  pageSize?: number;
}
