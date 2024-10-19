import { Sorted } from "@/app/utils/sort"
import Rubro from "./Rubro"

const RUBROS = {
  "ragazzi": ["luz", "gas"],
  "patricios": ["agua", "cable", "internet"],
  "jmolina": ["sindicato", "cochera", "cochera", "cochera", "cochera", "cochera", "cochera", "cochera", "cochera", "cochera", "cochera", "cochera"],
  "palihue": ["visa", "contador", "rentas"]
}

export default function Menu() {

  const rubros = Sorted(Object.keys(RUBROS))

  return (
    <section className="w-5/12 mt-20 flex flex-col items-center">

      <div className="min-w-[380px] py-4 primary-red rounded-lg shadow-xl">
        {rubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={RUBROS[rubro]} />)}
      </div>

    </section>
  )
}