export const Button = (props: Props) => {
  const { type, className, text, disabled } = props;

  return (
    <button type={type} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

interface Props {
  type?: any;
  className?: string;
  text?: any;
  disabled?: any;
}
