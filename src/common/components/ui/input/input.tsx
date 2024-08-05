import styles from "./input.module.scss";

export const Input = ({
  type,
  value,
  onChange,
  name,
  className,
  placeholder,
  label,
}: Props) => {
  return (
    <div className={styles.container}>
      {label && <div>{label}</div>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: any;
  className?: any;
  placeholder?: string;
  label?: string;
}
