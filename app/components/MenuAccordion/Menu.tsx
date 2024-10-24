"use client"

import { usePagosStore } from "@/app/zustand/usePagosStore"
import Header from "./Header"
import Rubro from "./Rubro"
import { useEffect } from "react"

const getSectores = (array: MenuRubroProps[], rubro: string) => {
    const sectoresArray = array.filter(object => object.rubro === rubro)
    return sectoresArray.length > 0 ? sectoresArray[0].sectores : []
}

export default function Menu({ data }: { data: MenuRubroProps[] }) {

    const { menuRubros, setMenuRubros } = usePagosStore()
    useEffect(() => {
        setMenuRubros(data)
    }, [setMenuRubros, data])

    const sortedRubros = ["ragazzi", "patricios", "palihue", "jmolina"]

    return (
        <section className="w-[250px] min-h-screen primary flex flex-col shadow-lg">

            <Header />
            {sortedRubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={getSectores(menuRubros, rubro)} />)}

        </section>
    )
}
