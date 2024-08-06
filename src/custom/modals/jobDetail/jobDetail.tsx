import { Button } from "../../../common/components/ui/button/button";
import styles from "./jobDetail.module.scss";
import Iconx from "../../../assets/media/icons/x.png";
import { useEffect, useState } from "react";
import { KeyWord } from "./keyWord";
import { getJobById, postJobApply } from "../../../common/services/jobs";
import { toast } from "react-toastify";
import { Loading } from "../../../common/components/ui/loading/loading";

export const JobDetail = (props: Props) => {
  const { setVisible, id } = props;
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = null as any;
    };
  }, []);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const response = await getJobById(id);
        setData(response);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
      }
    };

    getJobDetail();
  }, []);

  const handleApply = async () => {
    try {
      setSubmitLoading(true);
      await postJobApply(id);
      toast.success("Successfully Applied.");
    } catch (error) {
      console.warn(error);
    } finally {
      setSubmitLoading(false);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => setVisible(false);

  const renderContent = () => {
    if (!loading) {
      return <Loading />;
    }

    return (
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div>
            <span>Company Name:</span>
            {data.companyName}
          </div>
          <div>
            <span>Job Name:</span> <span>{data.jobName}</span>
          </div>
          <div>
            <span>Created At:</span>
            <span>{data.createdAt}</span>
          </div>
          <div>
            <span>Location:</span>
            <span>{data.location}</span>
          </div>
          <div className={styles.keyword}>
            <span>Keyword:</span>
            <div className={styles.tags}>
              {data.keywords.map((keyword: string, index: number) => (
                <KeyWord className={styles.tag} key={index} data={keyword} />
              ))}
            </div>
          </div>
          <div>
            <span>Salary:</span>
            <span>{data.salary}</span>
          </div>
          <div className={styles.description}>
            <span>Job Description:</span>
            <div className={styles.text}>{data.description}</div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button
            disabled={false}
            type="button"
            text="Cancel"
            onClick={handleCloseModal}
          />
          <Button
            disabled={submitLoading}
            type="button"
            text="Apply"
            onClick={handleApply}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>Apply Job</div>
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
