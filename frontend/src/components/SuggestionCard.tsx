import {Link} from 'react-router-dom';
import {Tooltip} from 'react-tooltip';

//import images
import HeartSVG from '../assets/navbar/heart.svg?react';
import star from '../assets/icons/icons8-star-50.png';

const ProductTitle =
  'Beni ourain Custom Moroccan rug - Berber Beni ourain rug - Wool area rug - Handmade rug - Moroccan area rug - Morocco rug';

export default function SuggestionCard({
  image,
  isNew,
}: {
  image: string;
  isNew: boolean;
}) {
  return (
    <>
      <div className='group relative overflow-hidden w-[322px] h-[392px] font-secondary flex flex-col rounded-xl shadow-md'>
        <Link to='#'>
          <button className='absolute end-12 top-8 z-10  hover:bg-white/60 hover:scale-[1.06] '>
            <div className='relative'>
              <div className='w-7 h-7 rounded-full bg-white p-1.5 text-gray-900 transition absolute'></div>
              <HeartSVG className='absolute w-6 end-[-1.65rem] top-[-4.1rem] font-secondary hover:fill-colorGold' />
            </div>
          </button>
          <img
            src={image}
            alt='product-image'
            className={
              'h-72 w-full object-cover transition duration-500 group-hover:scale-105'
            }
          />

          <div className='relative border border-gray-100 bg-white pt-2 p-6 rounded-br-xl rounded-bl-xl'>
            <span
              className={`whitespace-nowrap bg-colorGold px-2 py-1 text-xs font-medium text-white ${
                isNew ? '' : 'hidden'
              }`}
            >
              New
            </span>
            <h3
              className='mt-1 font-medium font-secondary text-[0.9rem] text-gray-900 tooltip'
              data-tooltip-id='my-tooltip'
              data-tooltip-content={ProductTitle}
            >
              {ProductTitle.length > 35
                ? ProductTitle.substring(0, 35) + '...'
                : ProductTitle}
            </h3>
            <div className='flex justify-between'>
              <h4 className='mt-[-0.1rem] text-xs font-light text-black-900 opacity-70 font-secondary'>
                By MarrakechGallery
              </h4>

              <p className='mt-1 text-base text-colorGold'>600 DH</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2 font-bold text-black'>
                <img width='15' height='15' src={star} alt='star' />
                <p className='font-medium text-base text-black'>4.7 (1.5K)</p>
              </div>
              <p className='font-thin text-sm font-secondary text-colorGold'>
                <span className='line-through'>1700DH</span>(60%)
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Tooltip id='my-tooltip' />
    </>
  );
}
