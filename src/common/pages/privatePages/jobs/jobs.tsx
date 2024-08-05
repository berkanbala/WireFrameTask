import { Pagination } from "antd";
import styles from "./jobs.module.scss";
import { UISelect } from "../../../components/ui/select/select";
import { useState } from "react";
import { Input } from "../../../components/ui/input/input";
import { Button } from "../../../components/ui/button/button";
import IconBag from "../../../../assets/media/icons/bag.svg";

export const Jobs = () => {
  const [optionsValue, setOptionsValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  // useEffect(() => {
  //   const getAllJobs = async () => {
  //     try {
  //       const response = await getJobs({ page: 1, perPage: 10 });
  //       console.log(response);
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   };
  //   getAllJobs();
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Basic Filter</div>
        <UISelect
          disabled={false}
          placeholder="Select a Field"
          onChange={(value: any) => console.log(value)}
          options={[]}
          value={optionsValue}
        />
        <Input
          name="text"
          type="text"
          disabled={false}
          onChange={(value: any) => console.log(value)}
          value={searchValue}
          placeholder="Search"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.jobs}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img src={IconBag} alt="icon" />
            </div>
            <div className={styles.leftWrapper}>
              <div className={styles.name}>Company Name - Job Name</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate sed possimus asperiores neque optio quas. Aliquam
                reiciendis autem quo totam.
              </div>
              <div className={styles.location}>Location: Irving</div>
              <div className={styles.salary}>Salary: 2000$</div>
              <div className={styles.tags}>
                <div className={styles.tag}>ipsum</div>
                <div className={styles.tag}>dolor</div>
                <div className={styles.tag}>sit</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Button
              type="button"
              text="Detail"
              disabled={false}
              onClick={() => {
                console.log("console bas");
              }}
            />
          </div>
        </div>
      </div>
      <Pagination defaultCurrent={6} total={500} />
    </div>
  );
};
