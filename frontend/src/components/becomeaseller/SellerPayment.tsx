import '../../pages/css/DeliveryPayment.css';

import React from 'react';
import {useState} from 'react';
import {UserCircleIcon, CreditCardIcon} from '@heroicons/react/24/outline';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {router} from '../../App';

const SellerPayment = ({isSeller = false}: {isSeller?: any}) => {
  const [formData, setFormData] = useState({
    cardHolder: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    subtotal: 0,
    shipping: 0,
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
    router.navigate('/pending');
  };
  return (
    <div>
      <div className='mt-10 mb-20'>
        <h2 className='text-center font-primary text-large lg:text-extraLarge'>
          Payment Information
        </h2>
        <div>
          <form
            className='max-w-md mx-auto mt-4 px-4 sm:px-0'
            onSubmit={handleSubmit}
            autoComplete='on'
          >
            <button
              type='submit'
              className='w-full bg-black py-2.5 rounded-bl-xl rounded-tr-xl text-white font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90'
            >
              <span className='inline-block w-4 h-4 mr-2'>
                <FontAwesomeIcon icon={faApple} />
              </span>
              Pay
            </button>
            <div>
              <div className='flex items-center justify-center mt-4 mb-4'>
                <div className='w-full h-0.5 bg-gray-300'></div>
                <p className='px-4  '>Or</p>
                <div className='w-full h-0.5 bg-gray-300'></div>
              </div>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='cardHolder'
                className='block text-sm font-medium text-gray-600'
              >
                Card Holder
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='cardHolder'
                  name='cardHolder'
                  value={formData.cardHolder}
                  onChange={handleChange}
                  placeholder='Enter your full name here'
                  className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50 pl-8'
                  required
                />
                <UserCircleIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              </div>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='cardNumber'
                className='block text-sm font-medium text-gray-600'
              >
                Card Number
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='cardNumber'
                  name='cardNumber'
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder='xxxx xxxx xxxx xxxx'
                  className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50 pl-8'
                  required
                />
                <CreditCardIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              </div>
            </div>

            <div className='mb-4 flex gap-14'>
              <div className='w-2/4'>
                <label
                  htmlFor='expirationDate'
                  className='block text-sm font-medium text-gray-600'
                >
                  Expiration Date
                </label>
                <input
                  type='text'
                  id='expirationDate'
                  name='expirationDate'
                  value={formData.expirationDate}
                  onChange={handleChange}
                  placeholder='MM/YY'
                  className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50 !placeholder:text-colorGold'
                  required
                />
              </div>
              <div className='w-2/4'>
                <label
                  htmlFor='cvc'
                  className='block text-sm font-medium text-gray-600'
                >
                  CVC
                </label>
                <input
                  type='number'
                  id='cvc'
                  name='cvc'
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder='Enter CVC'
                  className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50 no-spinners'
                  required
                />
              </div>
            </div>

            {!isSeller && (
              <div className='mt-10 mb-10'>
                <div className='flex justify-between border-t border-colorGold'>
                  <p className='font-bold'>Subtotal</p>
                  <p>600 DH</p>
                </div>

                <div className='mb-4 flex justify-between border-b border-colorGold'>
                  <p className='font-bold'>Shipping</p>
                  <p>52 DH</p>
                </div>
              </div>
            )}

            <div className='mt-4'>
              <button
                type='submit'
                className='w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90'
                aria-label='Submit Form'
              >
                Continue to confirmation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerPayment;
