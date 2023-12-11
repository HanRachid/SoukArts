import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from '@material-tailwind/react';
import {ChangeEvent, useEffect, useState} from 'react';
import {Seller, User} from '../../../types';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginState} from '../../features/auth/authSlice';
import {refreshLog} from '../../api/auth';
import {editSeller} from '../../api/seller';

export default function StoreSettings() {
  const user = useSelector((state: any) => state.auth.user);
  const [userInfo, setUserInfo] = useState(
    {} as Seller & {localUrl: string | null} & {destroy_id: string | null}
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>(new FormData());
  useEffect(() => {
    if (user) {
      setUserInfo({...user.user.seller, localUrl: user.user.seller.banner});
      if (user.user.seller.banner) {
        setUserInfo({
          ...user.user.seller,
          localUrl: user.user.seller.banner.url,
        });
      }
    }
  }, [user]);

  function handleChange(event: any) {
    setUserInfo({...userInfo, [event.target.name]: event.target.value});
  }
  useEffect(() => {
    console.log(userInfo);
    console.log(formData);
  }, [userInfo, formData]);
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (files) {
      const file = files[0];

      const fmData = new FormData();
      const localUrl = URL.createObjectURL(file);

      fmData.append('file', file);
      fmData.append('cloud_name', 'dmgfba0uv');
      fmData.append('upload_preset', '8eab76b3fc');
      setUserInfo({...userInfo, localUrl: localUrl});
      setFormData(fmData);
    }
  };

  function handleRemove() {
    setUserInfo({...userInfo, localUrl: null});
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);

    await editSeller(userInfo, formData);
    refreshLog({} as User).then((result) => {
      dispatch(setLoginState(result));
    });
  }
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 font-primary'>
          Store
        </h1>

        <form
          onSubmit={handleSubmit}
          className='divide-y-gray-200 mt-6 space-y-8 divide-y'
        >
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6 mb-5'>
            <div className='sm:col-span-6'>
              <h2 className='text-xl font-medium text-gray-900'>
                Store Details
              </h2>
              <p className='mt-1 text-sm text-gray-500'>
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className='sm:col-span-3'>
              <Input
                label='Store name'
                name='shop_name'
                crossOrigin='false'
                value={userInfo.shop_name}
                onChange={handleChange}
              />
            </div>

            <div className='sm:col-span-3'>
              <Input
                label='Store Contact Email'
                name='business_email'
                crossOrigin='false'
                value={userInfo.business_email}
                onChange={handleChange}
              />
            </div>
            <div className='sm:col-span-6'>
              <label
                htmlFor='Description'
                className='block text-xl font-medium text-gray-900'
              >
                Description
              </label>
              <div className='mt-1 flex items-center'></div>
            </div>
            <div className='sm:col-span-6'>
              <Textarea
                label='Description'
                name='description'
                value={userInfo.description}
                onChange={handleChange}
              />
            </div>
            <div className='sm:col-span-3'>
              <Select
                label='language'
                name='language'
                value={userInfo.language}
                onChange={(event) => {
                  setUserInfo({
                    ...userInfo,
                    language: event! as string,
                  });
                }}
              >
                <Option value='Arabic'>Arabic</Option>
                <Option value='French'>French</Option>
                <Option value='English'>English</Option>
              </Select>
            </div>
          </div>
          <div className='sm:col-span-3'>
            <Input
              value={userInfo.slogan}
              onChange={handleChange}
              label='Slogan'
              name='slogan'
              crossOrigin='false'
            />
          </div>

          <div className='sm:col-span-3'>
            <Input
              value={userInfo.address}
              onChange={handleChange}
              label='Address'
              name='address'
              crossOrigin='false'
            />
          </div>
          <Textarea
            value={userInfo.annoucements}
            onChange={handleChange}
            label='Announcements'
            name='annoucements'
          />
          <label className='text-xl font-medium mt-5 text-gray-900'>
            Banner
          </label>
          <div className='mt-1 rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
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
              <div className=' text-sm text-gray-600'>
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
              <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <div className='  border-t border-b outline-gold-400 h-mim h-64 rounded-lg flex justify-center items-center'>
            <img
              src={userInfo.localUrl ?? 'https://placehold.co/1800x400'}
              className='object-fill max-h-64'
              alt=''
            />
          </div>

          <div className='flex justify-between pt-8'>
            <button
              type='button'
              className='ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium border border-black-500 text-gray-900 hover:text-gray-700 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-gray-50'
              onClick={handleRemove}
            >
              Remove Banner
            </button>
            <Button type='submit' color='brown'>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
