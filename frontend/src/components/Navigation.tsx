/// <reference types="vite-plugin-svgr/client" />
import HomeNavigation from './HomeNavigation';
import HeartSVG from '../assets/navbar/heart.svg?react';
import CartSVG from '../assets/navbar/cart.svg?react';
import {Link} from 'react-router-dom';
import Button from './Button';
import {logoutUser, refreshLog} from '../api/auth';
import {useDispatch} from 'react-redux';
import ProfileDropdown from './ProfileDropdown';
import {useEffect, useState} from 'react';
import {User} from '../../types';

export default function Navigation(): React.ReactElement {
  const dispatch = useDispatch();
  const [user, setUser] = useState<{id: string; name: string} | null>(null);

  useEffect(() => {
    refreshLog({} as User, dispatch).then((result) => {
      if (result.user) {
        setUser(result.user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <>
      <div className='flex items-center gap-6 w-full'>
        <div className="">
        <HomeNavigation />
        </div>
        

        <Link to='/'>
          <button>
            <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
              <span className='z-10 xl:text-[12px] 2xl:text-[16px]'>
                Become a seller
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
              </span>
            </div>
          </button>
        </Link>

       <div className='flex items-center gap-2'>
       <Link to='/'>
          <HeartSVG className='xl:w-4 2xl:w-6 font-secondary hover:fill-colorGold' />
        </Link>
        <Link to='/'>
          <CartSVG className='xl:w-4 2xl:w-6 font-secondary hover:fill-colorGold' />
        </Link>
       </div>
    

       <div className="flex items-center gap-0">
       {user ? (
          <>
            <button onClick={() => logoutUser(dispatch)}>
              <div className='group flex w-full items-center px-2 py-2 text-xs font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                <span className='z-10 xl:text-[12px] 2xl:text-[16px]'>
                  Logout
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                </span>
              </div>
            </button>
            <ProfileDropdown />
          </>
        ) : (
          <>
            <Link to='/login'>
              <button>
                <div className='group flex w-full items-center px-2 py-2 text-xs font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                  <span className='z-10 xl:text-[12px] 2xl:text-[16px]'>
                    Login
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                  </span>
                </div>
              </button>
            </Link>
            <span>|</span>
            <Link to='/register'>
              <button>
                <div className='group flex w-full items-center px-2 py-2 text-xs font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                  <span className='z-10 xl:text-[12px] 2xl:text-[16px]'>
                    Sign In
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                  </span>
                </div>
              </button>
            </Link>
          </>
        )}
       </div>
        
        <Link to='/'>
          <Button className='bg-colorGold text-white text-xs w-fit px-2 py-3 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 '>
            Save 25%
          </Button>
        </Link>
      </div>
    </>
  );
}
