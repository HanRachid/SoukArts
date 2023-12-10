/// <reference types="vite-plugin-svgr/client" />
import baseIcon from '../../assets/baseIcon.jpg';
import {Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import {logoutUser} from '../../api/auth';
import {useDispatch} from 'react-redux';
import {router} from '../../App';
import {setLogoutState} from '../../features/auth/authSlice';
export default function ProfileDropdown(): React.ReactElement {
  const dispatch = useDispatch();
  function handleLogout() {
    logoutUser().then(() => {
      dispatch(setLogoutState());
      router.navigate('/');
    });
  }

  function handlePrivacy() {
    router.navigate('/privacy');
  }
  const sections = [
    {name: 'Logout', handler: handleLogout},
    {
      name: 'Privacy',
      handler: handlePrivacy,
    },
    {name: 'Dashboard', handler: () => router.navigate('/dashboard')},
  ];

  return (
    <div className='flex  items-center justify-between rounded-3xl outline outline-3 hover:outline-2 outline-colorBeige hover:outline-colorGold '>
      <Menu as={'div' as React.ElementType}>
        <div className=' flex  p-1'>
          <Menu.Button>
            <img
              src={baseIcon}
              alt='lens'
              className='h-10 w-10  rounded-3xl outline outline-4 outline-colorGold'
            />
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
            className='flex flex-col absolute  p-2 mt-1.5  origin-top-right bg-colorBeigeLight  rounded-sm  ring-black/5 focus:outline-none border  border-black   z-50'
          >
            {sections.map((section, index) => (
              <button onClick={section.handler} key={index} className='w-fit'>
                <div className='group flex  items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                  <span className=' z-10 '>
                    {section.name}
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                  </span>
                </div>
              </button>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
