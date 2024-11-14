"use client"

import PlusSVG from "@/app/_assets/PlusSVG"
import { sortedAlpha } from "@/app/_lib/utils/sort"
import RubroForm from "./RubroForm"

export default function Rubro({ rubro, sectores }: { rubro: string, sectores: string[] }) {

    const sortedSectores = sortedAlpha(sectores)


    const rubroClass = {
        "ragazzi": "hover:bg-[#ffff7dbf]",
        "patricios": "hover:bg-[#7dfd7dbf]",
        "palihue": "hover:bg-[#ffc8c8bf]",
        "jmolina": "hover:bg-[#9ed7ffbf]",
    } as { [key: string]: string }

    return (
        <div className="flex flex-col justify-between relative">

            <details name="menu" className="menu-details">

                <summary
                    className={`flex-1 flex justify-between items-center p-4 bg-header text-my-black text-sm border-b border-gray-500 ${rubroClass[rubro]} duration-200`}
                    data-rubro={rubro}
                >
                    <RubroSummary rubro={rubro} sectores={sectores} />
                </summary>

                <RubroForm rubro={rubro} sectores={sortedSectores} />

            </details>

        </div>
    )
}

const RubroSummary = ({ rubro, sectores }: { rubro: string, sectores: string[] }) => {

    const isEmptyClass = sectores.length === 0

    return (
        <>
            <div className={`${isEmptyClass && "text-gray-500"}`}>
                <span className={`font-semibold`}>{rubro} </span>
                <span>({sectores.length})</span>
            </div>

            <PlusSVG className={`plus-svg size-5 transition-transform duration-300 ${isEmptyClass && "text-gray-500"}`} />
        </>
    )
}

