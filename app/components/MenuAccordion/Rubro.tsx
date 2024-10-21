"use client"

import { Sorted } from "@/app/utils/sort"
import RubroForm from "./RubroForm"
import { useState } from "react"
import PlusSVG from "@/app/assets/PlusSVG"

export default function Rubro({ rubro, sectores }: { rubro: string, sectores: string[] }) {

  const [showForm, setShowForm] = useState<boolean>(false)

  const sortedSectores = Sorted(sectores)
  const isEmptyClass = sectores.length === 0

  const handleClick = () => {
    if (isEmptyClass) return
    setShowForm(prev => !prev)
  }

  return (
    <div className="flex flex-col justify-between relative">

      <div className="flex-1 flex justify-between items-center p-4 hover:bg-slate-800"
        onClick={handleClick}>

        <div className={`${isEmptyClass && "text-gray-400"}`}>

          <span className={`font-semibold ${isEmptyClass}`}>{rubro} </span>
          <span>
            ({sectores.length})
          </span>

        </div>

        <button className="" ><PlusSVG className={`size-6 transition-transform duration-300 ${showForm && "rotate-45"}`} /></button>

      </div >

      {
        showForm && <RubroForm rubro={rubro} sectores={sortedSectores} showForm={showForm} setShowForm={setShowForm} />
      }

    </div>
  )
}