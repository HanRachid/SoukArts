import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import Searchbar from '../components/Searchbar';
import Navigation from '../components/Navigation';

export default function NavBar() {
  return (
    <div>
      <div className='flex justify-around items-center '>
        <div className='flex-col w-1/3 relative '>
          <Searchbar />
          <div className=' w-full border-b-2 border-colorBlack p-3'></div>
        </div>
        <Link to='/'>
          <img src={logolight} alt='' className='pt-12 w-80' />
        </Link>
        <div className='w-1/3'>
          <Navigation />
          <div className=' w-full border-b-2 border-colorBlack p-2'></div>
        </div>
      </div>
    </div>
  );
}
