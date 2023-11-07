import lens from '../assets/navbar/lens.svg';

export default function Searchbar() {
  return (
    <>
      <div className='flex items-center justify-between p-4  w-1/3 h-10 rounded-3xl w  bg-colorBeige bg-opacity-20 '>
        {/* Left section with logo and dropdown icon */}
        <div className='flex items-center'>
          <div className='relative'>
            <img src={lens} alt='' className='w-4 h-4 mr-2' />

            {/* Dropdown content here (You can use state or a library like react-query to manage dropdown state) */}
          </div>
        </div>

        {/* Right section with separator and "All Categories" */}
        <div className='flex items-center'>
          <div className='mx-2 border-l border-white h-4'></div>
          <span className='ml-2 text-white'>All Categories</span>
          <svg
            className='w-5 h-5 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
