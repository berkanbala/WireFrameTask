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
      const tempArr: IJobsData[] = [];
      auth.userInfo.user.appliedJobs?.forEach(async (id: string) => {
        try {
          const response = await getJobById(id);
          tempArr.push(response);
          jobs.setAppliedJobs([...tempArr]);
        } catch (error) {
          console.warn(error);
        }
      });
    };

    const fetchData = async () => {
      await Promise.allSettled([getAppliedJobs()]);
      setLoading(true);
    };

    fetchData();
  }, []);

  if (!loading) {
    return <Loading />;
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
