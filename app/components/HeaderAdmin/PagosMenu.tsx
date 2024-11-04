"use client"

import { RUBROSARRAY, SECTORESARRAY } from "@/app/utils/constants"
import { addOneMonth, getActualDate } from "@/app/utils/date"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"
import toast from "react-hot-toast"

export default function PagosMenu() {

  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const actualNextMonth = addOneMonth(actualDate)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterRubro = searchParams.get("filterRubro") || ""
  const filterSector = searchParams.get("filterSector") || ""
  const filterDesde = searchParams.get("filterDesde") || actualDate
  const filterHasta = searchParams.get("filterHasta") || actualNextMonth
  const sectoresArray = SECTORESARRAY
  const rubrosArray = RUBROSARRAY

  const desdeRef = useRef<HTMLInputElement>(null)
  const hastaRef = useRef<HTMLInputElement>(null)

  const handleRubroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (filterSector === "") params.set('filterSector', sectoresArray[0])
    params.set('filterRubro', event.currentTarget.value)
    router.replace(`${pathname}?${params.toString()}`)
  }


  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (filterRubro === "") params.set('filterRubro', rubrosArray[0])
    params.set('filterSector', event.currentTarget.value)
    router.replace(`${pathname}?${params.toString()}`)
  }


  const handleDesdeChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const hastaValue = filterHasta
    const hastaDate = new Date(hastaValue)

    const desdeValue = event.currentTarget.value
    desdeValue.replaceAll("-", "/")
    const desdeDate = new Date(desdeValue)

    if (hastaDate < desdeDate) {
      toast.error("Fecha desde, es mayor a fecha hasta")
      if (desdeRef.current !== null)
        desdeRef.current.value = filterDesde
      return
    }

    params.set('filterDesde', desdeValue)
    params.set("filterHasta", hastaValue)
    router.replace(`${pathname}?${params.toString()}`)
  }


  const handleHastaChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const desdeValue = filterDesde
    const desdeDate = new Date(desdeValue)

    const hastaValue = event.currentTarget.value
    hastaValue.replaceAll("-", "/")
    const hastaDate = new Date(hastaValue)

    if (hastaDate < desdeDate) {
      toast.error("Fecha hasta, es menor a fecha desde")
      if (hastaRef.current !== null)
        hastaRef.current.value = filterHasta
      return
    }

    params.set('filterHasta', hastaValue)
    params.set('filterDesde', desdeValue)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <article className="flex justify-center items-center h-[5rem]">

      <div className="flex justify-center items-center gap-8">

        <div className="flex flex-col">
          <select
            className="w-[11ch] pb-[0.1rem]"
            onChange={handleRubroChange}
            name="rubro" id="rubro" defaultValue={filterRubro}>
            {rubrosArray.map(rubro => <option key={rubro} value={rubro}>{rubro}</option>)}
          </select>
          <label className="text-gray-500 text-xs tracking-wide mx-1" htmlFor="rubro">rubro</label>
        </div>

        <div className="flex flex-col">
          <select
            className="w-[11ch] pb-[0.1rem]"
            onChange={handleSectorChange}
            name="sector" id="sector" defaultValue={filterSector}>
            {sectoresArray.map(sector => <option key={sector} value={sector}>{sector}</option>)}
          </select>
          <label className="text-gray-500 text-xs tracking-wide mx-1" htmlFor="sector">sector</label>
        </div>

        <div className="flex flex-col">
          <input
            ref={desdeRef}
            className="w-[12ch] text-sm"
            onChange={handleDesdeChange}
            type="date" name="desde" id="desde" defaultValue={filterDesde} />
          <label className="text-gray-500 text-xs tracking-wide mb-1 mx-1" htmlFor="desde">desde</label>
        </div>

        <div className="flex flex-col">
          <input
            ref={hastaRef}
            className="w-[12ch] text-sm"
            onChange={handleHastaChange}
            type="date" name="hasta" id="hasta" defaultValue={filterHasta} />
          <label className="text-gray-500 text-xs tracking-wide mb-1 mx-1" htmlFor="hasta">hasta</label>
        </div>

      </div>

    </article>
  )
}
