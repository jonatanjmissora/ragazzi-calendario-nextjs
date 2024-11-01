"use client"

import React from 'react'
import AdminMenu from './AdminMenu'
import AdminSubMenu from './AdminSubMenu'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname()

  return (
    <article className="bg-my-white border">

        <AdminMenu />
        {
          pathname === "/admin/pagos" 
            ? <AdminSubMenu /> 
            : <div className='w-full h-[5rem]'></div>
        }
      
    </article>
  )
}
