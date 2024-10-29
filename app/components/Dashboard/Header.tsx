"use client"
import montoFormat from "@/app/utils/montoFormat"
import { usePagosStore } from "@/app/zustand/usePagosStore"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header({ page }: { page: string }) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const filter = searchParams.get("filter") ?? "todos"

    const setFilter = (newFilter: string) => {
        params.set('filter', newFilter);
        router.replace(`${pathname}?${params.toString()}`)
    }

    // const { getTotal, idsTotal, deleteAllIdsTotal } = usePagosStore()

    // const [total, setTotal] = useState<number>(0)
    // useEffect(() => {
    //     async function getT() {
    //         const resp = await getTotal()
    //         setTotal(resp)
    //     }
    //     getT()

    // }, [getTotal, idsTotal])

    return (
        <article className="bg-my-white border">

            <div className="flex-1 flex justify-between items-center mb-2 mx-4">
                <div className="flex justify-between items center gap-4">
                    {/* <span
                        className={`flex items-center text-my-black font-bold tracking-wide ${total == 0 && "opacity-0"}`}>
                        $ {montoFormat(total)}
                    </span>
                    <button
                        className={`text-slate-400 ${total == 0 && "opacity-0"} p-1 px-2 text-xl rounded-lg hover:bg-slate-300 hover:text-slate-700`}
                        onClick={deleteAllIdsTotal}
                    >
                        x
                    </button> */}
                </div>
                <Filter setFilter={setFilter} filter={filter} />
            </div>

            {page === "pendientes"
                ? <HeaderPendientes />
                : <HeaderRealizados />}

        </article>
    )
}

const Filter = ({ filter, setFilter }: { filter: string, setFilter: (value: string) => void }) => {

    const filterNames = ["todos", "ragazzi", "patricios", "palihue", "jmolina"]

    return (
        <div className="my-2">

            <fieldset className="flex gap-6 text-xs">

                {filterNames.map(name =>
                    <Input key={name} text={name} filter={filter} setFilter={setFilter} />
                )}

            </fieldset>

        </div>

    )
}

const Input = ({ text, filter, setFilter }: { text: string, filter: string, setFilter: (newFilter: string) => void }) => {

    const labelText = text[0].toUpperCase() + text.slice(1)

    return (
        <>
            <input
                className="hidden flex-0"
                onChange={() => setFilter(text)}
                type="radio" id={text} name="filter"
                checked={filter === text}
            />
            <label htmlFor={text}
                className="text-slate-600 text-center flex-1 border border-transparent hover:text-black px-1">{labelText}</label>
        </>
    )
}

const HeaderPendientes = () => {
    return (
        <div className="grid pagos-grid-6 tracking-wide font-semibold text-my-black mx-4">
            <span id="checkbox"></span>
            <span>vence</span>
            <span>rubro</span>
            <span>sector</span>
            <span>monto</span>
            <span id="menu"></span>
        </div>
    )
}

const HeaderRealizados = () => {
    return (
        <div className="grid pagos-grid-6 tracking-wide font-semibold text-my-black mx-4">
            <span></span>
            <span>vence</span>
            <span>rubro</span>
            <span>sector</span>
            <span>monto</span>
            <span className="mr-10">pagado</span>
        </div>
    )
}