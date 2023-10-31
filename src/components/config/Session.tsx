import { AuthContext } from '@/context/AuthProvider'
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useContext } from 'react'

export default function Session() {
  const auth = useContext(AuthContext)

  if (auth.status !== "authenticated" || !auth.session.user) {
    return <></>
  }

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className='flex items-center'>
          {auth.session.user.image && <Image src={auth.session.user.image} alt={auth.session.user.name!} width={24} height={24} className='rounded-full w-[24px] h-[24px]' />}
          {!auth.session.user.image && <Icon icon='mdi:user-circle-outline' className='text-2xl' />}
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
          <Menu.Items className={[
            'absolute right-0 mt-2 origin-top-right focus:outline-none bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur',
            'rounded-md shadow dark:shadow-neutral-700 ring-1 ring-black ring-opacity-5',
            'p-1 flex flex-col gap-1'
          ].filter(c => !!c).join(' ')}
          >
            <Menu.Item as={'div'}>
              <Link href={'/profile'} className='group flex items-center p-1 text-sm w-full rounded-md hover:bg-slate-200/50 truncate'>
                  Profile
              </Link>
            </Menu.Item>
            <Menu.Item as={'div'}>
              <button className='group flex items-center p-1 text-sm w-full rounded-md hover:bg-slate-200/50 truncate' onClick={() => signOut()}>
                signOut
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
