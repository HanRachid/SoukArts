import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import Searchbar from '../components/Searchbar';
import Searchdropdown from '../components/Searchdropdown';
import {useState} from 'react';

export default function NavBar() {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div>
      <div className='flex justify-around items-center '>
        <div className='flex-col h-8 w-2/3 relative'>
          <Searchbar setIsDropDown={setIsDropDown} isDropDown={isDropDown} />
          {isDropDown && <Searchdropdown />}
        </div>
        <Link to='/'>
          <img src={logolight} alt='' />
        </Link>
        <div>
          <Link to='/'>Home </Link>
        </div>
      </div>
    </div>
  );
}
