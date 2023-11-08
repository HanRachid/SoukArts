import {Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';

export default function Homenavigation() {
  return (
    <>
      <Menu as={'div' as React.ElementType} className=' inline-block '>
        <div className='hover:font-semibold transform p-2 '>
          <Menu.Button className='inline-flex items-center gap-2  justify-center rounded-md p-2 focus:outline-none  '>
            Home
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
          <div className='flex '>
            <Menu.Items className='absolute flex gap-24 justify-between  mt-2 w-max p-8  origin-top-right rounded-sm  ring-black/5 focus:outline-none  border-t-4 border-b-4 border-colorGold shadow bg-colorBeigeLight'>
              <div>
                <div className=''>
                  <Menu.Item>
                    <button className='group flex w-full items-center rounded-sm px-2 py-2 text-sm'>
                      Categories
                    </button>
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
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
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Accessories
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
              <div>
                <div className=''>
                  <Menu.Item>
                    <button className='group flex w-full items-center rounded-md px-2 py-2 text-sm'>
                      Shop by Style
                    </button>
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Modern
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Classic
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Fusion
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Boho
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Trending Search
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
              <div>
                <div className=''>
                  <Menu.Item>
                    <button className='group flex w-full items-center rounded-md px-2 py-2 text-sm'>
                      Kilim Rug
                    </button>
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Raffia Shoes
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Leather Bags
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Brass Lamps
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className=''>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Raffia Lamps
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className='absolute bottom-0 pb-3'>
                  <Menu.Item>
                    {({active}: {active: boolean}) => (
                      <button
                        className={`${
                          active
                            ? ' bg-colorBeige '
                            : 'text-gray-900 bg-colorBeigeLight '
                        } group flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm `}
                      >
                        Shop All
                        <svg
                          fill='#000000'
                          version='1.1'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 330 330'
                          className='w-3'
                        >
                          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                          <g
                            id='SVGRepo_tracerCarrier'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          ></g>
                          <g id='SVGRepo_iconCarrier'>
                            {' '}
                            <path
                              id='XMLID_222_'
                              d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'
                            ></path>{' '}
                          </g>
                        </svg>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </>
  );
}