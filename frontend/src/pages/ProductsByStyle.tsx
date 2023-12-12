import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

//import images
import classicPic from '../assets/home/ShopByStyle/classic.webp';
import modernPic from '../assets/home/ShopByStyle/Modern.jpg';
import bohoPic from '../assets/home/ShopByStyle/Boho.jpg';
import fusionPic from '../assets/home/ShopByStyle/Fusion.jpg';
import {Pagination} from 'antd';
import ProductCard from '../components/categoryproducts/ProductCard';
import SelectOptions from '../components/categoryproducts/Select';

const styles: {
  name: string;
  image: string;
}[] = [
  {
    name: 'classic',
    image: classicPic,
  },
  {
    name: 'modern',
    image: modernPic,
  },
  {
    name: 'boho',
    image: bohoPic,
  },
  {
    name: 'fusion',
    image: fusionPic,
  },
];

export default function ProductsByyStyle() {
  const {style} = useParams();
  const selectedStyle = styles.find((s) => s.name === style);
  const products = useSelector((state) => state.products.products);
  console.log(products);
  console.log(selectedStyle);

  const productsStyle = products.filter(
    (p) => p.style?.toLowerCase() === style
  );
  return (
    <>
      <div className='ml-[244px] mr-[244px] mt-16 '>
        <div className='flex flex-col justify-center items-center gap-8'>
          <div className='w-[850px] h-[600px] rounded-tl-full rounded-tr-full overflow-hidden outline-offset-8 outline'>
            <img
              src={selectedStyle.image}
              alt='image style'
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <h1 className='text-center tracking-widest leading-normal text-8xl font-primary text-colorBlack'>
              {selectedStyle.name?.toUpperCase()} STYLE
            </h1>
          </div>
        </div>
        <div className='mt-8 border-b border-gray-500 my-4'></div>
        <div className='flex justify-end'>
          <SelectOptions
            selections={[
              'Rugs',
              'Poufs',
              'Lamps',
              'Pillows',
              'Shoes',
              'bags',
              'jewelry',
            ]}
          />
        </div>
        <div className='mt-11 grid grid-cols-3 gap-6'>
          {productsStyle.map((product, index) => (
            <ProductCard key={index} isNew={true} product={product} />
          ))}
        </div>
        <div className='mt-9 flex justify-center'>
          <Pagination count={10} variant='outlined' shape='rounded' />
        </div>
      </div>
    </>
  );
}
