import {useParams} from 'react-router-dom';

// import Components
import HeroSlider from '../components/categoryproducts/HeroSlider';
import SelectOptions from '../components/categoryproducts/Select';
import ProductCard from '../components/categoryproducts/ProductCard';
import PopularCard from '../components/categoryproducts/PopularCard';
import {Pagination} from '@mui/material';
import RecentCard from '../components/categoryproducts/RecentCard';
import Filter from '../components/categoryproducts/Filter';

// import Images
import categories from './data/categories';

import rug1 from '../assets/rugs/rug 9.jpg';
import rug2 from '../assets/rugs/rug 11.jpg';
import rug3 from '../assets/rugs/rug 13.jpg';
import rug4 from '../assets/rugs/rug 5.webp';
import rug5 from '../assets/rugs/rug 7.webp';
import rug6 from '../assets/rugs/rug 1.jpg';
import rug7 from '../assets/rugs/rug 12.jpg';

const rugs = [rug2, rug3, rug4, rug5];

export default function ProductsList() {
  const {category} = useParams();
  const selectedCategory = categories.find(
    (c) => c.name === category?.toLowerCase()
  );
  const subcategories = selectedCategory?.subcategory;
  return (
    <>
      <div className='ml-[244px] mr-[244px] mt-8 '>
        <HeroSlider images={selectedCategory?.images}>
          {category?.toUpperCase()} CATEGORIES
        </HeroSlider>
        <div>
          <h1 className='font-primary text-heading tracking-wide pt-8'>
            Most Loved
          </h1>
          <div className='flex  gap-6'>
            <div>
              <PopularCard isFirstCard={true} isNew={true} image={rug1} />
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-6'>
              {rugs.map((rug) => {
                return (
                  <PopularCard isFirstCard={false} isNew={false} image={rug} />
                );
              })}
            </div>
          </div>
        </div>
        <div className='mt-8 border-b border-gray-500 my-4'></div>
        <div className='flex justify-around mt-16'>
          {subcategories?.map((subcategory) => (
            <div className='w-32 flex flex-col justify-start items-center'>
              <div className='h-32 w-32 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-2 outline outline-colorBlack '>
                <img
                  src={subcategory?.image}
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <p className='mt-3 font-secondary text-center text-lg text-colorBlack'>
                {subcategory?.name}
              </p>
            </div>
          ))}
        </div>
        <div className=' h-auto flex justify-between items-center mt-14 z-50'>
          <div className='flex items-center gap-5'>
            <Filter />
            <div>
              <span className='font-secondary font-medium'>18019 products</span>
            </div>
          </div>
          <SelectOptions
            selections={[
              'Popular',
              'Lowest price',
              'Highest price',
              'Top customer reviews',
              'Most Recent',
            ]}
          />
        </div>
        <div className='mt-11 grid grid-cols-3 gap-6'>
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
          <ProductCard isNew={true} image={rug6} />
        </div>
        <div className='mt-9 flex justify-center'>
          <Pagination count={10} variant='outlined' shape='rounded' />
        </div>
        <div>
          <h2 className='font-secondary text-[1.5rem]'>RECENTLY VIEWED</h2>
          <div className='mt-3 grid grid-cols-4 gap-[3.3rem]'>
            <RecentCard isNew={true} image={rug7} />
            <RecentCard isNew={true} image={rug7} />
            <RecentCard isNew={true} image={rug7} />
            <RecentCard isNew={true} image={rug7} />
          </div>
        </div>
      </div>
    </>
  );
}
