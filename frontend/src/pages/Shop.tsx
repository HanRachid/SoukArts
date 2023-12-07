import {useState} from 'react';
import {Select, Option} from '@material-tailwind/react';
import france from '../assets/icons/france.png';
import anglais from '../assets/icons/usa.png';
import {router} from '../App';

function Shop() {
  const handlesubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    router.navigate('/sellerpayment');
  };
  const [laungue, setSelectedLangue] = useState('');

  const handleCountryChange = (laungue: string) => {
    setSelectedLangue(laungue);
  };

  const [formData, setFormData] = useState({
    namestore: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <section>
      <div className='mt-10 mb-20'>
        <h2 className='text-center font-primary text-large lg:text-extraLarge'>
          Info Store
        </h2>
        <div>
          <form
            className='max-w-md mx-auto mt-4 px-4 sm:px-0'
            onSubmit={handlesubmit}
            autoComplete='on'
          >
            <div className='mb-4'>
              <label htmlFor='Name Store'>Name Store</label>
              <input
                type='text'
                id='namestore'
                name='namestore'
                value={formData.namestore}
                onChange={handleChange}
                placeholder='Enter your name'
                className='w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
                required
              />
            </div>

            <div className='max-w-md mx-auto mt-4'>
              <label htmlFor='Name Store'>Langue Store</label>
              <Select
                label={laungue || 'Select Country'}
                onChange={(value: string | undefined) =>
                  handleCountryChange(value as string)
                }
              >
                <div className='flex w-full'>
                  <Option
                    className='bg-transparent w-full flex items-center justify-start'
                    value='Anglais'
                  >
                    <img src={anglais} className='w-7 h-7' alt='Anglais' />
                    <span className='ms-4'>Anglais</span>
                  </Option>
                </div>

                <div className='flex w-full'>
                  <Option
                    className='bg-transparent w-full flex items-center justify-start'
                    value='France'
                  >
                    <img src={france} className='w-7 h-7' alt='France' />
                    <span className='ms-4'>France</span>
                  </Option>
                </div>
              </Select>
            </div>

            <div className='mt-4'>
              <button
                type='submit'
                className='w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90'
                aria-label='Submit Form'
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Shop;
