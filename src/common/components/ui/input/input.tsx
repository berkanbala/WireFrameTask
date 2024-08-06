import classNames from "classnames";
import styles from "./input.module.scss";

export const Input = (props: Props) => {
  const {
    type,
    value,
    onChange,
    name,
    className,
    placeholder,
    label,
    disabled,
    onKeyDown,
  } = props;

  return (
    <div
      className={classNames(
        styles.container,
        className,
        disabled && styles.disabled
      )}
    >
      {label && <div className={styles.label}>{label}</div>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

interface Props {
  onKeyDown?: any;
  type: string;
  name: string;
  value: string;
  onChange: any;
  className?: any;
  placeholder?: string;
  label?: string;
  disabled: boolean;
}
