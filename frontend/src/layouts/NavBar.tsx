import {Link} from 'react-router-dom';
import logolight from '../assets/logolight.svg';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';
import React from 'react';

export default function NavBar(): React.ReactElement {
  return (
    <div>
      <div className='flex justify-around items-center px-5'>
        <div className='flex-col w-1/2 relative '>
          <div className='pr-20'>
            <SearchBar />
          </div>
          <div className=' w-full border-b-2 border-colorBlack p-2'></div>
        </div>
        <Link to='/'>
          <img
            src={logolight}
            alt=''
            className='pt-12 w-96 hover:scale-[1.02] transition-all duration-300'
          />
        </Link>
        <div className='w-1/2'>
          <div className='pl-20'>
            <Navigation />
          </div>
          <div className=' w-full border-b-2 border-colorBlack p-2'></div>
        </div>
      </div>
    </div>
  );
}
