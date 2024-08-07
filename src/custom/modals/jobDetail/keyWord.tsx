export const KeyWord = (props: Props) => {
  const { data, className } = props;

  return <div className={className}>{data}</div>;
};

interface Props {
  className: string;
  data: string;
}
