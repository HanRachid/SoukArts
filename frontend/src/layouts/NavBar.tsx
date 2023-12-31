import logolight from '../assets/logolight.svg';
import {Link} from 'react-router-dom';
import lens from '../assets/navbar/lens.svg';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import HeartSVG from '../assets/navbar/heart.svg?react';
import CartSVG from '../assets/navbar/cart.svg?react';
import HomeNavigationMobile from '../components/navbar/HomeNavigationMobile';
import Searchbar from '../components/navbar/SearchBar';
import Navigation from '../components/navbar/Navigation';
import NavigationPending from '../components/navbar/NavigationPending';
import NavigationAdmin from '../components/navbar/NavigationAdmin';

import {logoutUser} from '../api/auth';
import {setLogoutState} from '../features/auth/authSlice';
import {router} from '../App';
import ProfileDropdown from '../components/navbar/ProfileDropdown';
import Button from '../components/Button';
import NavigationSeller from '../components/navbar/NavigationSeller';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) =>
    state.auth.user ? state.auth.user.user : null
  );

  const [showShop, setShowShop] = useState(false);

  const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);
  const toggleSearchbar = () => {
    setIsSearchbarVisible(!isSearchbarVisible);
  };

  return (
    <>
      {showShop && (
        <>
          <div
            onClick={() => setShowShop(false)}
            className='z-[900] w-screen h-screen absolute bg-colorBlack opacity-50 backdrop-blur-md'
          ></div>
          <div className='z-[999]'>
            <HomeNavigationMobile />
          </div>
        </>
      )}

      {/* RACHID ici serachbar ecran pc*/}
      <div className='navbar flex justify-between items-center !pt-0 !pb-0 px-4 max-w-full xl:h-24 bg-transparent border-b-2 border-colorBlack'>
        <div className='navbar-start relative xl:block hidden w-1/3'>
          <Searchbar />
        </div>

        {/* RACHID ici serachbar responsive ecran smartphone*/}
        <div className='navbar-start relative block xl:hidden xl:h-16'>
          <div
            onClick={toggleSearchbar}
            className={`w-10 h-10 rounded-md ${
              isSearchbarVisible ? 'hover:bg-colorBeigeLight' : ''
            } flex justify-center items-center`}
          >
            <img src={lens} className='w-5 h-5 opacity-90' alt='lens' />
            {isSearchbarVisible && (
              <div className='absolute top-20 left-3'>
                <Searchbar />
              </div>
            )}
          </div>
        </div>

        <Link to='/' className='navbar-center flex items-center xl:h-16'>
          <img src={logolight} alt='Logo' className='w-48 xl:w-52 xl:h-16' />
        </Link>

        {/* RACHID ici liens de navigation ecran pc*/}
        <div className='navbar-end w-1/3 xl:block hidden mt-10 pb-10'>
          {user! && user!.role! === 'Seller' && <NavigationSeller />}
          {user! && user!.role! === 'Client' && <Navigation />}
          {user! && user!.role! === 'disconnected' && <Navigation />}

          {user! && user!.role! === 'Admin' && <NavigationAdmin />}

          {user! && user!.role! === 'Pending' && <NavigationPending />}
          {(!user! || !user!.role) && <Navigation />}
        </div>

        {/* RACHID ici liens de navigation ecran smartphone*/}
        <div className='navbar-end xl:hidden flex justify-end relative'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </div>
            <ul className='menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow rounded-box w-48 -left-32 bg-colorBeigeLight'>
              <li>
                <div className='flex items-center gap-2 h-10'>
                  <Link to='/'>
                    <HeartSVG className='w-6 font-secondary hover:fill-colorGold' />
                  </Link>
                  <Link to='/Cart'>
                    <CartSVG className='w-6 font-secondary hover:fill-colorGold' />
                  </Link>
                </div>
              </li>

              <li>
                {user ? (
                  <div>
                    <button
                      onClick={() =>
                        logoutUser().then(() => {
                          dispatch(setLogoutState);
                          router.navigate('/');
                        })
                      }
                    >
                      <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                        <span className='z-10'>
                          Logout
                          <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                        </span>
                      </div>
                    </button>
                    <img
                      src={
                        user && user.profile_image
                          ? user.profile_image.url
                          : 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                      }
                      className='inline-block h-10 w-10 rounded-full border-2'
                      alt='imgProfile'
                    />
                  </div>
                ) : (
                  <Link to='/login'>
                    <button>
                      <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                        <span className='z-10 text-[16px]'>
                          Login
                          <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                        </span>
                      </div>
                    </button>
                  </Link>
                )}
              </li>

              <li>
                <Link to='/register'>
                  <button>
                    <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                      <span className='z-10 text-[16px]'>
                        Sign In
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                      </span>
                    </div>
                  </button>
                </Link>
              </li>

              <li onClick={() => setShowShop(true)}>
                <p className='flex w-full items-center ml-3 px-2 py-2 text-[16px] font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                  Shop
                </p>
              </li>
              <li>
                <Link to='/'>
                  <button>
                    <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                      <span className='z-10 text-[16px]'>
                        Become a seller
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                      </span>
                    </div>
                  </button>
                </Link>
              </li>

              <li>
                <Link to='/'>
                  <Button className='bg-colorGold text-white text-xs w-fit px-2 py-3 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 '>
                    Save 25%
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
