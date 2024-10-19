import { Sorted } from "@/app/utils/sort"
import RubroForm from "./RubroForm"

export default function Rubro({ rubro, sectores }: { rubro: string, sectores: string[] }) {

  const sortedSectores = Sorted(sectores)
  const isEmptyClass = sectores.length === 0 ? "text-gray-500" : "text-my-white"

  return (
    <div className="p-4 gap-4 flex justify-between relative">
      <div className="" >
        <span className={`font-semibold ${isEmptyClass}`}>{rubro}</span>
        <span
          className={isEmptyClass}
        >
          ({sectores.length})
        </span>
      </div >

      <RubroForm rubro={rubro} sectores={sortedSectores} />

    </div>
  )
}