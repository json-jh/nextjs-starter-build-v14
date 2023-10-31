import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  image: {
    src?: string
    alt?: string
    width?: number
    height?: number
    style?: string
  }
  icon?: {
    name?: string
    style?: string
  }
}

export default function ImageWithFallback(props: Props) {
  const {
    image: {
      src = '',
      alt = '',
      width = 24,
      height = 24,
      style:imageStyle = ''
    },
    icon: {
      name:iconName = 'mdi:user-circle-outline',
      style:iconStyle = 'text-2xl'
    } = {
      name: 'mdi:user-circle-outline',
      style: 'text-2xl'
    }
  } = props

  const [isError, setIsError] = useState<boolean>(false)
  
  return (
    <>
      {!isError ? <Image src={src} alt={alt} width={width} height={height} className={imageStyle} onError={() => setIsError(true)} /> : <Icon icon={iconName} className={iconStyle} />}
    </>
  )
}
