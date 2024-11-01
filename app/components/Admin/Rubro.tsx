"use client"

import CancelSVG from "@/app/assets/CancelSVG";
import PlusSVG from "@/app/assets/PlusSVG";
import { MenuRubroProps } from "@/app/types/menuRubros";

export default function Rubro({ rubro }: { rubro: MenuRubroProps }) {
  return (
    <div className="p-2 bg-my-white rounded-lg shadow">

      <div className="flex justify-between items-center">
        <span className="font-bold tracking-wide">{rubro.rubro}</span>
        <form className="flex items-center justify-center gap-1">
          <input className="text-sm text-center w-[15ch] mb-2" type="text" />
          <button type="submit">
            <PlusSVG className="size-7 p-1 pb-2" />
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-2">
        {rubro.sectores.map(sector => <SectorCard key={sector} sector={sector} />)}
      </div>

    </div>
  )
}

const SectorCard = ({ sector }: { sector: string }) => {

  const handleCancel = () => {
    alert("Desea eliminarlo?")
  }

  return (
    <div className="bg-gray-500 text-my-white flex gap-2 justify-center items-center px-1 rounded-lg duration-200 hover:bg-my-black hover:text-my-white">
      <span>{sector}</span>
      <button
        className="pt-[0.15rem]"
        onClick={handleCancel}
      >
        <CancelSVG className="size-5 p-1" currentColor="#cacaca" />
      </button>
    </div>
  )
}