import Homenavigation from './HomeNavigation';
import heart from '../assets/navbar/heart.svg';
import cart from '../assets/navbar/cart.svg';
import {Link} from 'react-router-dom';
export default function Navigation() {
  return (
    <>
      <div className='flex items-center justify-between p-4 h-10 '>
        <Homenavigation />

        <Link to='/'>Become a Seller</Link>
        <Link to='/'>
          <img src={heart} className='w-6' alt='heart' />
        </Link>
        <Link to='/'>
          <img src={cart} className='w-6' alt='cart' />
        </Link>
        <div className='flex gap-3'>
          <Link to='/'>Login</Link>
          <span>|</span>
          <Link to='/'>Join In</Link>
        </div>
      </div>
    </>
  );
}
