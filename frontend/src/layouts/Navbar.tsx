import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
export default function NavBar() {
  return (
    <div className='relative'>
      <div className='flex justify-around items-center '>
        <div>
          <label htmlFor='select'>All categories</label>
          <select name='' id=''></select>
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
