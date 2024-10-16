import { Sorted } from "@/app/utils/sort"

const RUBROS = {
  "ragazzi": ["luz", "gas", "telefono"],
  "patricios": ["agua", "cable", "internet"],
  "jmolina": ["sindicato", "cochera"],
  "palihue": ["visa", "contador", "rentas"]
}

export default function Menu() {

  const rubros = Sorted(Object.keys(RUBROS))

  return (
    <section className="w-5/12 flex flex-col">

      <div className="m-8 p-8 bg-red-100 rounded-lg shadow-xl">
        {rubros.map(rubro => <Rubro key={rubro} name={rubro} sectores={RUBROS[rubro]} />)}
      </div>

    </section>
  )
}

const Rubro = ({ name, sectores }: { name: string, sectores: string[] }) => {

  const sortedSectores = Sorted(sectores)

  return (
    <div className="py-4 flex gap-4">
      <span>{name} ({sectores.length})</span>
      {
        sectores.length !== 0
        && (
          <RubroForm name={name} sectores={sortedSectores} />
        )
      }

    </div>
  )
}

const RubroForm = ({ name, sectores }: { name: string, sectores: string[] }) => {
  return (
    <form>

      <select name="rubro" id={`rubro-${name}`}>
        <option value=""></option>
        {sectores.map(sector => <option key={sector} value={sector}>{sector}</option>)}

      </select>

      <input type="text" />
      <input type="date" />
      <button type="submit">Agregar</button>
    </form>
  )
}