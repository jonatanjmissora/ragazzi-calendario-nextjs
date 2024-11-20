"use client"

import SettingsSVG from '@/app/_assets/SettingsSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MovilMenu from './MovilMenu'

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
