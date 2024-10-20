import { Sorted } from "@/app/utils/sort"
import Rubro from "./Rubro"
import { getMenuRubros } from "@/app/db/client"

export default async function Menu() {

  //const rubros = await getMenuRubros()
  const rubros = {ragazzi: ["gas", "luz", "telefono"]}
  const sortedRubros = Sorted(Object.keys(rubros))

  return (
    <section className="w-5/12 mt-20 flex flex-col items-center">

      <div className="min-w-[380px] py-4 primary rounded-lg shadow-xl">
        {sortedRubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={rubros[rubro]} />)}
      </div>

    </section>
  )
}
