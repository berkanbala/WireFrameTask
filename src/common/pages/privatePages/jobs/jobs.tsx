import styles from "./jobs.module.scss";
import { Job } from "@custom/components/job/job";
import { Input } from "@common/components/ui/input/input";
import { toast } from "react-toastify";
import { Loading } from "@common/components/ui/loading/loading";
import { getJobs } from "@common/services/jobs";
import { UISelect } from "@common/components/ui/select/select";
import { JobDetail } from "@custom/modals/jobDetail/jobDetail";
import { Pagination } from "antd";
import { optionsFilter } from "./helpers";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { IJobsData, IJobsMeta } from "@common/models/jobs";

export const Jobs = () => {
  const [optionsValue, setOptionsValue] = useState<null | string>(null);
  const [searchValue, setSearchValue] = useState("");
  const [jobsData, setJobsData] = useState<IJobsData[]>([]);
  const [jobsQuery, setJobsQuery] = useState({ page: 1, perPage: 10 } as any);
  const [jobsPagination, setJobPagination] = useState<IJobsMeta>(
    {} as IJobsMeta
  );
  const [loading, setLoading] = useState(false);
  const [jobDetailVisible, setJobDetailVisible] = useState(false);
  const [jobDetailId, setJobDetailId] = useState("");
  const { t } = useTranslation("translations");

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const response = await getJobs(jobsQuery);
        // Bileşen yüklendiğinde ve jobsQuery değiştiğinde, getAllJobs adlı asenkron bir fonksiyon çalışır. Bu fonksiyon: getJobs fonksiyonunu çağırarak iş ilanlarını alır.
        setJobsData(response.data);
        // setJobsData ile alınan iş ilanlarını duruma kaydeder.
        setJobPagination({
          current: response.meta.page,
          pageSize: response.meta.perPage,
          total: response.meta.total,
        });
        // Sayfalama verilerini setJobPagination ile günceller.
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
        // Son olarak, setLoading(true) ile yüklemenin tamamlandığını belirtir.
      }
    };

    getAllJobs();
  }, [jobsQuery]);

  const handleFilter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == "Enter") {
      // Kullanıcı arama kutusuna bir şey yazıp Enter tuşuna bastığında çalışır (onKeyDown olayı).
      if (!optionsValue || searchValue == "") {
        // Eğer optionsValue veya searchValue boşsa
        toast.error("Fill in all fields.");
        // bir hata bildirimi gösterir (toast.error).
        return;
      }

      setJobsQuery({
        ...jobsQuery,
        search: {
          field: optionsValue,
          query: searchValue,
        },
        // Aksi halde, jobsQuery'i güncelleyerek yeni bir arama sorgusu oluşturur.
      });
      setLoading(false);
    }
    // Son olarak, setLoading(false) ile yüklemenin yeniden başlayacağını belirtir.
  };

  const renderContent = () => {
    if (jobsData.length == 0) {
      return <div className={styles.noData}>{t("privatehome.nodata")}</div>;
    }

    return (
      <div className={styles.content}>
        {jobsData.map((data: IJobsData) => (
          <Job
            description={data.description}
            keywords={data.keywords}
            location={data.location}
            name={`${data.name} - ${data.companyName}`}
            salary={data.salary}
            key={data.id}
            setId={setJobDetailId}
            id={data.id}
            setVisible={setJobDetailVisible}
          />
        ))}
      </div>
    );
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>{t("navbar.basicfilter")} </div>
        <UISelect
          disabled={false}
          placeholder="Select a Field"
          onChange={(value: string) => setOptionsValue(value)}
          options={optionsFilter}
          value={optionsValue}
          className={styles.select}
        />
        <Input
          name="text"
          type="text"
          disabled={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleFilter}
          value={searchValue}
          placeholder={t("navbar.search")}
        />
      </div>
      {renderContent()}
      <Pagination
        {...jobsPagination}
        onChange={(page) => {
          setJobsQuery({
            ...jobsQuery,
            page,
            perPage: 10,
          });
          setLoading(false);
        }}
        className={styles.pagination}
        // Sayfalama kontrolü (Pagination) gösterilir ve sayfa değiştirildiğinde jobsQuery güncellenir.
      />
      {jobDetailVisible && (
        <JobDetail id={jobDetailId} setVisible={setJobDetailVisible} />
      )}
      {/* Eğer bir iş detayı modalı görünürse jobDetailVisible, ilgili işin detayları JobDetail bileşeninde gösterilir. */}
    </div>
  );
};
