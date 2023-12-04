import {useState} from 'react';
import Logo from '../assets/logolight.svg';
import {useLocation} from 'react-router-dom';
import {IoNotifications, IoSearch} from 'react-icons/io5';
import {RiMenu2Line} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';
import {router} from '../App';
import {DashboardLink} from '../../types';

export default function DashboardLayout({
  Component,
  pageTitle,
  links,
}: {
  Component: React.ComponentType;
  pageTitle: String;
  links: DashboardLink[];
}) {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const activeLinkStyle = (title: string) => {
    const route = title === 'Dashboard' ? 'dashboard' : 'dashboard/' + title;

    if (
      route === 'dashboard/Products' &&
      currentPage === 'Dashboard/products/addNewProduct'
    )
      return 'bg-gradient-to-r from-colorBrown to-colorGold text-white';

    return currentPage.toLowerCase() === route.toLowerCase()
      ? 'bg-gradient-to-r from-colorBrown to-colorGold text-white'
      : 'text-black';
  };
  return (
    <>
      {showSidebar && (
        <div
          onClick={toggleSidebar}
          className='w-screen h-screen bg-black/50 backdrop-blur-sm absolute z-10'
        />
      )}
      <aside
        className={`fixed transition-all duration-300 top-0 z-20 ${
          showSidebar ? 'ml-0' : 'ml-[-100%]'
        } 
        flex h-screen w-5/6 flex-col justify-between border-r bg-white px-6 pb-3 
        transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`}
      >
        <div>
          <div className='-mx-6 px-6 py-4 w-full flex justify-center'>
            <img src={Logo} className='w-32' alt='tailus logo' />
          </div>
          <ul className='mt-8 space-y-2 tracking-wide'>
            {links.map(({icon, title, path}: DashboardLink) => (
              <li key={title} className='cursor-pointer'>
                <div
                  onClick={() => {
                    router.navigate(path);
                  }}
                  className={`${activeLinkStyle(
                    title
                  )} relative flex items-center space-x-4 rounded-xl px-4 py-3`}
                >
                  {icon}
                  <span className='-mr-1 font-medium'>{title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='-mx-6 flex items-center justify-between border-t px-6 pt-4'>
          <button className='group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600'>
            <FiLogOut />
            <span className='group-hover:text-gray-700'>Logout</span>
          </button>
        </div>
      </aside>
      <div className='mb-6 lg:max-w-[75%] xl:max-w-[80%] 2xl:max-w-[85%] ml-auto bg-gray-50'>
        {/* TODO: HADI NAVBAR */}
        <nav className='relative top-0 h-16 border-b bg-white lg:py-2.5 z-999'>
          <div className='flex items-center justify-between space-x-4 px-6 2xl:container'>
            <h5 className='text-2xl font-medium text-colorBlack lg:block hidden capitalize font-primary'>
              {pageTitle}
            </h5>
            <button
              onClick={toggleSidebar}
              className='-ml-2 h-16 w-12 border-r lg:hidden'
            >
              <RiMenu2Line className='text-2xl' />
            </button>
            <div className='flex space-x-4'>
              {/*search bar */}
              <div className='md:block'>
                <div className='relative flex items-center text-gray-400 focus-within:text-colorBrown'>
                  <span className='absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 '>
                    <IoSearch />
                  </span>
                  <input
                    type='text'
                    placeholder='Search here'
                    className='outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-colorBrown'
                  />
                </div>
              </div>
              {/*/search bar */}

              <button
                aria-label='chat'
                className='h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 flex items-center justify-center'
              >
                <BiMessageSquareDetail />
              </button>
              <button
                aria-label='notification'
                className='h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 flex items-center justify-center'
              >
                <IoNotifications />
              </button>
            </div>
          </div>
        </nav>
        {/* TODO: HADI BLAST CONTENT */}
        <div className='px-6 pt-6 2xl:container bg-gray-50'>
          <div className='flex flex-col items-center justify-center max-w-7xl mx-auto'>
            <Component />
          </div>
        </div>
      </div>
    </>
  );
}
