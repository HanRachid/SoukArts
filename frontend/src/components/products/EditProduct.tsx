import {ChangeEvent, useEffect, useState} from 'react';
import {Category, ProductUrl} from '../../../types';
import {editProduct, getProducts} from '../../api/products';
import {store} from '../../app/store';
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
  Checkbox,
} from '@material-tailwind/react';
import {IoClose} from 'react-icons/io5';

const styles = ['Modern', 'Classic', 'Fusion', 'Boho'];
const subcategoriesData: Category[] = [
  {
    name: 'Rugs',
    Subcategories: [
      'Azilal Rug',
      'Boucherouite Rugs',
      'Kilim Rugs',
      'Taznakht Rugs',
      'Boujad Rugs',
      'Zanafi Rugs',
      'Beni Ourain Rugs',
    ],
  },
  {
    name: 'Poufs',
    Subcategories: [
      'Round Leather Poufs',
      'Boucherouite Poufs',
      'Square Leather Poufs',
      'Kilim Berber Poufs',
    ],
  },
  {
    name: 'Lamps',
    Subcategories: [
      'Pendant Lights',
      'Table Lamps',
      'Lampshades',
      'Floor Lamps',
      'Brass Lamps',
      'Rattan Lamps',
    ],
  },
  {
    name: 'Pillows',
    Subcategories: [
      'Berber Pillows',
      'Beni Ourain Pillows',
      'Kilim Pillows',
      'Sahara Pillows',
      'Handira Pillows',
    ],
  },
  {
    name: 'Shoes',
    Subcategories: [
      'Women Shoes',
      'Man Shoes',
      'Babouche',
      'Leather Sandals',
      'Rattan Shoes',
    ],
  },
  {
    name: 'Bags',
    Subcategories: [
      'Leather Bags',
      'Kilim Bags',
      'Rattan Bags',
      'Straw Market Bag',
    ],
  },
  {
    name: 'Jewelry',
    Subcategories: [
      'Earrings',
      'Necklaces',
      'Rings',
      'Bracelets',
      'Ankle Bracelet',
    ],
  },
];

const Colors: string[] = [
  'Gray',
  'White',
  'Black',
  'Blue',
  'Gold',
  'Silver',
  'Copper',
  'Beige',
  'Black',
  'Bronze',
  'Brown',
  'Green',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'Rose gold',
  'Yellow',
];

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
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    string[] | undefined
  >(undefined);
  const handleSelectCategory = (value: string | undefined) => {
    setProductValues((prevState: any) => ({
      ...prevState,
      category: value,
    }));
    const findSubcategory = subcategoriesData.find(
      ({name}) => name === value
    )?.Subcategories;
    setSelectedSubCategory(findSubcategory);
  };
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
    setBrowsedImages([]);
    setLocalBrowsedImages([]);

    setIsEdit(false);
  };
  return (
    <section className=''>
      <div>
        <div className=''>
          <div className=''>
            <div className='shadow sm:overflow-hidden sm:rounded-md'>
              <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                <div className=''>
                  <div className='flex flex-col gap-10 pt-5'>
                    <Input
                      label='Title'
                      onChange={handleChange}
                      value={productValues.title}
                      color='brown'
                      name='title'
                      crossOrigin={true}
                    />

                    <div>
                      <Textarea
                        label='Description'
                        name='description'
                        onChange={handleChange}
                        value={productValues.description}
                        color='brown'
                      />
                    </div>
                    <Select
                      label='Type'
                      name='Type'
                      value={productValues.item_type}
                      onChange={(event) => {
                        setProductValues({
                          ...productValues,
                          item_type: event,
                        });
                      }}
                      color='brown'
                    >
                      <Option value='Handmade'>Handmade</Option>
                      <Option value='Vintage'>Vintage</Option>
                    </Select>

                    <Select
                      label='Category'
                      name='category'
                      value={productValues.category}
                      onChange={handleSelectCategory}
                      color='brown'
                    >
                      {subcategoriesData.map(({name}) => (
                        <Option key={name} value={name}>
                          {name}
                        </Option>
                      ))}
                    </Select>

                    {selectedSubCategory && (
                      <Select
                        label='Subcategory'
                        name='subcategory'
                        onChange={(event) => {
                          setProductValues({
                            ...productValues,
                            subcategory: event,
                          });
                        }}
                        color='brown'
                      >
                        {selectedSubCategory.map((subcategory) => (
                          <Option key={subcategory} value={subcategory}>
                            {subcategory}
                          </Option>
                        ))}
                      </Select>
                    )}
                    <Select
                      label='Style'
                      name='Style'
                      onChange={(event) => {
                        setProductValues({
                          ...productValues,
                          style: event,
                        });
                      }}
                      color='brown'
                    >
                      {styles.map((style) => (
                        <Option key={style} value={style}>
                          {style}
                        </Option>
                      ))}
                    </Select>
                    <Select
                      label='Primary Color'
                      name='Primary Color'
                      onChange={(event) => {
                        setProductValues({
                          ...productValues,
                          primary_color: event,
                        });
                      }}
                      color='brown'
                    >
                      {Colors.map((color) => (
                        <Option value={color}>{color}</Option>
                      ))}
                    </Select>
                    <Select
                      label='Secondary Color'
                      name='Secondary Color'
                      onChange={(event) => {
                        setProductValues({
                          ...productValues,
                          secondary_color: event,
                        });
                      }}
                      color='brown'
                    >
                      {Colors.map((color) => (
                        <Option value={color}>{color}</Option>
                      ))}
                    </Select>
                    <Select
                      label='Shipping Time'
                      name='Shipping Time'
                      onChange={(event) => {
                        console.log(productValues);

                        setProductValues({
                          ...productValues,
                          shipping_time: event,
                        });
                      }}
                      color='brown'
                    >
                      <Option value='Three Days'>Three Days</Option>
                      <Option value='One Day'>One Day</Option>
                    </Select>

                    <Checkbox
                      label='Free Shipping'
                      onChange={() => {
                        setProductValues({
                          ...productValues,
                          free_shipping: !productValues.free_shipping,
                        });
                      }}
                      crossOrigin
                      color='brown'
                    />
                  </div>
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
                  <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-5/6'>
                    {browsedImages.map((photo, index) => (
                      <div key={index} className='relative'>
                        <div className='w-full overflow-hidden rounded-md'>
                          <button
                            className='absolute -right-2 -top-2 rounded-full bg-gray-200 shadow-md h-8 w-8 flex items-center justify-center'
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
                            <IoClose />
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
                      <div key={index} className='relative'>
                        <div className='w-full overflow-hidden rounded-md'>
                          <button
                            className='absolute -right-2 -top-2 rounded-full bg-gray-200 shadow-md h-8 w-8 flex items-center justify-center'
                            onClick={() => {
                              setProductValues({
                                ...productValues,
                                images: productValues.images.filter(
                                  (_photo, indexPhoto) => indexPhoto !== index
                                ),
                              });
                              setLocalBrowsedImages(
                                localBrowsedImages.filter(
                                  (_photo, indexPhoto) => indexPhoto !== index
                                )
                              );
                            }}
                          >
                            <IoClose />
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
                  <div className='mt-10 sm:mt-0'>
                    <div className=''>
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
                                className='inline-flex justify-center rounded-md border border-transparent bg-gold-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 mr-5'
                              >
                                Save
                              </button>
                              <button
                                type='button'
                                className='inline-flex justify-center rounded-md border border-transparent bg-black-950 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2'
                                onClick={() => {
                                  setIsEdit(false);
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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
    </section>
  );
}
