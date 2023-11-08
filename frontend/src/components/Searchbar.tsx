import lens from '../assets/navbar/lens.svg';
import {Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';

export default function Searchbar() {
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
              <span className=''> All Categories </span>
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
                  <button
                    className={`${
                      active ? ' ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    All Categories
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Rugs
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Poufs
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Lamps
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Pillows
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Shoes
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Bags
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Jewelery
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className=''>
              <Menu.Item>
                {({active}: {active: boolean}) => (
                  <button
                    className={`${
                      active ? ' bg-colorBeige ' : 'text-gray-900  '
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Accessories
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
