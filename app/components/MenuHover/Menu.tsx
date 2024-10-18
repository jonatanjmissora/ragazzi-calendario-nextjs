import { Sorted } from "@/app/utils/sort"
import Rubro from "./Rubro"

const RUBROS = {
  "ragazzi": ["luz", "gas"],
  "patricios": ["agua", "cable", "internet"],
  "jmolina": ["sindicato", "cochera"],
  "palihue": ["visa", "contador", "rentas"]
}

export default function Menu() {

  const rubros = Sorted(Object.keys(RUBROS))

  return (
    <section className="w-5/12 flex flex-col">

      <div className="m-24 p-8 bg-red-100 rounded-lg shadow-xl">
        {rubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={RUBROS[rubro]} />)}
      </div>

    </section>
  )
}