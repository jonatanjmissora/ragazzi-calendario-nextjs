"use client"

import Menu from '@/app/_assets/MenuSVG'
import SettingsSVG from '@/app/_assets/SettingsSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Nav() {

  const pathname = usePathname()

  return (
    <article className='flex items-center justify-end'>
    <nav className='hidden sm:flex w-full h-full px-[0.1rem]'>
      
        <Link className={`link-btn ${pathname === "/" && "link-btn-active"}`} href={'/'}>pendientes</Link>
        <Link className={`link-btn ${pathname === "/pagos-realizados" && "link-btn-active"}`} href={'/pagos-realizados'}>realizados</Link>

        <div className='w-10 h-full'>
          <Link
            href={'/admin/pagos'}
            className={`link-btn ${pathname.includes("/admin") && "link-btn-active"} w-full h-full`}
            >
            <SettingsSVG className={`size-4 ${pathname.includes("/admin") ? "var(--white)" : "var(--black)"}`} currentColor="currentColor" />
          </Link>
        </div>
      
    </nav>

    <MovilMenu />
    
    </article>
  )
}

const MovilMenu = () => {
  
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className='flex p-4 fixed top-0 z-20 sm:hidden'>
    {
      showMenu
      ? <nav className='fixed top-0 bottom-0 z-20 inset-0 bg-my-black flex flex-col'>
          <span className='absolute top-6 right-6'
            onClick={() => setShowMenu(false)}
          >X</span>
            <Link href={'/'}>
              pendientes
            </Link>
            <Link href={'/pagos-realizados'}>
              realizados
            </Link>
            <Link href={'/admin/pagos'}>
              admin
            </Link>
            <details>
              <summary>Tema</summary>
              <ul>
                <li>oscuro</li>
                <li>claro</li>
              </ul>
            </details>
          <span>cerrar sesion</span>
        </nav> 
      : <button
        onClick={() => setShowMenu(true)}
        >
        <Menu className='size-12 p-1 rounded-full bg-my-hover/50' currentColor='#cacaca'/>
        </button>
    }
    </div>
  )
}
