import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';
import {HiDotsVertical} from 'react-icons/hi';
import {router} from '../App';
import {useEffect, useState} from 'react';
import {store} from '../app/store';
import {getProducts} from '../api/products';
import {ProductUrl} from '../../types';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const user = store.getState().auth.user;
    console.log(user);

    if (user) {
      getProducts(user._id).then((res) => {
        console.log(res);

        setProducts(res);
      });
    }
  }, []);

  return (
    <div>
      <header className='md:flex md:items-center md:justify-between'>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            Products List
          </h2>
        </div>
        <div className='mt-4 flex md:mt-0 md:ml-4'>
          <div
            className='ml-3 inline-flex items-center rounded-md border border-transparent bg-colorGold px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2'
            onClick={() => {
              router.navigate('/Dashboard/products/addNewProduct');
            }}
          >
            Add New Product
          </div>
        </div>
      </header>
      <div className='mt-6 grid grid-cols-2 gap-4 gap-y-10 sm:gap-6 md:grid-cols-4 lg:gap-8 '>
        {products.map((product: ProductUrl, index: number) => (
          <div
            key={index}
            className='group relative bg-white border-2 border-gray-300 p-5'
          >
            <div className='h-56 w-full overflow-hidden rounded-md bg-white-200 group-hover:opacity-75 lg:h-72 xl:h-80 '>
              <img
                src={product.images[0]}
                alt={product.description}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <h3 className='mt-4 text-sm text-gray-700'>
              <a href={'#'}>
                <span className='absolute inset-0' />
                {product.title}
              </a>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              {product.quantity} In Stock
            </p>
            <div className='flex justify-between items-center relative z-10'>
              <p className='mt-1 text-sm font-medium text-gray-900'>
                {product.price} DH
              </p>
              <Popover>
                <PopoverHandler>
                  <Button variant='text'>
                    <HiDotsVertical />
                  </Button>
                </PopoverHandler>
                <PopoverContent>
                  <div className='flex flex-col'>
                    <Button variant='text' className='text-start'>
                      Edit
                    </Button>
                    <Button variant='text' className='text-start'>
                      Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
