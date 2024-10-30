"use client"

import Rubro from "./Rubro"
import { MenuRubroProps } from "@/app/types/menuRubros"
import Nav from "./Nav"
import Logo from "./Logo"
import MenuFooter from "./MenuFooter"
import WebLinks from "./WebLinks"
import Edit from "./Edit"

const getSectores = (array: MenuRubroProps[], rubro: string) => {
    const sectoresArray = array.filter(object => object.rubro === rubro)
    return sectoresArray.length > 0 ? sectoresArray[0].sectores : []
}

export default function Menu({ data }: { data: MenuRubroProps[] }) {

    const sortedRubros = ["ragazzi", "patricios", "palihue", "jmolina"]

    return (
        <section className="w-[300px] min-h-screen primary flex flex-col shadow-lg border border-slate-500">
            <div className="flex flex-col">
                <Nav />
                <Logo />
            </div>
            {sortedRubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={getSectores(data, rubro)} />)}
            <MenuFooter />

            <WebLinks />
            <Edit />
        </section>
    )
}
