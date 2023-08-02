import '@/styles/styles.scss';
import Image from 'next/image';

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  href?: string;
  icon?: any;
  active?: boolean;
  hrefLabel?: string;
};
const Card: React.FC<CardProps> = ({
  title,
  children,
  href = '',
  icon,
  active = false,
  hrefLabel = ''
}: CardProps) => {
  const type = active ? 'design-card active' : 'design-card';

  return (
    <div className={type}>
      <div>
        <h3>{title}</h3>
        <Image src={icon} width={20} height={20} alt="" />
      </div>
      <p>{children}</p>
      <a href={href} target="_blank">
        {hrefLabel}
      </a>
    </div>
  );
};
export default Card;
