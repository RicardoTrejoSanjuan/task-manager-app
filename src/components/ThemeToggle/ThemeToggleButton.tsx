import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { toggleTheme } from '../../store/slices';

export const ThemeToggleButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className='flex items-center gap-2 p-2 text-black dark:text-white rounded-lg transition-all'>
      {theme === 'dark' ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
      <span className='text-sm'>{theme === 'dark' ? 'light' : 'dark'}</span>
    </button>
  );
};
