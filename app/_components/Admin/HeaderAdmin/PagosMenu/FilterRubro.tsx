import { RUBROSARRAY, SECTORESARRAY } from "@/app/_lib/utils/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function FilterRubro() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterRubro = searchParams.get("filterRubro") || ""
  const filterSector = searchParams.get("filterSector") || ""
  const sectoresArray = SECTORESARRAY
  const rubrosArray = RUBROSARRAY

  const handleRubroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (filterSector === "") params.set('filterSector', sectoresArray[0])
    params.set('filterRubro', event.currentTarget.value)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col">
      <select
        className="w-[11ch] pb-[0.1rem] hover:text-my-white duration-200"
        onChange={handleRubroChange}
        name="rubro" id="rubro" defaultValue={filterRubro}>
        {rubrosArray.map(rubro => <option key={rubro} value={rubro}>{rubro}</option>)}
      </select>
      <label className="text-my-white text-xs tracking-wide mx-1" htmlFor="rubro">rubro</label>
    </div>
  )
}
