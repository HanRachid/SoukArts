import lens from '../assets/navbar/lens.svg';
import {Menu, Transition} from '@headlessui/react';
import React, {Fragment, useState} from 'react';

export default function Searchbar() {
  const [category, setCategory] = useState('All Categories');
  function handleCategory(event: any) {
    setCategory(event.target.value);
  }
  return (
    <div className='flex items-center justify-between   h-12 rounded-3xl  bg-colorBeigeLight  focus:outline hover:outline outline-stone-400 outline-1  '>
      <img src={lens} alt='lens' className='h-4 pl-3 absolute' />
      <input
        type='search'
        className='bg-colorBeigeLight p-5 pl-10 w-3/6 h-10   rounded-2xl focus:outline-none '
      />
      <Menu
        as={'div' as React.ElementType}
        className='absolute inline-block right-0 '
      >
        <div className=' transform p-2 '>
          <Menu.Button className='  inline-flex items-center gap-2 w-full justify-center rounded-md p-2 focus:outline-none   '>
            <label htmlFor='search' className='border-l border-black pl-5 '>
              <span className='font-secondary'>{category}</span>
            </label>
            <svg
              className='w-4 h-4 flex items-end '
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
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right bg-colorBeigeLight p-3 rounded-sm  ring-black/5 focus:outline-none border  border-black text-small font-secondary'>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='All categories'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    }: group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Rugs'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Poufs'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Lamps'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Pillows'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Shoes'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Bags'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Jewelry'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <input
                    onClick={handleCategory}
                    value='Accessories'
                    type='button'
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  />
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
