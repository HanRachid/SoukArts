import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import Searchbar from '../components/Searchbar';
import Navigation from '../components/Navigation';

export default function NavBar() {
  return (
    <div>
      <div className='flex justify-around items-center '>
        <div className='flex-col w-1/3 relative bg-opacity-75'>
          <Searchbar />
        </div>
        <Link to='/'>
          <img src={logolight} alt='' />
        </Link>
        <div className='w-1/3'>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
