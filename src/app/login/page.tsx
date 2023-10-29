'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, update } = useSession()
  return (
    <>
      <div>{JSON.stringify(data?.user)}1</div>
      <div>
        {status}
      </div>
    </>
  )
}
