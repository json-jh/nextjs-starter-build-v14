'use client'

import Main from '@/components/layout/Main'
import UiProvider from '@/context/UiProvider'
import { ReactNode } from 'react'

export default function RootTemplate({children }: { children: ReactNode }) {
  return (
    <UiProvider>
      <Main>
        { children }
      </Main>
    </UiProvider>
  )
}
