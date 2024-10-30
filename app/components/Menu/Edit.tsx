import SettingsSVG from '@/app/assets/SettingsSVG'
import Link from 'next/link'
import React from 'react'

export default function Edit() {
  return (
    <Link href={'/admin'} className='bg-my-white w-full'>
      <SettingsSVG className='size-7 p-1 ml-auto' currentColor="var(--black)" />
    </Link>
  )
}
