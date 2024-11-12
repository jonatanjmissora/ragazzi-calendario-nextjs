"use client"

import { sortedAlpha } from "@/app/_lib/utils/sort"
import RubroForm from "./RubroForm"
import { useState } from "react"
import PlusSVG from "@/app/_assets/PlusSVG"

export default function Rubro({ rubro, sectores }: { rubro: string, sectores: string[] }) {

  const [showForm, setShowForm] = useState<boolean>(false)

  const sortedSectores = sortedAlpha(sectores)
  const isEmptyClass = sectores.length === 0

  const handleClick = () => {
    if (isEmptyClass) return
    setShowForm(prev => !prev)
  }

  const rubroClass = {
    "ragazzi": "hover:bg-[#ffff7dbf]",
    "patricios": "hover:bg-[#7dfd7dbf]",
    "palihue": "hover:bg-[#ffc8c8bf]",
    "jmolina": "hover:bg-[#9ed7ffbf]",
  } as { [key: string]: string }

  return (
    <div className="flex flex-col justify-between relative">

      <div
        className={`flex-1 flex justify-between items-center p-4 bg-my-white text-my-black text-sm border-b border-gray-500 ${showForm && rubro} ${rubroClass[rubro]} duration-200`}
        onClick={handleClick}>

        <div className={`${isEmptyClass && "text-gray-500"}`}>

          <span className={`font-semibold`}>{rubro} </span>
          <span>
            ({sectores.length})
          </span>

        </div>

        <button className="" ><PlusSVG className={`size-5 transition-transform duration-300 ${showForm && "rotate-45"} ${isEmptyClass && "text-gray-500"}`} /></button>

      </div >

      {
        showForm && <RubroForm rubro={rubro} sectores={sortedSectores} showForm={showForm} setShowForm={setShowForm} />
      }

    </div>
  )
}