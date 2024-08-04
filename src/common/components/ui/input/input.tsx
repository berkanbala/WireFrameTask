export const Input = ({ type, className, placeholder }: Props) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};

interface Props {
  type: string;
  className?: any;
  placeholder?: string;
}
