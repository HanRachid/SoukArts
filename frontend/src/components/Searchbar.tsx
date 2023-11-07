import lens from '../assets/navbar/lens.svg';

export default function Searchbar({setIsDropDown, isDropDown}: any) {
  function handleDropDown() {
    setIsDropDown(!isDropDown);
  }
  return (
    <>
      <div className='flex items-center justify-between p-4   h-10 rounded-3xl   bg-colorBeige bg-opacity-20 '>
        <div className='flex items-center'>
          <div className='relative'>
            <img src={lens} alt='' className='w-4 h-4 mr-2' />
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <span>|</span>
          <span className='ml-2 '> All Categories</span>
          <svg
            className='w-5 h-5 hover:text-slate-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={handleDropDown}
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
