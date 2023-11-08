import Homenavigation from './HomeNavigation';
import heart from '../assets/navbar/heart.svg';
import cart from '../assets/navbar/cart.svg';
import {Link} from 'react-router-dom';
import Button from './Button';
export default function Navigation() {
  return (
    <>
      <div className='flex items-center justify-between p-4 h-10 '>
        <Homenavigation />

        <Link to='/'>
          <span className='font-secondary hover:text-colorGold'>
            Become a Seller
          </span>
        </Link>
        <Link to='/'>
          <img src={heart} className='w-6 ' alt='heart' />
        </Link>
        <Link to='/'>
          <img src={cart} className='w-6' alt='cart' />
        </Link>
        <div className='flex gap-3'>
          <Link to='/'>Login</Link>
          <span>|</span>
          <Link to='/'>Join In</Link>
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
