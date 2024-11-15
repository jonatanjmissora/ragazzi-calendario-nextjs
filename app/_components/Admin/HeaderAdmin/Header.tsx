"use client"

import React from 'react'
import AdminMenu from './AdminMenu'
import { usePathname } from 'next/navigation'
import PagosMenu from './PagosMenu/PagosMenu'
import SectoresMenu from './SectoresMenu'

export default function Header() {

  const pathname = usePathname()

  return (
    <article className="bg-header">

      <AdminMenu />
      {pathname === "/admin/pagos" && <PagosMenu />}
      {pathname === "/admin/sectores" && <SectoresMenu />}
      {pathname === "/admin/weblinks" && <div className='w-full h-[5rem]'></div>}

    </article>
  )
}
