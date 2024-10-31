"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import HeaderTitle from "./HeaderTitle"
import { RubroFilter } from "./RubroFilter"
import { FechaFilter } from "./FechaFilter"
import getActualDate from "@/app/utils/date"
import { ReactNode } from "react"
import HeaderAdmin from "./HeaderAdmin"

export default function Header({ page }: { page: string }) {

    const fechaActual = getActualDate().substring(0, 7)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const filterR = searchParams.get("filterR") ?? "todos"
    const filterF = searchParams.get("filterF") ?? fechaActual

    const setFilterR = (newFilter: string) => {
        params.set('filterR', newFilter);
        router.replace(`${pathname}?${params.toString()}`)
    }

    const setFilterF = (newFilter: string) => {
        params.set('filterF', newFilter);
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <article className="bg-my-white border">

            <div className="flex-1 flex justify-between items-center mb-2 mx-4">

                {pathname === "/" && <span className="text-my-black">Total</span>}
                {pathname === "/pagos-realizados" && <FechaFilter setFilter={setFilterF} filter={filterF} />}

                {pathname !== "/admin" && <RubroFilter setFilter={setFilterR} filter={filterR} />}

            </div>

            {pathname !== "/admin" && <HeaderTitle page={page} />}
            {pathname === "/admin" && <HeaderAdmin />}
        </article>
    )
}

