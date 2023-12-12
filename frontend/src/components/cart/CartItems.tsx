import ShopAffiliate from '../favorite/ShopAffiliate';
import {Link} from 'react-router-dom';
import {useState} from 'react';

import itemImage from '../../assets/rugs/rug 10.jpg';
import bottomIcon from '../../assets/icons/bottomIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import plus from '../../assets/icons/plus.png';
import codePromo from '../../assets/icons/codePromo.png';
import gift from '../../assets/icons/gift.png';
import visa from '../../assets/icons/visa.png';
import mastercard from '../../assets/icons/mastercard.png';
import paypal from '../../assets/icons/paypal.png';
import google from '../../assets/icons/google.png';
import {useSelector} from 'react-redux';
import {PopulatedProduct} from '../../../types';

const CartItems = () => {
  const [isGiftSelected, setIsGiftSelected] = useState(false);
  const handleGiftClick = () => {
    setIsGiftSelected(!isGiftSelected);
  };

  const [selectedPaymentOption, setSelectedPaymentOption] = useState<
    string | null
  >(null);
  const handlePaymentOptionChange = (option: string | null) => {
    setSelectedPaymentOption(option);
  };
  const cart = useSelector((state: any) => state.cart.cart);
  return (
    <section>
      <div className='mt-14 flex flex-col items-center gap-8'>
        <h2 className='text-large px-5 lg:px-24 xl:ms-20 text-bold'>
          {cart.length} item{cart.length > 1 && 's'} in your cart
        </h2>
        {cart.map((product: PopulatedProduct, index: number) => (
          <div className='w-full md:w-5/6 xl:w-3/6 bg-white rounded-tr-lg rounded-bl-lg px-5 py-5 shadow-lg'>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <div className='flex justify-center items-center w-9 h-9 rounded-full me-2 p-2 bg-colorBeige'>
                  <span className='font-primary font-bold text-medium mt-1'>
                    M
                  </span>
                </div>
                <p>MarrakechGallery</p>
              </div>
              <p>
                <Link to='' className='underline'>
                  Contact Shop
                </Link>
              </p>
            </div>

            <div className='flex justify-between mt-6'>
              <div className='flex gap-5'>
                <div>
                  <img
                    src={itemImage}
                    className='w-36 rounded-tr-lg rounded-bl-lg'
                    alt='itemImage'
                  />
                </div>
                <div>
                  <p className='text-red-700'>63 SOLD IN THE PAST 24 HOURS</p>
                  <p>Custom rug, Fabulous Boujad rug</p>
                  <p>Primary Color: Brown</p>
                  <p>Size: 2m sur 3m</p>
                  <p className='text-colorGold font-bold text-large'>600dh</p>
                  <p>
                    <span className='line-through'>1700dh</span>(60%)
                  </p>
                  <div className='flex justify-around mt-10'>
                    <div className='flex items-center'>
                      <span>1</span>
                      <img
                        src={bottomIcon}
                        className='w-4 h-4'
                        alt='bottomIcon'
                      />
                    </div>
                    <div className='flex items-center'>
                      <img src={editIcon} className='w-4 h-4' alt='editIcon' />
                      <span>Edit</span>
                    </div>
                    <p>Remove</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-10 md:flex-row md:gap-0 justify-between mt-10'>
              <div>
                <div className='flex gap-2'>
                  <img className='w-5 h-5' src={codePromo} alt='codePromo' />
                  <span>Apply shop coupons</span>
                </div>
                <div className='flex gap-2'>
                  <img className='w-5 h-5' src={plus} alt='plus' />
                  <span>Add a note to MarrakechGallery</span>
                </div>
                <div className='flex gap-2 items-center mt-5'>
                  <input
                    type='radio'
                    id='giftRadio'
                    className='hidden'
                    checked={isGiftSelected}
                    onChange={() => {}}
                    onClick={handleGiftClick}
                  />
                  <label
                    htmlFor='giftRadio'
                    className='cursor-pointer relative flex items-center'
                  >
                    <div
                      className={`w-4 h-4 border-2 rounded-full mr-2 ${
                        isGiftSelected
                          ? 'bg-colorGold'
                          : 'bg-white border-colorBrown'
                      }`}
                    ></div>
                    Specify that your order is a gift
                  </label>
                  <img className='w-5 h-5' src={gift} alt='gift' />
                </div>
              </div>
              <div className='w-36'>
                <p className='font-bold'>Delivery: 52dh</p>
                <p>Estimated Delivery: 2-15 december</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col px-5 lg:px-24 xl:flex-row justify-center gap-12 p-10'>
        <div className='xl:w-2/6'>
          <h2 className='text-large'>Payment</h2>
          <div className='flex flex-col sm:flex-row xl:flex-col mx-auto sm:items-center xl:items-stretch sm:gap-16'>
            <div className='sm:order-1'>
              <div className='flex gap-5 items-center mt-2'>
                <input
                  type='radio'
                  id='paymentCheckbox1'
                  checked={selectedPaymentOption === 'paymentCheckbox1'}
                  onChange={() => handlePaymentOptionChange('paymentCheckbox1')}
                  className='hidden'
                />
                <label
                  htmlFor='paymentCheckbox1'
                  className={`cursor-pointer relative flex items-center ${
                    selectedPaymentOption === 'paymentCheckbox1'
                      ? 'text-colorGold'
                      : 'text-colorBrown'
                  }`}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded ${
                      selectedPaymentOption === 'paymentCheckbox1'
                        ? 'bg-white border-colorGold'
                        : 'bg-white border-colorGold'
                    }`}
                  >
                    {selectedPaymentOption === 'paymentCheckbox1' && (
                      <span className='text-xs absolute top-0 left-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4 text-black'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 13l4 4L19 7' />
                        </svg>
                      </span>
                    )}
                  </div>
                </label>
                <label className='border border-colorBeige px-3'>
                  <img src={visa} className='w-10 h-10' alt='visa' />
                </label>
                <label className='border border-colorBeige px-3'>
                  <img
                    src={mastercard}
                    className='w-10 h-10'
                    alt='mastercard'
                  />
                </label>
              </div>

              <div className='flex gap-5 items-center mt-2'>
                <input
                  type='radio'
                  id='paymentCheckbox2'
                  checked={selectedPaymentOption === 'paymentCheckbox2'}
                  onChange={() => handlePaymentOptionChange('paymentCheckbox2')}
                  className='hidden'
                />
                <label
                  htmlFor='paymentCheckbox2'
                  className={`cursor-pointer relative flex items-center ${
                    selectedPaymentOption === 'paymentCheckbox2'
                      ? 'text-colorGold'
                      : 'text-colorBrown'
                  }`}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded ${
                      selectedPaymentOption === 'paymentCheckbox2'
                        ? 'bg-white border-colorGold'
                        : 'bg-white border-colorGold'
                    }`}
                  >
                    {selectedPaymentOption === 'paymentCheckbox2' && (
                      <span className='text-xs absolute top-0 left-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4 text-black'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 13l4 4L19 7' />
                        </svg>
                      </span>
                    )}
                  </div>
                </label>
                <label className='border border-colorBeige px-3'>
                  <img src={paypal} className='w-10 h-10' alt='paypal' />
                </label>
              </div>

              <div className='flex gap-5 items-center mt-2'>
                <input
                  type='radio'
                  id='paymentCheckbox3'
                  checked={selectedPaymentOption === 'paymentCheckbox3'}
                  onChange={() => handlePaymentOptionChange('paymentCheckbox3')}
                  className='hidden'
                />
                <label
                  htmlFor='paymentCheckbox3'
                  className={`cursor-pointer relative flex items-center ${
                    selectedPaymentOption === 'paymentCheckbox3'
                      ? 'text-colorGold'
                      : 'text-colorBrown'
                  }`}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded ${
                      selectedPaymentOption === 'paymentCheckbox3'
                        ? 'bg-white border-colorGold'
                        : 'bg-white border-colorGold'
                    }`}
                  >
                    {selectedPaymentOption === 'paymentCheckbox3' && (
                      <span className='text-xs absolute top-0 left-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4 text-black'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 13l4 4L19 7' />
                        </svg>
                      </span>
                    )}
                  </div>
                </label>
                <label className='border border-colorBeige px-3 flex items-center h-10'>
                  <img src={google} className='w-5 h-5' alt='google' />
                  <span>Pay</span>
                </label>
              </div>
            </div>

            <div className='order-1 xl:order-1'>
              <div className='border-b border-colorGold mt-5'>
                <div className='flex justify-between'>
                  <p>Items Total</p>
                  <p>1700 DH</p>
                </div>

                <div className='flex justify-between'>
                  <p>Shop Discount</p>
                  <p>-1100 DH</p>
                </div>
              </div>

              <div className='border-b border-colorGold mt-2'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>600 DH</p>
                </div>

                <div className='flex justify-between'>
                  <p>Delivery</p>
                  <p>52 DH</p>
                </div>
              </div>

              <div className='flex justify-between font-bold text-medium mt-3'>
                <p>Total</p>
                <p>652 DH</p>
              </div>
              <div className='text-center mt-5'>
                <Link to='/deliverypayment'>
                  <button className='bg-colorGold text-colorLight rounded-tr-lg rounded-bl-lg py-2 px-6'>
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-36'>
        <ShopAffiliate />
      </div>
    </section>
  );
};

export default CartItems;
