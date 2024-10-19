"use client"

import PlusSVG from "@/app/assets/PlusSVG"
import getActualLocaleDate from "@/app/utils/date"
import { useRef, useState } from "react"

const delay = () => new Promise(res => {
  setTimeout(() => {
    res("")
  }, 2000)
})


export default function RubroForm({ rubro, sectores }: { rubro: string, sectores: string[] }) {

  const currentLocaleDate = getActualLocaleDate()

  const [showForm, setShowForm] = useState<boolean>(false)
  const [actualSector, setActualSector] = useState<string>("")
  const [actualDate, setActualDate] = useState<string>(currentLocaleDate)
  const [actualMonto, setActualMonto] = useState<number | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dateRef = useRef(null)
  const showDateRef = useRef(null)

  const reset = () => {
    setActualSector("")
    setActualMonto(0)
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!actualSector || !actualMonto) return

    const formData = {
      rubro,
      sector: actualSector,
      monto: actualMonto,
      date: actualDate,
    }
    try {
      setIsLoading(true)
      await delay()
      reset()
      alert("Cargado")
    } catch (error) {

    }
    finally {
      setIsLoading(false)
    }

  }

  const handleCalendarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value
    showDateRef.current.value = date
    setActualDate(date)
  }

  if (sectores.length === 0) return

  return (
    <div className="flex justify-between">

      {
        showForm
        && (

          <form onSubmit={handleSubmit} 
            className="flex-1 flex justify-between absolute z-10 left-0 right-0 top-[95%] bg-my-white rounded-lg">
            
            <div onClick={() => setShowForm(prev => !prev)} className="absolute -inset-[100%]"></div>

            <SectoresList sectores={sectores} actualSector={actualSector} setActualSector={setActualSector} />

            <div className="relative flex-1 flex flex-col gap-1 justify-between items-center p-2">
              
              <div className="min-h-[100px] min-w-[220px] relative">

                <input name="date"
                  className="absolute top-[20%] left-[10%] w-3/4 py-1 text-center primary-red rounded-lg" 
                  onClick={() => dateRef.current?.showPicker()} ref={showDateRef} readOnly value={actualDate} />
                
                <input name="calendar"
                   className="w-0 absolute -top-[23%] left-[1%]" 
                  ref={dateRef} type="date" onChange={handleCalendarChange} />
              
              </div>

              <input name="monto"
                className="primary-red rounded-lg text-center w-3/4 py-1"
                type="number" placeholder="monto" onFocus={(e) => e.currentTarget.select()} onChange={(e) => setActualMonto(Number(e.currentTarget.value))} value={actualMonto} required/>
              
              <button type="submit" className={`mt-[90px] mb-2 self-end primary-red p-4 py-2 rounded-lg ${isLoading && "opacity-50"}`} disabled={isLoading}>{isLoading ? "Cargando" : "Agregar"}</button>
            
            </div>

          </form>

        )

      }

      <button className="" onClick={() => setShowForm(prev => !prev)}><PlusSVG className={`size-6 transition-transform duration-300 ${showForm && "rotate-45"}`} /></button>

    </div>
  )
}

export function SectoresList({ sectores, actualSector, setActualSector }: { sectores: string[] }) {

  const handleClick = (sector: string) => {
    setActualSector(sector)
  }

  return (
    <div className="flex-1 flex flex-col static z-10 py-2">
      {sectores.map(sector =>

        <span
          className={`text-center mx-1 px-1 rounded-lg border border-transparent hover:border hover:border-slate-600 ${actualSector === sector ? "primary-red" : "text-slate-600"}`}
          key={sector}
          onClick={() => handleClick(sector)}
        >
          {sector}
        </span>

      )}
    </div>
  )
}
