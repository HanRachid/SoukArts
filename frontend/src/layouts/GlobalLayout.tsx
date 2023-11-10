import {Outlet} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

export default function GlobalLayout({hasLayout}: {hasLayout: boolean}) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        {hasLayout && <NavBar />}
        <div className='flex-1 flex flex-col'>
          <Outlet />
        </div>
        {hasLayout && <Footer />}
      </div>
    </>
  );
}
