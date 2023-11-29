import profile from '../../assets/profile.png';
import {FaStar} from 'react-icons/fa6';

const userRating = 4;

export default function HeaderDashbord() {
  return (
    <div className='flex items-start justify-between mt-10'>
      <div className='flex w-full'>
        <div className='mr-4 flex-shrink-0'>
          <div className='h-16 w-16 flex items-center justify-center rounded-md overflow-hidden'>
            <img src={profile} alt='' />
          </div>
        </div>
        <div>
          <h4 className='text-2xl font-bold font-primary tracking-wide'>
            Hello, EmmyStore!
          </h4>

          <div className='flex items-center mt-1'>
            <span className='flex items-center pr-1'>
              {[0, 1, 2, 3, 4].map((rating) => (
                <FaStar
                  key={rating}
                  className={`${
                    userRating > rating ? 'text-yellow-400' : 'text-gray-200'
                  }
                      'h-5 w-5 flex-shrink-0'`}
                  aria-hidden='true'
                />
              ))}
            </span>
            <span className='pr-2.5'>(2) |</span> <span>15 orders</span>
          </div>
        </div>
      </div>
      <div className='w-full text-end'>
        <p className='font-semibold'>imane.cahter@gmail.com</p>
      </div>
    </div>
  );
}
