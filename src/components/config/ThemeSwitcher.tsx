'use client'

import { UiContext } from "@/context/UiProvider";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from '@iconify/react';
import { Fragment, useContext } from 'react';


export default function ThemeSwitcher() {
  const { theme, themes, changeTheme } = useContext(UiContext);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className='flex items-center'>
          {
            {
              dark: <Icon icon={'mdi:moon-and-stars'} className='text-2xl' />,
              light: <Icon icon={'mdi:weather-sunny'} className='text-2xl' />,
              system: <Icon icon={'mdi:monitor'} className='text-2xl' />
            }[theme]
          }
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md shadow dark:shadow-neutral-700 ring-1 ring-black ring-opacity-5 focus:outline-none bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur">
            <div className="p-1 flex flex-col gap-1">
              {themes.map((item, index) => (
                <Menu.Item key={index} as={'div'}>
                  <button
                    className={[
                      'group flex items-center p-1 text-sm w-full rounded-md hover:bg-slate-200/50',
                      theme === item && 'bg-slate-200 dark:text-black'
                    ].filter(c => !!c).join(' ')}
                    onClick={() => changeTheme(item)}
                  >
                    {{
                      dark: <Icon icon={'mdi:moon-and-stars'} className='text-xl' />,
                      light: <Icon icon={'mdi:weather-sunny'} className='text-xl' />,
                      system: <Icon icon={'mdi:monitor'} className='text-xl' />
                    }[item]}
                    <span className='pl-2'>{item}</span>
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
