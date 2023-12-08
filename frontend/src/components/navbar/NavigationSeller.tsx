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
        <Link to=''>
          <BsShop className='w-6 h-6' />
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
