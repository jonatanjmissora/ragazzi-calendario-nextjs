import { RUBROSARRAY, SECTORESARRAY } from "@/app/utils/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function FilterSector() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterRubro = searchParams.get("filterRubro") || ""
  const filterSector = searchParams.get("filterSector") || ""
  const sectoresArray = SECTORESARRAY
  const rubrosArray = RUBROSARRAY

  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (filterRubro === "") params.set('filterRubro', rubrosArray[0])
    params.set('filterSector', event.currentTarget.value)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col">
      <select
        className="w-[11ch] pb-[0.1rem]"
        onChange={handleSectorChange}
        name="sector" id="sector" defaultValue={filterSector}>
        {sectoresArray.map(sector => <option key={sector} value={sector}>{sector}</option>)}
      </select>
      <label className="text-gray-500 text-xs tracking-wide mx-1" htmlFor="sector">sector</label>
    </div>
  )
}
