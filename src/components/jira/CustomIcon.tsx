import { IconType } from 'react-icons';

interface CustomIconProps {
  Icon: IconType;
  size?: number;
  color?: string;
}

export const CustomIcon = ({ Icon, size = 24, color = 'black' }: CustomIconProps) => {
  return <Icon size={size} color={color} />;
};
