/// <reference types="vite-plugin-svgr/client" />
import lens from '../assets/navbar/lens.svg';
import {Menu, Transition} from '@headlessui/react';
import CheckSVG from '../assets/navbar/check.svg?react';
import React, {Fragment, useState} from 'react';

export default function Searchbar() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const categories = [
    'All categories',
    'Rugs',
    'Poufs',
    'Lamps',
    'Pillows',
    'Shoes',
    'Bags',
    'Jewelry',
    'Accessories',
  ];
  const unselected: string =
    'pr-12 pl-6 categoriesAll group flex gap-3 w-full items-center rounded-md px-4 py-4 text-sm ';
  const selected: string =
    'pr-12 pl-6 categoriesAll group flex gap-3 w-full items-center rounded-md px-4 py-4 text-sm  ';

  function handleCategory(event: any) {
    const value: string = event.target.value;
    if (value === selectedCategory) {
      return;
    }
    event.preventDefault();
    setSelectedCategory(value);
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
        <div className=' transform '>
          <Menu.Button className='  inline-flex items-center gap-2 w-full justify-center rounded-md p-2 focus:outline-none   '>
            <label htmlFor='search' className='border-l border-black pl-5 '>
              <span className='font-secondary'>{selectedCategory}</span>
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
          <Menu.Items
            static
            className='absolute right-0  w-56 origin-top-right bg-colorBeigeLight  rounded-sm  ring-black/5 focus:outline-none border  border-black text-small font-secondary'
          >
            {categories.map((category, index) => (
              <div key={index} className=''>
                <Menu.Item value={category}>
                  <div
                    className={
                      category == selectedCategory
                        ? 'flex items-center  rounded-md  text-sm  bg-colorBeige'
                        : 'flex items-center  rounded-md  text-sm  hover:bg-colorBeige'
                    }
                  >
                    <CheckSVG
                      className={
                        category === selectedCategory
                          ? 'ml-2 visible '
                          : 'ml-2 invisible '
                      }
                    />
                    <input
                      className={
                        category == selectedCategory ? selected : unselected
                      }
                      onClick={handleCategory}
                      value={category}
                      type='button'
                    />
                  </div>
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
