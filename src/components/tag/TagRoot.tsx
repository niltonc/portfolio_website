type TapProps = {
  children?: React.ReactNode;
};
const TagRoot: React.FC<TapProps> = ({ children }: TapProps) => {
  return <div className="developer-intro">{children}</div>;
};
export default TagRoot;
