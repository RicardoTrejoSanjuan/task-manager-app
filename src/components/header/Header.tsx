import { ThemeToggleButton } from '../ThemeToggle/ThemeToggleButton';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 z-20 flex items-center justify-between
      pr-8 pl-6 bg-slate-200 dark:bg-gray-900
      border-b border-slate-300 dark:border-gray-800`}>
      <Logo />
      <ThemeToggleButton />
    </header>
  );
};
