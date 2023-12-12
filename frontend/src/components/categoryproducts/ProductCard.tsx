import {Link} from 'react-router-dom';
import {Tooltip} from 'react-tooltip';

//import images
import HeartSVG from '../../assets/navbar/heart.svg?react';
import star from '../../assets/icons/icons8-star-50.png';
import {ProductUrl, Seller} from '../../../types';

export default function ProductCard({
  product,
  isNew,
}: {
  product: ProductUrl & {seller_id: Seller};
  isNew: boolean;
}) {
  return (
    <>
      <div className='group relative overflow-hidden w-[456.55px] h-[691.18] font-secondary flex flex-col rounded-xl shadow-md z-0'>
        <Link to={`/products/product/${product._id}`}>
          <button className='absolute end-12 top-8 z-10  hover:bg-white/60 hover:scale-[1.06] '>
            <div className='relative'>
              <div className='w-9 h-9 rounded-full bg-white p-1.5 text-gray-900 transition absolute'></div>
              <HeartSVG className='absolute w-7 end-[-2rem] top-[-3.8rem] font-secondary hover:fill-colorGold' />
            </div>
          </button>
          <img
            src={product.images[0].url}
            alt='product-image'
            className={` ${
              isNew ? 'h-[350px]' : 'h-[599.72]'
            } w-full object-cover transition duration-500 group-hover:scale-105`}
          />

          <div className='relative border border-gray-100 bg-white pt-2 p-6 rounded-br-xl rounded-bl-xl'>
            <div
              className={`whitespace-nowrap w-12 bg-colorGold px-3 py-1.5 text-xs font-medium text-white ${
                isNew ? '' : 'hidden'
              }`}
            >
              New
            </div>
            <h3
              className='mt-4 font-medium font-secondary text-[1.35rem] text-gray-900 tooltip'
              data-tooltip-id='my-tooltip'
              data-tooltip-content={product.title}
            >
              {product.title.length > 35
                ? product.title.substring(0, 35) + '...'
                : product.title}
            </h3>
            <div className='flex justify-between'>
              <h4 className='-mt-1 text-base font-light text-black-900 opacity-70 font-secondary'>
                {product.seller_id!.shop_name}
              </h4>

              <p className='mt-4 text-xl text-colorGold'>{`${Math.floor(
                product.price * 0.4
              )}DH`}</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2 font-bold text-black'>
                <img width='20' height='20' src={star} alt='star' />
                <p className='font-medium text-xl text-black'>4.7 (1.5K)</p>
              </div>
              <p className='font-thin text-sm font-secondary text-colorGold'>
                <span className='line-through'>{`${Math.floor(
                  product.price
                )}DH`}</span>
                (60%)
              </p>
            </div>
            <form className='mt-4'>
              <button className='h-[58px] text-[1.2rem] block w-full rounded-tr-[10px] rounded-bl-[10px]  bg-colorGold text-white font-secondary font-normal medium transition hover:bg-colorGold/90 hover:scale-[1.02]'>
                Add to Cart
              </button>
            </form>
          </div>
        </Link>
      </div>
      <Tooltip id='my-tooltip' />
    </>
  );
}
