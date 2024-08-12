import { wireFrameApiClient } from "@common/clients/wireFrameClient";
import { IJobs, IJobsData } from "@common/models/jobs";

export const getJobs = async (values: any): Promise<IJobs> => {
  // values: API'ye gönderilecek olan sorgu parametrelerini (params) temsil eder. Bu parametreler, belirli filtreler, sayfalama bilgisi, arama terimleri vb. olabilir.
  const response = await wireFrameApiClient.get("jobs", { params: values });
  // "jobs" endpoint'ine bir GET isteği yapar ve verilen values parametrelerini bu isteğe ekler.

  return response.data;
  // API yanıtındaki veri kısmını döndürür.
};

export const getJobById = async (id: string): Promise<IJobsData> => {
  // id: Almak istediğiniz iş ilanının benzersiz tanımlayıcısıdır (ID).
  const response = await wireFrameApiClient.get(`jobs/${id}`);
  // Verilen ID'ye göre "jobs/{id}" endpoint'ine bir GET isteği yapar.

  return response.data;
  // API yanıtındaki veri kısmını döndürür.
};

export const postJobApply = async (id: string) => {
  // id: Başvuru yapmak istediğiniz iş ilanının benzersiz tanımlayıcısıdır (ID).
  const response = await wireFrameApiClient.post(`jobs/${id}/apply`);
  // Verilen ID'ye göre "jobs/{id}/apply" endpoint'ine bir POST isteği yapar. Bu, başvuru işlemini tetikler.

  return response.data;
  // API yanıtındaki veri kısmını döndürür.
};
