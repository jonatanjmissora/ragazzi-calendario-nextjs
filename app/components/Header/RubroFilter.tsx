import { Input } from "./Input"

export function RubroFilter({ filter, setFilter }: { filter: string, setFilter: (value: string) => void }) {

  const filterNames = ["todos", "ragazzi", "patricios", "palihue", "jmolina"]

  return (
    <div className="my-2">

      <fieldset className="flex gap-6 text-xs">

        {filterNames.map(name =>
          <Input key={name} text={name} filter={filter} setFilter={setFilter} />
        )}

      </fieldset>

    </div>

  )
}