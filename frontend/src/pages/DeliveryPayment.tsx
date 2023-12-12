import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Select, Option} from '@material-tailwind/react';

import bahrein from '../assets/icons/bahrein.png';
import belgium from '../assets/icons/belgium.png';
import italy from '../assets/icons/italy.png';
import morocco from '../assets/icons/morocco.png';
import germany from '../assets/icons/germany.png';
import china from '../assets/icons/china.png';
import france from '../assets/icons/france.png';
import spain from '../assets/icons/spain.png';
import usa from '../assets/icons/usa.png';

import './css/DeliveryPayment.css';

const DeliveryPayment = () => {
  {
    /*Select Countries*/
  }
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  {
    /*Form Address*/
  }
  const [formData, setFormData] = useState({
    fullName: '',
    streetaddress: '',
    additionnaladdress: '',
    postalCode: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <section>
      <div className='mt-10 mb-20'>
        <h2 className='text-center font-primary text-large lg:text-extraLarge'>
          Choose a delivery address
        </h2>
        <div>
          <form
            className='max-w-md mx-auto mt-4 px-4 sm:px-0'
            onSubmit={handleSubmit}
            autoComplete='on'
          >
            <div className='mb-4'>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-gray-600'
              >
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Enter your name'
                className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='streetaddress'
                className='block text-sm font-medium text-gray-600'
              >
                Street Address
              </label>
              <input
                type='text'
                id='streetaddress'
                name='streetaddress'
                value={formData.streetaddress}
                onChange={handleChange}
                placeholder='Enter your address'
                className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='additionnaladdress'
                className='block text-sm font-medium text-gray-600'
              >
                Additionnal address
              </label>
              <input
                type='text'
                id='additionnaladdress'
                name='additionnaladdress'
                value={formData.additionnaladdress}
                onChange={handleChange}
                placeholder='Enter your address'
                className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='postalCode'
                className='block text-sm font-medium text-gray-600'
              >
                Postal Code
              </label>
              <input
                type='number'
                id='postalCode'
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                placeholder='Enter your postal Code'
                className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50 focus:outline-none appearance-none no-spinners'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-600'
              >
                City
              </label>
              <input
                type='text'
                id='city'
                name='city'
                value={formData.city}
                onChange={handleChange}
                placeholder='Enter your city'
                className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
                required
              />
            </div>
            <div className='max-w-md mx-auto mt-4'>
              <Select
                label={selectedCountry || 'Select Country'}
                onChange={(value: string | undefined) =>
                  handleCountryChange(value as string)
                }
              >
                <div className='flex items-center'>
                  <img src={bahrein} className='w-7 h-7' alt='bahrein' />
                  <Option className='bg-transparent' value='Bahreïn'>
                    Bahreïn
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={belgium} className='w-7 h-7' alt='belgium' />
                  <Option className='bg-transparent' value='Belgium'>
                    Belgium
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={china} className='w-7 h-7' alt='china' />
                  <Option className='bg-transparent' value='China'>
                    China
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={france} className='w-7 h-7' alt='france' />
                  <Option className='bg-transparent' value='France'>
                    France
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={germany} className='w-7 h-7' alt='germany' />
                  <Option className='bg-transparent' value='Germany'>
                    Germany
                  </Option>
                </div>
                <div className='flex items-center'>
                  <img src={italy} className='w-7 h-7' alt='italy' />
                  <Option className='bg-transparent' value='Italy'>
                    Italy
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={morocco} className='w-7 h-7' alt='morocco' />
                  <Option className='bg-transparent' value='Morocco'>
                    Morocco
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={spain} className='w-7 h-7' alt='spain' />
                  <Option className='bg-transparent' value='Spain'>
                    Spain
                  </Option>
                </div>

                <div className='flex items-center'>
                  <img src={usa} className='w-7 h-7' alt='usa' />
                  <Option className='bg-transparent' value='Usa'>
                    Usa
                  </Option>
                </div>
              </Select>
            </div>

            <div className='mt-4'>
              <Link to='/payment'>
                <button
                  type='submit'
                  className='w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90'
                  aria-label='Submit Form'
                >
                  Save your address
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPayment;
