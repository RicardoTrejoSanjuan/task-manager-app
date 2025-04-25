import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';
import { menuItems } from './sideMenuData';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/slices';

export const SideMenu = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sideMenu);

  return (
    <div
      id='menu'
      className={`flex flex-col justify-between transition-all pb-8
      ${isOpen ? 'w-80 px-6' : 'w-20 px-2'}
      bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-slate-300
      h-full z-10 border-r border-slate-300 dark:border-gray-950`}>
      <div>
        <nav id='nav' className='flex flex-col gap-4 pt-2'>
          {menuItems.map(item => (
            <SideMenuItem key={item.href} {...item} isOpen={isOpen} />
          ))}
        </nav>
      </div>

      <button
        onClick={() => dispatch(toggleMenu())}
        className={`flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-all p-2
          ${isOpen ? 'justify-center gap-2' : 'justify-center'}`}>
        {isOpen ? <FiChevronsLeft size={20} /> : <FiChevronsRight size={20} />}
      </button>
    </div>
  );
};
