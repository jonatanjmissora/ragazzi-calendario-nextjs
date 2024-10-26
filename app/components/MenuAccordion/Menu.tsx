"use client"

import Rubro from "./Rubro"
import { useEffect } from "react"
import { useMenuStore } from "@/app/zustand/useMenuStore"
import { MenuRubroProps } from "@/app/types/menuRubros"
import Nav from "./Nav"
import Logo from "./Logo"

const getSectores = (array: MenuRubroProps[], rubro: string) => {
    const sectoresArray = array.filter(object => object.rubro === rubro)
    return sectoresArray.length > 0 ? sectoresArray[0].sectores : []
}

export default function Menu({ data }: { data: MenuRubroProps[] }) {

    const { menuRubros, setMenuRubros } = useMenuStore()
    useEffect(() => {
        setMenuRubros(data)
    }, [setMenuRubros, data])

    const sortedRubros = ["ragazzi", "patricios", "palihue", "jmolina"]

    return (
        <section className="w-[300px] min-h-screen primary flex flex-col shadow-lg border border-slate-500">
            <div className="flex flex-col">
                <Nav />
                <Logo />
            </div>
            {sortedRubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={getSectores(menuRubros, rubro)} />)}

        </section>
    )
}
