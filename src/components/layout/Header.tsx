'use client'

import Link from 'next/link'
import React from 'react'
import { Icon } from "@iconify/react";
import ThemeSwitcher from '../config/ThemeSwitcher';

export default function Header() {
  return (
    <header className='h-[var(--header-height)] sticky top-0 w-full'>
      <div className='container mx-auto flex items-center backdrop-blur h-full'>
        <div className=''>
          <Link href={'/'} className="flex items-center gap-1 drop-shadow-[2px_2px_3px]">
            <Icon icon="mdi:cube-scan" className='text-3xl text-primary-400' />
            <b className="text-2xl">JSON.JH</b>
          </Link>
        </div>
        <div className='flex-auto'></div>
        <div className='flex-auto flex flex-nowrap justify-end items-center'>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
