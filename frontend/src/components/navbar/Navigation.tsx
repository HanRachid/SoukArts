/// <reference types="vite-plugin-svgr/client" />
import Homenavigation from './HomeNavigation';
import HeartSVG from '../../assets/navbar/heart.svg?react';
import CartSVG from '../../assets/navbar/cart.svg?react';
import {Link} from 'react-router-dom';
import Button from '../Button';
import BottomIcon from '../../assets/icons/bottomIcon.png';
import avatarNavbar from '../../assets/navbar/avatarNavbar.svg';
import {useDispatch, useSelector} from 'react-redux';
import NavbarProfile from './NavbarProfile';
import {useState} from 'react';
export default function Navigation(): React.ReactElement {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <>
      <div className='flex items-center justify-between p-4 h-10 '>
        <Homenavigation />

        <Link to='/becomeaseller'>
          <button>
            <div className='group flex w-full items-center px-2 py-2  text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
              <span className=' z-10'>
                Become a seller
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
              </span>
            </div>
          </button>
        </Link>

        <Link to='/Favorite'>
          <HeartSVG className='w-6 font-secondary hover:fill-colorGold' />
        </Link>
        <Link to='/Cart'>
          <CartSVG className='w-6 font-secondary hover:fill-colorGold' />
        </Link>
        {user && user.user.role === 'Client' ? (
          <>
            <div className='flex items-center' onClick={handleProfileClick}>
              <img
                className='inline-block h-10 w-10 rounded-full border-2 border-black-600'
                src={
                  user.user.profile_image
                    ? user.user.profile_image.url
                    : 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                }
                alt=''
              />
              <img src={BottomIcon} className='w-5 h-5' alt='BottomIcon' />
            </div>
            {showProfile && <NavbarProfile />}
          </>
        ) : (
          <>
            <Link to='/login'>
              <button>
                <div className='group flex w-full items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                  <span className='z-10'>
                    Login
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                  </span>
                </div>
              </button>
            </Link>
            <span>|</span>
            <Link to='/register'>
              <button>
                <div className='group flex w-full items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                  <span className=' z-10'>
                    Sign In
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                  </span>
                </div>
              </button>
            </Link>
          </>
        )}

        <Link to='/'>
          <Button className='bg-colorGold text-white w-fit pl-3 pr-3 p-1 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 '>
            Save 25%
          </Button>
        </Link>
      </div>
    </>
  );
}
