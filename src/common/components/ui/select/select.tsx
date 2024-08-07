import "./select.scss";
import styles from "./select.module.scss";
import classNames from "classnames";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

export const UISelect = (props: Props) => {
  const { label, value, options, onChange, className, disabled, placeholder } =
    props;

  const { t } = useTranslation("translations");

  return (
    <div className={classNames(styles.container, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <Select
        placeholder={placeholder ?? "Choose"}
        className={styles.select}
        onChange={onChange}
        value={value}
        options={options}
        disabled={disabled}
        showSearch
        notFoundContent={<span>{t("navbar.notfound")}</span>}
      />
    </div>
  );
};

interface Props {
  placeholder?: string;
  label?: string;
  value: any;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string, option: any) => void;
  className?: string;
  disabled: boolean;
}
