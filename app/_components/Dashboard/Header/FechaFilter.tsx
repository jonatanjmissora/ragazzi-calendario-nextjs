"use client"

import { MONTHSARRAY } from "@/app/_lib/utils/constants"
import { addOneMonth, getActualDate } from "@/app/_lib/utils/date"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"

export function FechaFilter() {

  const yearRef = useRef<HTMLSelectElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)

  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const [actualYear, ,] = actualDate.split("-")
  const yearsArray = Array.from(Array(10).keys()).map(a => Number(actualYear) - a)
  const monthsArray = MONTHSARRAY

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterDesde = searchParams.get("filterDesde") || actualDate

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.currentTarget.value
    const selectedMonthValue = monthRef.current?.value
    const selectedMonthIndex = monthsArray.findIndex(month => month === selectedMonthValue) + 1
    const selectedMonth = selectedMonthIndex < 10 ? "0" + selectedMonthIndex : selectedMonthIndex.toString()
    const selectedDate = `${selectedYear}-${selectedMonth}-01`
    const actualNextMonth = addOneMonth(selectedDate)
    params.set('filterDesde', selectedDate);
    params.set('filterHasta', actualNextMonth);
    router.replace(`${pathname}?${params.toString()}`)
  }

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonthValue = event.currentTarget.value
    const selectedMonthIndex = monthsArray.findIndex(month => month === selectedMonthValue) + 1
    const selectedMonth = selectedMonthIndex < 10 ? "0" + selectedMonthIndex : selectedMonthIndex.toString()
    const selectedYear = yearRef.current?.value
    const selectedDate = `${selectedYear}-${selectedMonth}-01`
    const actualNextMonth = addOneMonth(selectedDate)
    params.set('filterDesde', selectedDate);
    params.set('filterHasta', actualNextMonth);
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex justify-center gap-6">
      <select
        ref={yearRef}
        onChange={handleYearChange}
        name="year" id="year-filter" defaultValue={filterDesde.substring(0, 4)}>
        {yearsArray.map(year => <option key={year} value={year}>{year}</option>)}
      </select>

      <select
        ref={monthRef}
        onChange={handleMonthChange}
        name="month" id="month-filter" defaultValue={monthsArray[Number(filterDesde.substring(5, 7)) - 1]}>
        {monthsArray.map(month => <option key={month} value={month}>{month}</option>)}
      </select>
    </div>
  )
}