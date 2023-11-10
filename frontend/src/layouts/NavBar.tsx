import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';

export default function NavBar() {
  return (
    <div>
      <div className='flex justify-around items-center '>
        <div className='flex-col w-1/3 relative '>
          <SearchBar />
          <div className=' w-full border-b-2 border-colorBlack p-3'></div>
        </div>
        <Link to='/'>
          <img
            src={logolight}
            alt=''
            className='pt-12 w-80 hover:scale-[1.02] transition-all duration-300'
          />
        </Link>
        <div className='w-1/3'>
          <Navigation />
          <div className=' w-full border-b-2 border-colorBlack p-2'></div>
        </div>
      </div>
    </div>
  );
}
