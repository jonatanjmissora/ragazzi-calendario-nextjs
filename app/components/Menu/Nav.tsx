"use client"

import SettingsSVG from '@/app/assets/SettingsSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Nav() {

  const pathname = usePathname()

  return (
    <nav className='w-full bg-my-white flex flex-col'>
      <div className='flex h-[2rem]'>
        <Link className={`link-btn ${pathname === "/" && "link-btn-active"} border-r border-gray-400`} href={'/'}>pendientes</Link>
        <Link className={`link-btn ${pathname === "/pagos-realizados" && "link-btn-active"}`} href={'/pagos-realizados'}>realizados</Link>
      </div>
      <Link href={'/admin/pagos'} className={`link-btn ${pathname.includes("/admin") && "link-btn-active"}`}>
        <span className='font-bold tracking-wide'>admin</span> 
        <SettingsSVG className='size-6 p-1' currentColor={`${pathname.includes("/admin") ? "var(--white)" : "var(--black)"}`} />
      </Link>
    </nav>
  )
}
