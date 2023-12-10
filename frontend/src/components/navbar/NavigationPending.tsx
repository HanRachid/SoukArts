/// <reference types="vite-plugin-svgr/client" />
import HeartSVG from '../../assets/navbar/heart.svg?react';
import CartSVG from '../../assets/navbar/cart.svg?react';
import BottomIcon from '../../assets/icons/bottomIcon.png';
import avatarNavbar from '../../assets/navbar/avatarNavbar.svg';
import NavbarSellerProfile from './NavbarSellerProfile';
import {useState} from 'react';
import {BsShop} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Button from '../Button';
import Homenavigation from './HomeNavigation';

const NavigationSeller = () => {
  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <div className='flex items-center gap-10 w-full'>
        <div className=''>
          <Homenavigation />
        </div>

        <div className='flex items-center gap-2'>
          <Link to='/'>
            <HeartSVG className='xl:w-4 2xl:w-6 font-secondary hover:fill-colorGold' />
          </Link>
          <Link to='/'>
            <CartSVG className='xl:w-4 2xl:w-6 font-secondary hover:fill-colorGold' />
          </Link>
        </div>
        <Link to='/pending'>
          <button>
            <div className='group flex w-full items-center px-2 py-2  text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
              <span className=' z-10'>
                Awaiting Approval
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
              </span>
            </div>
          </button>
        </Link>

        <div className='flex items-center' onClick={handleProfileClick}>
          <img src={avatarNavbar} className='w-8 h-8' alt='imgProfile' />
          <img src={BottomIcon} className='w-5 h-5' alt='BottomIcon' />
        </div>

        <Link to='/'>
          <Button className='bg-colorGold text-white text-xs w-fit px-2 py-3 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 '>
            Save 25%
          </Button>
        </Link>
      </div>

      {showProfile && <NavbarSellerProfile />}
    </>
  );
};

export default NavigationSeller;
