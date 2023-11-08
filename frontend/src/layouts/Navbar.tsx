import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import Searchbar from '../components/Searchbar';

export default function NavBar() {
  return (

    <div className='relative'>
      <div className='flex justify-around items-center '>
        <Searchbar />

        <Link to='/'>
          <img src={logolight} alt='' />
        </Link>
        <div className='w-1/3'>
          <Link to='/'>Home </Link>
        </div>
      </div>
    </div>
  );
}
