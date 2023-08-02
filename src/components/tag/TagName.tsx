type TapProps = {
  children?: React.ReactNode;
};
const TagName: React.FC<TapProps> = ({ children }: TapProps) => {
  return <p>{children}</p>;
};
export default TagName;
