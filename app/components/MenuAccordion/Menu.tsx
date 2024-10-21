import { Sorted } from "@/app/utils/sort"
import Rubro from "./Rubro"
import Header from "./Header"

export default function Menu() {

  //const rubros = await getMenuRubros()
  const rubros = { ragazzi: ["gas", "luz", "telefono"], "patricios": ["municipal", "rentas", "patente"] } as { [key: string]: string[] }
  const sortedRubros = Sorted(Object.keys(rubros))

  return (
    <section className="w-[250px] min-h-screen primary flex flex-col shadow-lg">

      <Header />

      {sortedRubros.map(rubro => <Rubro key={rubro} rubro={rubro} sectores={rubros[rubro]} />)}

    </section>
  )
}
