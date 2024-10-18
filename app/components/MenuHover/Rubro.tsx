import { Sorted } from "@/app/utils/sort"
import RubroForm from "./RubroForm"

export default function Rubro({ rubro, sectores }: { rubro: string, sectores: string[] }) {

  const sortedSectores = Sorted(sectores)
  const isEmptyClass = sectores.length === 0 ? "text-gray-500" : "text-gray-900"

  return (
    <div className="rubro py-4 flex gap-2 justify-center">
      <div className="w-3/12" >
        <span className={`font-semibold ${isEmptyClass}`}>{rubro} </span>
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