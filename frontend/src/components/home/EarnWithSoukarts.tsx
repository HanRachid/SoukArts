import {AiOutlinePlayCircle} from 'react-icons/ai';
import video from '../../assets/home/video.png';
import { Typography } from '@material-tailwind/react';

export default function EarningWithSukarts() {
  return (
    <div className='flex lg:flex-row bg-colorBeige/50 flex-col justify-center items-center lg:px-40 md:px-16 px-8 py-8'>
      <div className='w-full lg:pr-32'>
        <h1 className='font-medium lg:text-heading text-[3.25rem] text-colorBrown font-secondary leading-tight'>
          <span className='block'>Start Earning with</span>
          <span className='font-primary'>SOUK ARTS</span>
        </h1>

        <Typography variant='paragraph' color='gray' className='w-full font-secondary pt-10 font-medium'>
          Unlock your earning potential with Souk Arts and become a thriving
          creative entrepreneur. Sell your unique designs to a global audience,
          reaching millions of buyers, or showcase and promote talented artists
          on Souk Arts to earn lucrative rewards!
        </Typography>


        <div className='flex md:flex-row flex-col gap-5 py-16 w-full h-auto'>
          <button className='py-4 w-full border-2 text-gray-900 border-gray-900 rounded-bl-xl rounded-tr-xl'>
            Open a Shop
          </button>
          <button className='w-full py-4 bg-colorGold rounded-bl-xl rounded-tr-xl'>
            <span className='text-white w-full'>Become an Affiliate</span>
          </button>
        </div>
      </div>
      <div className='w-full flex items-center justify-center border-4 rounded-3xl overflow-hidden border-colorBrown'>
        <button className='absolute'>
          <AiOutlinePlayCircle className=' text-white text-9xl' />
        </button>
        <img src={video} alt='' className='w-full h-auto object-cover' />
      </div>
    </div>
  );
}
