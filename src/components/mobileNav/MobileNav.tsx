import { menuItems } from '../sidemenu/sideMenuData';
import { NavLink } from 'react-router-dom';

export const MobileNav = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-slate-300 border-t dark:border-gray-700 shadow-md z-50 md:hidden'>
      <ul className='flex justify-around items-center h-16'>
        {menuItems.map(({ title, href, Icon }) => {
          return (
            <li key={href}>
              <NavLink
                key={href}
                to={href}
                end
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs focus:outline-none transition-colors duration-200 ${
                    isActive ? 'text-cyan-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'
                  }`
                }>
                <Icon className='w-6 h-6 mb-1' />
                <span className='h-4 leading-4'>{title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
