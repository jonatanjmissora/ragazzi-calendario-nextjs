import { addOneMonth, getActualDate } from "@/app/_lib/utils/date"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"
import toast from "react-hot-toast"

export default function FilterHasta() {

  const hastaRef = useRef<HTMLInputElement>(null)

  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const actualNextMonth = addOneMonth(actualDate)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterDesde = searchParams.get("filterDesde") || actualDate
  const filterHasta = searchParams.get("filterHasta") || actualNextMonth

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
    <div className="flex flex-col">
      <input
        ref={hastaRef}
        className="w-[12ch] text-sm"
        onChange={handleHastaChange}
        type="date" name="hasta" id="hasta" defaultValue={filterHasta} />
      <label className="text-gray-500 text-xs tracking-wide mb-1 mx-1" htmlFor="hasta">hasta</label>
    </div>
  )
}
