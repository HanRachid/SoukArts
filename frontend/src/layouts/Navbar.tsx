import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import favicon from '../assets/fav1.svg';
export default function NavBar() {
  return (
    <>
      <div className='flex justify-around items-center  bg'>
        <div>
          <label htmlFor='select'>All categories</label>
          <select name='' id=''></select>
        </div>
        <Link to='/'>
          <img src={logolight} alt='' />
        </Link>
        <div>
          <Link to='/'>Home </Link>
          <img src={favicon} alt='' />
        </div>
      </div>
    </>
  );
}
