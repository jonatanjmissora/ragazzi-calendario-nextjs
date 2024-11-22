import CalendarSVG from "@/app/_assets/CalendarSVG"
import CancelSVG from "@/app/_assets/CancelSVG"
import ChartSVG from "@/app/_assets/ChartSVG"
import Menu from "@/app/_assets/MenuSVG"
import SettingsSVG from "@/app/_assets/SettingsSVG"
import ThemeSVG from "@/app/_assets/ThemeSVG"
import UserSVG from "@/app/_assets/UserSVG"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MovilMenu() {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <div className='flex p-4 fixed top-0 z-20 sm:hidden'>
      {
        showMenu

          ? <Movil pathname={pathname} setShowMenu={setShowMenu} />

          : <button
            onClick={() => setShowMenu(true)}
          >
            <Menu className='size-12 p-1 rounded-full hamb-menu' currentColor="currentColor" />
          </button>
      }
    </div>
  )
}

const Movil = ({ pathname, setShowMenu }: { pathname: string, setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <nav className='fixed top-0 bottom-0 z-20 inset-0 bg-movil flex flex-col gap-12 pt-32 justify-start items-end text-4xl font-bold tracking-wider'>

      <button
        className='absolute top-6 right-6'
        onClick={() => setShowMenu(false)}
      >
        <CancelSVG className={"size-9 p-1"} currentColor="currentColor" />
      </button>

      <Link
        href={"/"}
        onClick={() => setShowMenu(false)}
        className={`flex justify-center items-center gap-2 px-8 border-b-2 ${pathname === "/" && "active"} animate-slide-right-0`}
      >
        pendientes
        <CalendarSVG className="size-8" currentColor="currentColor" />
      </Link>

      <Link
        href={'/pagos-realizados'}
        onClick={() => setShowMenu(false)}
        className={`flex justify-center items-center gap-2 px-8 border-b-2  ${pathname === "/pagos-realizados" && "active"} translate-x-full animate-slide-right-1`}
      >
        realizados
        <ChartSVG className="size-8" currentColor="currentColor" />
      </Link>

      <Link
        href={"/admin/pagos"}
        onClick={() => setShowMenu(false)}
        className={`flex justify-center items-center gap-2 px-8 border-b-2 ${pathname === "/admin/pagos" && "active"} translate-x-full animate-slide-right-2`}
      >
        admin
        <SettingsSVG className="size-8" currentColor="currentColor" />
      </Link>

      <details>
        <summary
          className="flex justify-center items-center gap-2 text-xl border-b-2 px-8 translate-x-full animate-slide-right-3"
        >
          Tema
          <ThemeSVG className="size-5" currentColor="currentColor" />
        </summary>
        <ul className="flex flex-col gap-4 justify-center items-end mt-4">
          <li className="text-base">oscuro</li>
          <li className="text-base">claro</li>
        </ul>
      </details>

      <span
        className="flex justify-center items-center gap-2 text-xl border-b-2 px-8 translate-x-full animate-slide-right-4"
      >
        cerrar sesion
        <UserSVG className="size-5" currentColor="currentColor" />
      </span>

    </nav>
  )
}