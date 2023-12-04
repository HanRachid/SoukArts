import {ChangeEvent, useEffect, useState} from 'react';
import {ProductUrl} from '../../../types';
import {editProduct, getProducts} from '../../api/products';
import {store} from '../../app/store';

export default function EditProduct({
  setIsEdit,
  product,
  setProducts,
}: {
  setIsEdit: Function;
  product: ProductUrl;
  setProducts: Function;
}) {
  const [productValues, setProductValues] = useState<ProductUrl>({
    _id: '',
    user_id: '',
    title: '',
    description: '',
    category: 'Handmade',
    price: 0,
    quantity: 0,
    images: [],
    formData: [],
  });

  const [browsedImages, setBrowsedImages] = useState<string[]>([]);
  const [localBrowsedImages, setLocalBrowsedImages] = useState<string[]>([]);

  useEffect(() => {
    setProductValues({...product, formData: []});

    for (let image of product.images) {
      const newImages = browsedImages;

      newImages.push(image.url);
      setBrowsedImages(newImages);
    }
  }, []);
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        const localUrl = URL.createObjectURL(file);
        formData.append('file', file);
        formData.append('cloud_name', 'dmgfba0uv');
        formData.append('upload_preset', 'olz6hm0s');
        console.log(formData.get('file'));

        setProductValues({
          ...productValues,
          formData: [...productValues.formData, formData],
        });
        setLocalBrowsedImages([...localBrowsedImages, localUrl]);
      }
    }
  };
  function handleChange(event: any) {
    setProductValues({
      ...productValues,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await editProduct(productValues);
    getProducts(product.user_id!).then((res) => {
      setProducts(res);
    });
    setProductValues({
      _id: '',
      user_id: '',
      title: '',
      description: '',
      category: 'Handmade',
      price: 0,
      quantity: 0,
      images: [],
      formData: [],
    });
    setBrowsedImages([]);
    setLocalBrowsedImages([]);

    setIsEdit(false);
  };
  return (
    <section className='flex '>
      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className=''>
            <div className='px-0 sm:px-0'></div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <div className='shadow sm:overflow-hidden sm:rounded-md'>
              <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-3 gap-6'>
                  <div className='col-span-3 sm:col-span-2'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Title
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm'>
                      <input
                        type='text'
                        name='title'
                        className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gold-500 focus:ring-gold-500 sm:text-sm'
                        placeholder='Title of your product'
                        onChange={handleChange}
                        value={productValues.title}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Description
                  </label>
                  <div className='mt-1'>
                    <textarea
                      name='description'
                      rows={3}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm'
                      placeholder='Enter a description...'
                      onChange={handleChange}
                      value={productValues.description}
                    />
                  </div>
                  <p className='mt-2 text-sm text-gray-500'>
                    Brief description for your Product.
                  </p>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Category
                  </label>
                  <select
                    onChange={handleChange}
                    name='category'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gold-500 focus:outline-none focus:ring-gold-500 sm:text-sm'
                    value={productValues.category}
                  >
                    <option>Vintage</option>
                    <option>Handmade</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Photos
                  </label>
                  <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                    <div className='space-y-1 text-center'>
                      <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                      >
                        <path
                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='flex text-sm text-gray-600'>
                        <label className='relative cursor-pointer rounded-md bg-white font-medium text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2 hover:text-gold-500'>
                          <span>Upload a file</span>
                          <input
                            type='file'
                            name='image'
                            className='sr-only'
                            multiple
                            onChange={handleFileUpload}
                          />
                        </label>
                        <p className='pl-1'>or drag and drop</p>
                      </div>
                      <p className='text-xs text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {browsedImages.map((photo, index) => (
                    <div key={index} className='group relative'>
                      <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-32'>
                        <button
                          onClick={() => {
                            setProductValues({
                              ...productValues,
                              images: productValues.images.filter(
                                (_photo, indexPhoto) => indexPhoto !== index
                              ),
                            });
                            setBrowsedImages(
                              browsedImages.filter(
                                (_photo, indexPhoto) => indexPhoto !== index
                              )
                            );
                          }}
                        >
                          X
                        </button>
                        <img
                          src={photo}
                          alt=''
                          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                        />
                      </div>
                    </div>
                  ))}
                  {localBrowsedImages.map((photo, index) => (
                    <div key={index} className='group relative'>
                      <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-32'>
                        <button
                          onClick={() => {
                            setLocalBrowsedImages(
                              localBrowsedImages.filter(
                                (_photo, indexPhoto) => indexPhoto !== index
                              )
                            );
                          }}
                        >
                          X
                        </button>
                        <img
                          src={photo}
                          alt=''
                          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'></div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form onSubmit={handleSubmit}>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6'>
                      <label className='block text-sm font-medium text-gray-700'>
                        Price
                      </label>
                      <input
                        name='price'
                        type='number'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm'
                        onChange={handleChange}
                        value={productValues.price}
                      />
                    </div>

                    <div className='col-span-6'>
                      <label className='block text-sm font-medium text-gray-700'>
                        Quantity
                      </label>
                      <input
                        type='number'
                        name='quantity'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm'
                        onChange={handleChange}
                        value={productValues.quantity}
                      />
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-gold-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
