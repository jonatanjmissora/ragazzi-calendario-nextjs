import { Input } from "./Input"

export function RubroFilter() {

  const filterNames = ["todos", "ragazzi", "patricios", "palihue", "jmolina"]

  return (
    <div className="my-2 w-full sm:w-3/4">

      <fieldset className="flex text-xs">

        {filterNames.map(name =>
          <Input key={name} text={name} />
        )}

      </fieldset>

    </div>

  )
}