/// <reference types="vite-plugin-svgr/client" />
import Homenavigation from './HomeNavigation';
import HeartSVG from '../assets/navbar/heart.svg?react';
import CartSVG from '../assets/navbar/cart.svg?react';
import {Link} from 'react-router-dom';
import Button from './Button';
export default function Navigation(): React.ReactElement {
  return (
    <>
      <div className='flex items-center justify-between p-4 h-10 '>
        <Homenavigation />

        <Link to='/'>
          <button>
            <div className='group flex w-full items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
              <span className='relative z-10'>
                Become a seller
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
              </span>
            </div>
          </button>
        </Link>
        <Link to='/'>
          <HeartSVG className='w-6 font-secondary hover:fill-colorGold' />
        </Link>
        <Link to='/'>
          <CartSVG className='w-6 font-secondary hover:fill-colorGold' />
        </Link>
        <div className='flex gap-3 items-center'>
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
        </div>
        <Link to='/'>
          <Button className='bg-colorGold text-white w-fit pl-3 pr-3 p-1 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 '>
            Save 25%
          </Button>
        </Link>
      </div>
    </>
  );
}
