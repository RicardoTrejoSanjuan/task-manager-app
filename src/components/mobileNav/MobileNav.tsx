import { useState } from 'react';
import { menuItems } from '../sidemenu/sideMenuData';

export const MobileNav = () => {
  const [selected, setSelected] = useState('/dashboard');

  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-slate-300 border-t dark:border-gray-700 shadow-md z-50 md:hidden'>
      <ul className='flex justify-around items-center h-16'>
        {menuItems.map(({ title, href, Icon }) => {
          const isActive = selected === href;
          return (
            <li key={href}>
              <button
                onClick={() => setSelected(href)}
                className={`flex flex-col items-center text-xs focus:outline-none transition-colors duration-200 ${
                  isActive ? 'text-cyan-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'
                }`}>
                <Icon className='w-6 h-6 mb-1' />
                <span className='h-4 leading-4'>{title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
