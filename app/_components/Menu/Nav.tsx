"use client"

import SettingsSVG from '@/app/_assets/SettingsSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Nav() {

  const pathname = usePathname()

  return (
    <nav className='w-full bg-header flex flex-col text-my-black'>
      <div className='flex h-[2rem]'>
        <Link className={`link-btn ${pathname === "/" && "link-btn-active"} border-r border-gray-400`} href={'/'}>pendientes</Link>
        <Link className={`link-btn border-r border-gray-400 ${pathname === "/pagos-realizados" && "link-btn-active"}`} href={'/pagos-realizados'}>realizados</Link>
        <Link href={'/admin/pagos'} className={`flex items-center justify-center hover:bg-my-hover ${pathname.includes("/admin") && "link-btn-active"} hover:text-my-white w-10`}>
          <SettingsSVG className={`size-6 p-1 ${pathname.includes("/admin") ? "var(--white)" : "var(--black)"}`} currentColor="currentColor" />
        </Link>
      </div>
    </nav>
  )
}
