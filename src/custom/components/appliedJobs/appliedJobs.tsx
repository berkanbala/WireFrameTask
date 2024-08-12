import styles from "./appliedJobs.module.scss";
import classNames from "classnames";
import { Loading } from "@common/components/ui/loading/loading";
import { IJobsData } from "@common/models/jobs";
import { getJobById } from "@common/services/jobs";
import { useAppContext } from "@common/context/appContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const AppliedJobs = (props: Props) => {
  const { className } = props;
  const { auth, jobs } = useAppContext();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("translations");

  useEffect(() => {
    const getAppliedJobs = async () => {
      // getAppliedJobs fonksiyonu, kullanıcının başvurduğu iş ilanlarının ID'lerini kullanarak her bir iş ilanı için API'ye istek yapar.
      const tempArr: IJobsData[] = [];
      // Gelen yanıtları geçici bir diziye (tempArr) ekler.
      auth.userInfo.user.appliedJobs?.forEach(async (id: string) => {
        // ID'ler üzerinden forEach döngüsü ile tek tek işlem yapılır.
        // Bu döngü, her bir iş ilanı ID'si için ayrı bir asenkron fonksiyon çalıştırır
        try {
          const response = await getJobById(id);
          // her bir ID için getJobById adlı bir fonksiyon çağrılır. Bu fonksiyon, verilen ID'ye karşılık gelen iş ilanı bilgilerini API'den almak için kullanılır.
          // await ifadesi, API'den gelen yanıtı bekler ve response değişkenine atar.
          tempArr.push(response);
          // API'den alınan her bir iş ilanı yanıtı tempArr dizisine eklenir. Bu dizide, kullanıcı tarafından başvurulmuş tüm iş ilanları biriktirilir.
          jobs.setAppliedJobs([...tempArr]);
          // Bu diziyi daha sonra jobs.setAppliedJobs ile global duruma kaydeder. Bu, tüm iş ilanı verilerinin uygulama genelinde erişilebilir olmasını sağlar.
        } catch (error) {
          console.warn(error);
        }
      });
    };

    const fetchData = async () => {
      await Promise.allSettled([getAppliedJobs()]);
      setLoading(true);
      // fetchData fonksiyonu, bu işlemin tamamlanmasını bekler ve ardından yükleme durumunu true olarak ayarlar, yani veriler artık yüklenmiş demektir.
    };

    fetchData();
  }, []);

  if (!loading) {
    return <Loading />;
    // Eğer veriler hala yükleniyorsa (loading === false), Loading bileşeni render edilir ve kullanıcıya bir yükleme animasyonu gösterilir.
  }

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.profile}>
        <img src={auth.userInfo.user.profileImage} alt="icon" />
        <span className={styles.title}>{auth.userInfo.user.email}</span>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{t("jobs.title")} </div>
        <div className={styles.content}>
          {jobs.appliedJobs.length > 0 &&
            jobs.appliedJobs.map((job) => (
              <div className={styles.job} key={job.id}>
                <div className={styles.title}>{job.name}</div>
                <div className={styles.jobInfo}>
                  <span className={styles.title}>
                    {t("jobs.companyname")}:{" "}
                  </span>
                  <span>{job.companyName}</span>
                </div>
                <div className={styles.jobInfo}>
                  <span className={styles.title}>{t("jobs.location")}: </span>
                  <span>{job.location} </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

interface Props {
  className?: string;
}
