"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Nav() {

  const pathname = usePathname()

  return (
    <nav className='w-full bg-my-white flex'>
      <Link className={`link-btn flex-1 text-my-black duration-200 ${pathname === "/" && "bg-my-black text-my-white"}`} href={'/'}>pendientes</Link>
      <Link className={`link-btn flex-1 text-my-black duration-200 ${pathname === "/pagos-realizados" && "bg-my-black text-my-white"}`} href={'/pagos-realizados'}>realizados</Link>
    </nav>
  )
}
