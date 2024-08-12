import Iconx from "@assets/media/icons/x.png";
import styles from "./jobDetail.module.scss";
import { toast } from "react-toastify";
import { Button } from "@common/components/ui/button/button";
import { KeyWord } from "./keyWord";
import { Loading } from "@common/components/ui/loading/loading";
import { IJobsData } from "@common/models/jobs";
import { useAppContext } from "@common/context/appContext";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getJobById, postJobApply } from "@common/services/jobs";

export const JobDetail = (props: Props) => {
  const { setVisible, id } = props;
  const { jobs } = useAppContext();
  const { t } = useTranslation("translations");
  const [data, setData] = useState<IJobsData>({} as IJobsData);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Bileşen yüklendiğinde, sayfanın kaydırılabilirliğini devre dışı bırakır.
    return () => {
      document.body.style.overflow = null as any;
      // Bileşen kaldırıldığında, kaydırılabilirliği geri yükler.
    };
  }, []);

  useEffect(() => {
    const getJobDetail = async () => {
      // Bileşen yüklendiğinde, getJobDetail adlı asenkron bir fonksiyon çalışır.
      try {
        const response = await getJobById(id);
        // Bu fonksiyon: getJobById fonksiyonunu çağırarak iş ilanı detaylarını alır.
        setData(response);
        // setData durumuna kaydeder.
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
        // Son olarak, setLoading(true) ile yüklemenin tamamlandığını belirtir.
      }
    };

    getJobDetail();
  }, []);

  const handleApply = async () => {
    // Kullanıcı "Başvur" butonuna tıkladığında çalışır.
    try {
      setSubmitLoading(true);
      await postJobApply(id);
      // postJobApply fonksiyonunu çağırarak iş ilanına başvuru yapar.
      toast.success("Successfully Applied.");
      jobs.setAppliedJobs([...jobs.appliedJobs, data]);
      // başvurulan iş ilanını jobs.appliedJobs listesine ekler.
    } catch (error) {
      console.warn(error);
    } finally {
      setSubmitLoading(false);
      handleCloseModal();
      // Son olarak, submitLoading durumunu false yapar ve modalı kapatır.
    }
  };

  const handleCloseModal = () => setVisible(false);

  const renderContent = () => {
    // Bileşenin içerik kısmını render eder.
    // Eğer loading durumu false ise, yükleme ekranını gösterir (<Loading />).
    // Veriler yüklendiyse, iş ilanı detaylarını (data) ve iki buton (İptal ve Başvur) gösterir.

    if (!loading) {
      return <Loading />;
    }

    return (
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div>
            <span>{t("modals.companyname")}:</span>
            {data.companyName}
          </div>
          <div>
            <span> {t("modals.jobname")}:</span> <span>{data.jobName}</span>
          </div>
          <div>
            <span>{t("modals.createdat")}:</span>
            <span>{data.createdAt}</span>
          </div>
          <div>
            <span>{t("modals.location")}:</span>
            <span>{data.location}</span>
          </div>
          <div className={styles.keyword}>
            <span>{t("modals.keyword")}:</span>
            <div className={styles.tags}>
              {data.keywords.map((keyword: string, index: number) => (
                <KeyWord className={styles.tag} key={index} data={keyword} />
              ))}
            </div>
          </div>
          <div>
            <span>{t("modals.salary")}:</span>
            <span>{data.salary}</span>
          </div>
          <div className={styles.description}>
            <span>{t("modals.jobdescription")}:</span>
            <div className={styles.text}>{data.description}</div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button
            disabled={false}
            type="button"
            text={t("modals.cancel")}
            onClick={handleCloseModal}
          />
          <Button
            disabled={submitLoading}
            type="button"
            text={t("modals.apply")}
            onClick={handleApply}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>{t("modals.applyjob")}</div>
        {renderContent()}
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};

interface Props {
  id: string;
  setVisible: (_visible: boolean) => void;
}
