"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import HeaderTitle from "./HeaderTitle"
import { RubroFilter } from "./RubroFilter"
import { FechaFilter } from "./FechaFilter"

export default function Header({ page }: { page: string }) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const filterR = searchParams.get("filterR") ?? "todos"
    const filterF = searchParams.get("filterF") ?? ""

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
                {/*<div className="flex justify-between items center gap-4">
                     <span
                        className={`flex items-center text-my-black font-bold tracking-wide ${total == 0 && "opacity-0"}`}>
                        $ {montoFormat(total)}
                    </span>
                    <button
                        className={`text-slate-400 ${total == 0 && "opacity-0"} p-1 px-2 text-xl rounded-lg hover:bg-slate-300 hover:text-slate-700`}
                        onClick={deleteAllIdsTotal}
                    >
                        x
                    </button> 
                </div>*/}

                {
                    pathname === "/pagos-realizados"
                        ? <FechaFilter setFilter={setFilterF} filter={filterF} />
                        : <span></span>
                }

                <RubroFilter setFilter={setFilterR} filter={filterR} />

            </div>

            <HeaderTitle page={page} />

        </article>
    )
}

