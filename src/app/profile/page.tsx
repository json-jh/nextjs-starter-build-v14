/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import AuthProviderIcon from '@/components/common/AuthProviderIcon'
import ImageWithFallback from '@/components/common/ImageWithFallback'
import PrivacyTermsOfUse from '@/components/terms/PrivacyTermsOfUse'
import PushNotificationTerms from '@/components/terms/PushNotificationTerms'
import { AuthContext } from '@/context/AuthProvider'
import { useContext } from 'react'

export default function page() {
  const auth = useContext(AuthContext)

  if (auth.status !== "authenticated" || !auth.session.user) {
    return <></>
  }

  return (
    <div className='flex flex-col gap-4 justify-center'>
      <div className='flex flex-col gap-3 items-center justify-center py-14 border-2 rounded-lg border-dotted'>
        <ImageWithFallback
          image={{
            src: auth.session.user.image!,
            alt: auth.session.user.name!,
            style: 'rounded-full w-[100px] h-[100px]'
          }}
          icon={{
            style: 'text-[100px]'
          }}
        />
        <div className='flex items-center gap-1 text-xl font-bold'>
          <AuthProviderIcon provider={auth.session.provider} />
          <p>{auth.session.user.name}</p>
        </div>
        <div className='font-bold'>
          {auth.session.user.email}
        </div>
      </div>
      <div className='flex flex-col gap-2 p-2 border-2 rounded-lg border-dotted'>
        <PrivacyTermsOfUse />
        <PushNotificationTerms />
      </div>
    </div>
  )
}
