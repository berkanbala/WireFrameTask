import { Select } from "antd";
import styles from "./select.module.scss";
import classNames from "classnames";

export const UISelect = (props: Props) => {
  const {
    id,
    label,
    value,
    options,
    onChange,
    className,
    disabled,
    placeholder,
  } = props;

  return (
    <div className={classNames(styles.container, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <Select
        placeholder={placeholder ?? "Choose"}
        className={styles.select}
        onChange={onChange}
        value={value}
        options={options}
        id={id}
        disabled={disabled}
        showSearch
        notFoundContent={<span>Not found data</span>}
      />
    </div>
  );
};

interface Props {
  id?: any;
  placeholder?: string;
  label?: string;
  value: any;
  options: any;
  onChange: any;
  className?: string;
  disabled: boolean;
}
