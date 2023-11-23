import sallon1 from '../assets/home/sallon1.png';
import sallon2 from '../assets/home/sallon2.png';
import {BiChevronRight} from 'react-icons/bi';

export default function ShopByStyle() {
  return (
    <div className='px-28'>
      <div className='text-7xl mb-20 font-primary text-colorBrown'>
        Shop by style
      </div>
      <div className='flex items-center justify-center gap-10'>
        <div className='border-black border-2 rounded-b-xl relative overflow-hidden'>
          <div className='font-primary top-0 w-full py-5 text-center absolute bg-black/30 text-white text-5xl font-medium'>
            Classic
          </div>
          <img src={sallon1} alt='' className='h-full w-full' />
          <button className='w-full py-5 border-t-2 bg-colorBeige border-black'>
            Shop products
          </button>
        </div>
        <div className='border-black border-2 rounded-b-xl relative overflow-hidden'>
          <h2 className='font-primary top-0 w-full py-5 text-center absolute bg-black/30 text-white text-5xl font-medium'>
            Modern
          </h2>
          <img src={sallon2} alt='' className='h-full w-full' />
          <button className='w-full py-5 border-t-2 bg-colorBeige border-black'>
            Shop products
          </button>
        </div>
        <BiChevronRight className='text-7xl' />
      </div>
    </div>
  );
}
