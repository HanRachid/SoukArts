/// <reference types="vite-plugin-svgr/client" />
import lens from '../../assets/navbar/lens.svg';
import {Menu, Transition} from '@headlessui/react';
import CheckSVG from '../../assets/navbar/check.svg?react';
import React, {
  Fragment,
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from 'react';
import {router} from '../../App';

export default function Searchbar(): React.ReactElement {
  const [selectedCategory, setSelectedCategory] = useState('Categories');
  const [searchTerms, setSearchTerms] = useState('');
  const categories = [
    'Categories',
    'Rugs',
    'Poufs',
    'Lamps',
    'Pillows',
    'Shoes',
    'Bags',
    'Jewelry',
  ];
  const unselected: string =
    'pr-12 pl-6 categories group flex gap-3 w-full items-center rounded-md px-4 py-4 text-md ';
  const selected: string =
    'pr-12 pl-6 categories group flex gap-3 w-full items-center rounded-md px-4 py-4 text-md  ';

  function handleCategory(event: MouseEvent<HTMLInputElement>) {
    const value: string = (event.currentTarget as HTMLInputElement).value;
    if (value === selectedCategory) {
      return;
    }
    event.preventDefault();
    setSelectedCategory(value);
  }
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const value: string = event.target.value;
    setSearchTerms(value);
    console.log(value);
  }
  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const routeUrl = '/search/' + selectedCategory + '/' + searchTerms;
    router.navigate(routeUrl);
  }
  return (
    <div className='flex items-center justify-between h-10 rounded-3xl bg-colorBeigeLight focus:outline hover:outline outline-stone-400 outline-1'>
      <img src={lens} alt='lens' className='h-4 pl-3 absolute' />

      <form id='search' onSubmit={submitSearch}>
        <input
          type='search'
          className=' p-3 pl-10 w-[180px] xl:w-[250] h-10 ml-3 rounded-2xl focus:outline-none bg-colorBeigeLight'
          value={searchTerms}
          onChange={handleSearch}
        />
      </form>

      <Menu as={'div' as React.ElementType}>
        <div className=' transform '>
          <Menu.Button className='inline-flex items-center gap-2 w-full justify-center rounded-md p-2 focus:outline-none'>
            <label
              htmlFor='search'
              className='border-l border-black-950 pl-1 xl:pl-5 '
            >
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
            className='absolute right-0 p-1.5 w-56 origin-top-right bg-colorBeigeLight  rounded-sm  ring-black/5 focus:outline-none border  border-black text-small font-secondary z-50'
          >
            {categories.map((category, index) => (
              <div key={index}>
                <Menu.Item>
                  <div
                    className={
                      category == selectedCategory
                        ? 'flex items-center  rounded-md  text-sm  bg-colorBeige hover:scale-[1.02] transition-all duration-100'
                        : 'flex items-center  rounded-md  text-sm  hover:bg-colorBeige hover:scale-[1.02] transition-all duration-100'
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
