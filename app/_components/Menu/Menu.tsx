"use client"

import { MenuRubroProps } from "@/app/_types/menuRubros"
import Nav from "./Nav"
import Logo from "./Logo"
import MenuFooter from "./MenuFooter"
import WebLinks from "./WebLinks"
import { usePathname } from "next/navigation"
import ResetBtn from "./ResetBtn"
import Rubro from "./Rubro"

const getSectores = (array: MenuRubroProps[], rubro: string) => {
    const sectoresArray = array.filter(object => object.rubro === rubro)
    return sectoresArray.length > 0 ? sectoresArray[0].sectores : []
}

export default function Menu({ data }: { data: MenuRubroProps[] }) {

    const sortedRubros = ["ragazzi", "patricios", "palihue", "jmolina"]
    const pathname = usePathname()

    return (
        <section className="w-full mt-20 relative bg-card flex flex-col shadow-lg animate-slide sm:mt-0 sm:w-[300px] sm:min-h-screen">
            <Nav />
            <Logo />
            {sortedRubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={getSectores(data, rubro)} />)}
            {pathname.includes("admin") && <MenuFooter />}
            {pathname === ("/") && <ResetBtn />}
            <div className="flex-1"></div>
            <WebLinks />
        </section>
    )
}
