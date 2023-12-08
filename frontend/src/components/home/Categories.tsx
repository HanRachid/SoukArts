import a from '../../assets/home/a.png';
import arrow from '../../assets/home/arrow.svg';

import {GoChevronRight} from 'react-icons/go';

const arrayForTest = [1, 2, 3, 4, 5, 6];

export default function Categories() {
  return (
    <div className='w-full py-8 flex items-center relative mt-8'>
      <div className='flex items-center h-full justify-between gap-x-32 max-w-full mx-auto'>
        {arrayForTest.map((index) => (
          <div
            key={index}
            className='flex justify-center items-center flex-col'
          >
            <div className='h-32 w-32 rounded-full border-2 overflow-hidden border-colorBlack'>
              <img src={a} alt='' className='w-full h-full' />
            </div>
            <p className='text-colorBrown mt-4'>Rugs</p>
          </div>
        ))}
      </div>
      <div className='absolute right-5 -mt-8'>
        <button className='flex items-center font-medium'>
          <span className='mb-1 text-colorBlack'>More</span>
          <GoChevronRight className='h-6 w-auto' />
        </button>
      </div>
    </div>
  );
}
