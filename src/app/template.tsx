'use client'

import Header from '@/components/layout/Header'
import { ReactNode } from 'react'

export default function RootTemplate({children }: { children: ReactNode }) {
  return (
    <section className='block'>
      <Header />
      <div>
        { children }
      </div>
      <div>footer</div>
    </section>
  )
}
