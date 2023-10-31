import { classNames } from '@/utils/common'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

interface Props {
  provider: AuthProviders
}

export default function AuthProviderIcon({ provider:propProvider = 'google' }: Props) {
  const [provider = 'google', setProvider] = useState(propProvider)
  return (
    <>
      <Icon
        icon={{ 
          naver: 'simple-icons:naver', 
          google: 'simple-icons:google', 
          kakao: 'simple-icons:kakaotalk'
        }[provider]}
        className={classNames([
          provider === 'naver' && 'text-[#03c75a]',
          provider === 'google' && 'text-[#03c75a]',
          provider === 'kakao' && 'text-[#fee500]',
          'align-bottom'
        ])}
      />
    </>
  )
}
