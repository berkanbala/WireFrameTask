import styles from "./job.module.scss";
import IconBag from "@assets/media/icons/bag.svg";
import { Tag } from "./tag";
import { Button } from "@common/components/ui/button/button";
import { useTranslation } from "react-i18next";

export const Job = (props: Props) => {
  const {
    name,
    location,
    salary,
    description,
    keywords,
    setId,
    id,
    setVisible,
  } = props;

  const { t } = useTranslation("translations");

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={IconBag} alt="icon" />
        </div>
        <div className={styles.leftWrapper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.location}>
            {t("modals.location")}: {location}
          </div>
          <div className={styles.salary}>
            {t("modals.salary")}: {salary}{" "}
          </div>
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
          text={t("modals.detail")}
          disabled={false}
          onClick={() => {
            // Detay Düğmesi: Kullanıcıya iş ilanının detaylarını gösteren bir düğme sunar. Kullanıcı düğmeye tıkladığında:
            setVisible(true);
            // setVisible(true) ile modal görünür hale getirilir.
            setId(id);
            // setId(id) ile seçilen iş ilanının ID'si ayarlanır.
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
  setId: (id: string) => void;
  setVisible: (visible: boolean) => void;
  id: string;
}
