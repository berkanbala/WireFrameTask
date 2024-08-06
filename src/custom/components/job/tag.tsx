import styles from "./job.module.scss";

export const Tag = (props: Props) => {
  const { tag } = props;

  return <div className={styles.tag}>{tag} </div>;
};

interface Props {
  tag: string;
}
