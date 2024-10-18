"use client"

import CalendarSVG from "@/app/assets/CalendarSVG"
import RightArrowSVG from "@/app/assets/RightArrowSVG"
import { useRef, useState } from "react"

export default function RubroForm({ rubro, sectores }: { rubro: string, sectores: string[] }) {

  const [formIsEmpty, setFormIsEmpty] = useState<boolean>(true)
  const dateRef = useRef<HTMLInputElement>(null)

  if (sectores.length === 0) return

  const classForm = formIsEmpty ? "form" : ""

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setFormIsEmpty((value !== null && value !== "") ? false : true)
  }

  const handleCalendarClick = () => {
    dateRef.current?.showPicker()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sector = e.currentTarget.sector.value
    const monto = e.currentTarget.monto.value
    const date = e.currentTarget.date.value

    if (!sector || !monto) return

    const formData = {
      rubro,
      sector,
      monto,
      date,
    }
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={`${classForm} w-9/12 flex justify-between`}>

      <select className="w-[6rem] text-center bg-transparent border-b border-black" name="sector" id={`${rubro}-select`} onChange={handleChange}>
        <option value=""></option>
        {sectores.map(sector => <option key={sector} value={sector}>{sector}</option>)}
      </select>

      <input onChange={handleChange} className="w-[6rem] bg-transparent border-b border-black text-center" type="number" name="monto" />
      <input className="w-0" ref={dateRef} type="date" name="date" />
      <button type="button" onClick={handleCalendarClick}>
        <CalendarSVG className="size-6" />
      </button>

      <button type="submit"><RightArrowSVG className="size-6" /></button>
    </form>
  )
}
