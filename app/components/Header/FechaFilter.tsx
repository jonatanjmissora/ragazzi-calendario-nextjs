"use client"

import { MONTHSARRAY } from "@/app/utils/constants"
import { getActualDate } from "@/app/utils/date"

export function FechaFilter({ filter, setFilter }: { filter: string, setFilter: (value: string) => void }) {

  const [actualYear, actualMonth,] = getActualDate().split("-")
  const yearsArray = Array.from(Array(10).keys()).map(a => Number(actualYear) - a)
  const monthsArray = MONTHSARRAY

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.currentTarget.value
    const newFilterF = filter === ""
      ? selectedYear + getActualDate().substring(4, 7)
      : selectedYear + filter.substring(4.7)
    setFilter(newFilterF)
  }

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonthValue = event.currentTarget.value
    const selectedMonthIndex = monthsArray.findIndex(month => month === selectedMonthValue) + 1
    const selectedMonth = selectedMonthIndex < 10 ? "0" + selectedMonthIndex : selectedMonthIndex.toString()
    const newFilterF = filter === ""
      ? getActualDate().substring(0, 5) + selectedMonth
      : filter.substring(0, 5) + selectedMonth
    setFilter(newFilterF)
  }

  return (
    <div className="flex justify-center gap-6">
      <select
        onChange={handleYearChange}
        name="year" id="year-filter" defaultValue={filter.substring(0, 4)}>
        {yearsArray.map(year => <option key={year} value={year}>{year}</option>)}
      </select>

      <select
        onChange={handleMonthChange}
        name="month" id="month-filter" defaultValue={monthsArray[Number(filter.substring(5, 7)) - 1]}>
        {monthsArray.map(month => <option key={month} value={month}>{month}</option>)}
      </select>
    </div>
  )
}