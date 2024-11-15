import { addOneMonth, getActualDate } from "@/app/_lib/utils/date"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"
import toast from "react-hot-toast"

export default function FilterDesde() {

  const desdeRef = useRef<HTMLInputElement>(null)
  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const actualNextMonth = addOneMonth(actualDate)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterDesde = searchParams.get("filterDesde") || actualDate
  const filterHasta = searchParams.get("filterHasta") || actualNextMonth

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

  return (
    <div className="flex flex-col">
      <input
        ref={desdeRef}
        className="w-[12ch] text-sm hover:text-my-white duration-200"
        onChange={handleDesdeChange}
        type="date" name="desde" id="desde" defaultValue={filterDesde} />
      <label className="text-my-white text-xs tracking-wide mb-1 mx-1" htmlFor="desde">desde</label>
    </div>
  )
}
