'use client'

import Main from '@/components/layout/Main'
import AuthProvider from '@/context/AuthProvider'
import UiProvider from '@/context/UiProvider'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export default function RootTemplate({children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <UiProvider>
          <Main>
            { children }
          </Main>
        </UiProvider>
      </AuthProvider>
    </SessionProvider>
  )
}
