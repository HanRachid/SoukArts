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
          <span className='font-secondary pb-0.5 border-b-2 border-colorBeigeLight/0 hover:text-colorGold hover:border-colorGold'>
            Become a Seller
          </span>
        </Link>
        <Link to='/'>
          <HeartSVG className='w-6 font-secondary hover:fill-colorGold' />
        </Link>
        <Link to='/'>
          <CartSVG className='w-6 font-secondary hover:fill-colorGold' />
        </Link>
        <div className='flex gap-3'>
          <Link to='/login'>
            <span className='font-secondary pb-0.5 border-b-2 border-colorBeigeLight/0 hover:text-colorGold hover:border-colorGold'>
              Login
            </span>
          </Link>
          <span>|</span>
          <Link to='/register'>
            <span className='font-secondary pb-0.5 border-b-2 border-colorBeigeLight/0 hover:text-colorGold hover:border-colorGold'>
              Sign In
            </span>
          </Link>
        </div>
        <Link to='/'>
          <Button className='bg-colorGold text-white w-fit pl-3 pr-3 p-1 rounded-tr-lg rounded-bl-lg hover:bg-opacity-70'>
            Save 25%
          </Button>
        </Link>
      </div>
    </>
  );
}
