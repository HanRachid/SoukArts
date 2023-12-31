import React from 'react';
import {CSSProperties} from 'react';
import {Seller} from '../../../types';

interface ModalComponentProps {
  content: Seller | null;
  position: {x: number; y: number};
}

const ModalComponent: React.FC<ModalComponentProps> = ({content, position}) => {
  // Using CSSProperties to define the styles
  const modalStyle: CSSProperties = {
    position: 'fixed',
    left: position.x, // Numeric value is automatically converted to px
    top: position.y, // Numeric value is automatically converted to px
    transform: 'translateY(-100%)',
  };
  const approved =
    '-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white';
  const pending =
    '-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-gray-600 px-3 py-1.5 text-white';
  const denied =
    '-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-red-600 px-3 py-1.5 text-white';

  function getStatus(status: string | undefined) {
    let value = '';
    switch (status) {
      case 'approved':
        value = approved;
        break;
      case 'denied':
        value = denied;
        break;
      case 'pending':
        value = pending;
        break;
    }

    return value;
  }
  return (
    <div style={modalStyle}>
      <article className='rounded-xl border-2 border-gray-20 bg-gray-50 min-w-fit max-w-md'>
        <div className='flex items-start gap-4 p-4 sm:p-6 lg:p-8'>
          <a href='#' className='block shrink-0'>
            <img
              alt='Speaker'
              src={`${
                content?.user_id.profile_image
                  ? content?.user_id.profile_image.url
                  : 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              }`}
              className='h-14 w-14 rounded-lg object-cover'
            />
          </a>

          <div>
            <h3 className='font-medium sm:text-lg'>
              <a href='#' className='hover:underline'>
                {' '}
                {content?.shop_name}{' '}
              </a>
            </h3>

            <p className='line-clamp-2 text-sm text-gray-700'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, accusantium temporibus iure delectus ut totam natus
              nesciunt ex? Ducimus, enim.
            </p>

            <div className='mt-2 sm:flex sm:items-center sm:gap-2'>
              <span className='hidden sm:block' aria-hidden='true'>
                &middot;
              </span>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <strong className={`${getStatus(content?.status)}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              />
            </svg>

            <span className='text-[10px] font-medium sm:text-xs'>
              {content?.status}
            </span>
          </strong>
        </div>
      </article>
    </div>
  );
};

export default ModalComponent;
