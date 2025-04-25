import type { IconType } from 'react-icons';
import { IoSpeedometerOutline, IoListOutline, IoAccessibilityOutline } from 'react-icons/io5';

export interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    subTitle: 'dashboard',
    href: '/',
    Icon: IoSpeedometerOutline,
  },
  {
    title: 'Task',
    subTitle: 'task',
    href: '/task',
    Icon: IoListOutline,
  },
  {
    title: 'About me',
    subTitle: 'about-me',
    href: '/about-me',
    Icon: IoAccessibilityOutline,
  },
];
