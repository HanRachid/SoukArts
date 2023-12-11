/// <reference types="vite-plugin-svgr/client" />
import HeartSVG from '../../assets/navbar/heart.svg?react';
import CartSVG from '../../assets/navbar/cart.svg?react';
import BottomIcon from '../../assets/icons/bottomIcon.png';
import avatarNavbar from '../../assets/navbar/avatarNavbar.svg';
import NavbarProfile from './NavbarProfile';
import {useEffect, useState} from 'react';
import {BsShop} from 'react-icons/bs';
import {MdOutlineAdminPanelSettings} from 'react-icons/md';

import {Link} from 'react-router-dom';
import Button from '../Button';
import Homenavigation from './HomeNavigation';
import {useSelector} from 'react-redux';
import {User} from '../../../types';

const NavigationSeller = () => {
  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  const [userInfo, setUserInfo] = useState({} as User); // [1
  const user = useSelector((state: any) => state.auth.user);
  useEffect(() => {
    setUserInfo(user.user);
  }, [user]);
  return (
    <>
      <div className='flex items-center justify-around w-full'>
        <div className=''>
          <Homenavigation />
        </div>

        <div className='flex items-center gap-12'>
          <Link to='/'>
            <HeartSVG className='xl:w-4 2xl:w-6 font-secondary hover:fill-colorGold' />
          </Link>
          <Link to='/'>
            <CartSVG className='xl:w-4 2xl:w-6 font-secondary hover:fill-colorGold' />
          </Link>
        </div>
        <Link to='/Dashboard'>
          <BsShop className='w-6 h-6' />
        </Link>
        <Link to='/Admin'>
          <MdOutlineAdminPanelSettings className='w-8 h-8' />
        </Link>

        <div className='flex items-center gap-3' onClick={handleProfileClick}>
          <img
            className='inline-block h-10 w-10 rounded-full border-2 border-black-600'
            src={
              user.user
                ? user.user.profile_image.url
                : 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
            }
            alt=''
          />
          <img src={BottomIcon} className='w-5 h-5' alt='BottomIcon' />
        </div>

        <Link to='/'>
          <Button className='bg-colorGold text-white text-xs w-fit px-2 py-3 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 '>
            Save 25%
          </Button>
        </Link>
      </div>

      {showProfile && <NavbarProfile />}
    </>
  );
};

export default NavigationSeller;
