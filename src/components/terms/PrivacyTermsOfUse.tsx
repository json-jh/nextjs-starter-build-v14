'use client'

import React, { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { classNames } from '@/utils/common'

export default function PrivacyTermsOfUse() {
  const [isAgree, setIsAgree] = useState(false)
  function agreement(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className='w-full flex flex-col'>
      <Disclosure>
        {({ open, close }) => (
          <>
            <Disclosure.Button className={classNames([
              'flex items-center gap-2 rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring ',
              'w-full',
              'bg-primary-100/90 text-primary-900 hover:bg-primary-200/50 focus-visible:ring-primary-500/75'
            ])}
            >
              <span className='flex-auto'>Privacy Terms Of Use</span>
              {!isAgree && <span className='text-red-400/50 text-xs'>Don&apos;t agree yet</span>}
              <span>
                <Icon
                  icon={'mdi:chevron-right'}
                  className={classNames([
                    'transition-[transform]',
                    open && 'rotate-90'
                  ])}
                />
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <div className='flex justify-end p-2'>
                  <button className='px-2 py-1 rounded bg-primary-300/50 hover:bg-primary-400/50' onClick={() => agreement()}>AGREEMENT</button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
