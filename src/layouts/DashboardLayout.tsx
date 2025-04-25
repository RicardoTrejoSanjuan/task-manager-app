import { Outlet } from 'react-router-dom';
import { SideMenu } from '../components/sidemenu/SideMenu';
import { useIsMobile } from '../hooks/useIsMobile';
import { MobileNav } from '../components/mobileNav/MobileNav';
import { Header } from '../components/header/Header';

export const DashboardLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className='page w-screen h-screen overflow-hidden antialiased'>
      <Header />

      <div className='flex flex-row w-full h-full pt-16'>
        {!isMobile && <SideMenu />}
        <main className='flex-1 h-full overflow-y-auto'>
          <Outlet />
        </main>
        {isMobile && <MobileNav />}
      </div>
    </div>
  );
};
