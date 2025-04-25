import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const className = 'dark';
    const bodyClass = document.documentElement.classList;
    if (isDark) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme };
};
