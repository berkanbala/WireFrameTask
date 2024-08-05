import classNames from "classnames";
import styles from "./button.module.scss";

export const Button = (props: Props) => {
  const { type, className, text, disabled } = props;

  return (
    <button
      type={type}
      className={classNames(
        styles.container,
        className,
        disabled && styles.disabled
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

interface Props {
  type: any;
  className?: string;
  text: string;
  disabled: boolean;
}
