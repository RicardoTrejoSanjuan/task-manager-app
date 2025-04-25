import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Logo = () => {
  const { isOpen } = useSelector((state: RootState) => state.sideMenu);

  return (
    <h1 className='font-bold text-2xl leading-5'>
      {isOpen ? (
        <>
          <span className='text-gray-800 dark:text-white'>Task </span>
          <span className='text-indigo-800 dark:text-indigo-600'>Manager</span>
        </>
      ) : (
        <>
          <span className='text-gray-800 dark:text-white text-2xl'>T</span>
          <span className='text-indigo-800 dark:text-indigo-600 text-2xl'>M</span>
        </>
      )}
    </h1>
  );
};
