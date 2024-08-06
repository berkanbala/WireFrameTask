import styles from "./job.module.scss";
import IconBag from "../../../assets/media/icons/bag.svg";
import { Button } from "../../../common/components/ui/button/button";
import { Tag } from "./tag";

export const Job = (props: Props) => {
  const { name, location, salary, description, keywords } = props;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={IconBag} alt="icon" />
        </div>
        <div className={styles.leftWrapper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.location}>Location: {location}</div>
          <div className={styles.salary}>Salary: {salary} </div>
          <div className={styles.tags}>
            {keywords.map((tag: string, index: number) => (
              <Tag key={index} tag={tag} />
            ))}
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
  );
};

interface Props {
  name: string;
  location: string;
  salary: number;
  description: string;
  keywords: string[];
}
