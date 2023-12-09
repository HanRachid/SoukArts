import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';
import {HiDotsVertical} from 'react-icons/hi';
import {router} from '../../App';
import {useEffect, useState} from 'react';
import {store} from '../../app/store';
import {deleteProduct, getProducts} from '../../api/products';
import {ProductUrl} from '../../../types';
import EditProduct from '../../components/products/EditProduct';
import {useSelector} from 'react-redux';
export default function Products() {
  const [isEdit, setIsEdit] = useState(false);
  const [products, setProducts] = useState<ProductUrl[]>([]);
  const [toEdit, setToEdit] = useState<ProductUrl>({
    _id: '',
    user_id: '',
    title: '',
    description: '',
    category: '',
    subcategory: '',
    item_type: '',
    shipping_time: '',
    free_shipping: false,
    price: 0,
    quantity: 0,
    images: [],
    style: '',
    primary_color: '',
    secondary_color: '',
    formData: [],
  });
  const productses = useSelector((state: any) =>
    state.auth.user ? state.auth.user.user : null
  );
  async function handleDelete(id: string) {
    deleteProduct(id).then(() => {
      const user = useSelector((state: any) =>
        state.auth.user ? state.auth.user.user : null
      );

      getProducts(user!._id).then((res) => {
        setProducts(res);
      });
    });
  }
  return (
    <div className='flex flex-col'>
      <div className='absolute  z-30 bg-gray-500/10 '>
        {isEdit && (
          <EditProduct
            setIsEdit={setIsEdit}
            product={toEdit}
            setProducts={setProducts}
            setToEdit={setToEdit}
          />
        )}
      </div>
      <header
        className={
          isEdit
            ? 'md:flex md:items-center md:justify-between opacity-10 pointer-events-none'
            : 'md:flex md:items-center md:justify-between '
        }
      >
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            Products List
          </h2>
        </div>
        <div className='mt-4 flex md:mt-0 md:ml-4'>
          <Button
            color='brown'
            onClick={() => {
              router.navigate('/Dashboard/products/addNewProduct');
            }}
          >
            Add New Product
          </Button>
        </div>
      </header>
      <div
        className={
          isEdit
            ? 'mt-6 grid grid-cols-2 gap-4 gap-y-10 sm:gap-6 md:grid-cols-4 lg:gap-8 opacity-10 pointer-events-none'
            : 'mt-6 grid grid-cols-2 gap-4 gap-y-10 sm:gap-6 md:grid-cols-4 lg:gap-8 '
        }
      >
        {products.map((product: ProductUrl, index: number) => (
          <div
            key={index}
            className='group relative bg-white border-2 border-gray-300 p-5'
          >
            <div className='h-56 w-full overflow-hidden rounded-md bg-white-200 group-hover:opacity-75 lg:h-72 xl:h-80 '>
              <img
                src={
                  product.images[0]
                    ? product.images[0].url
                    : 'https://placehold.co/600x400.png'
                }
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

              <Popover open={toEdit._id === product._id}>
                <PopoverHandler
                  onClick={() => {
                    toEdit._id === product._id
                      ? setToEdit({} as ProductUrl)
                      : setToEdit(product);
                  }}
                >
                  <Button variant='text'>
                    <HiDotsVertical />
                  </Button>
                </PopoverHandler>
                <PopoverContent>
                  <div className='flex flex-col items-center'>
                    <Button
                      variant='text'
                      className='text-start'
                      onClick={(e) => {
                        setIsEdit(true);
                        setToEdit(product);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant='text'
                      className='text-start'
                      onClick={(e) => {
                        handleDelete(product._id);
                      }}
                    >
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
