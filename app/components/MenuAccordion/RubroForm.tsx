"use client"

import PlusSVG from "@/app/assets/PlusSVG"
import SpinnerSVG from "@/app/assets/SpinnerSVG"
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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dateRef = useRef<HTMLInputElement>(null)
  const showDateRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { sector, date, monto } = Object.fromEntries(formData);

    if(!sector) {
      alert("Falta elegir servicio")
      return
    }

    const PaymentData = {
      rubro,
      sector,
      monto,
      date,
    }
    try {
      setIsLoading(true)
      await delay()
      reset()
      alert(JSON.stringify(PaymentData))
    } catch (error) {

      console.log(error.message)
    }
    finally {
      setIsLoading(false)
    }

  }

  const handleCalendarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showDateRef.current)
      showDateRef.current.value = e.currentTarget.value
  }

  if (sectores.length === 0) return

  return (
    <div className="flex justify-between">

      {
        showForm
        && (
          <form onSubmit={handleSubmit}
            className="min-h-[300px] flex-1 flex justify-between absolute z-10 left-0 right-0 top-[95%] white rounded-lg">

            <div onClick={() => setShowForm(prev => !prev)} className="absolute -inset-[100%]"></div>

            <SectoresList sectores={sectores} />

            <div className="relative flex-1 flex flex-col justify-between p-2">

              <div className="min-h-[100px] min-w-[100px] relative">

                <input name="date"
                  className="absolute top-[20%] right-0 w-full py-1 text-center"
                  onClick={() => dateRef.current?.showPicker()} ref={showDateRef} readOnly defaultValue={currentLocaleDate} />

                <input name="calendar"
                  className="w-0 absolute -top-[25%] right-[125%]"
                  ref={dateRef} type="date" onChange={handleCalendarChange} />

              </div>

              <input name="monto"
                className="text-center w-full py-1 bg-transparent border-b-2 border-red-900 text-black"
                type="number" placeholder="monto" onFocus={(e) => e.currentTarget.select()} defaultValue="0" />

              <button
                className={`tracking-wider w-[5.8rem] h-[2.6rem] mb-2 self-end flex justify-center primary p-4 py-2 rounded-lg ${isLoading && "opacity-80"}`}
                type="submit" disabled={isLoading}>{isLoading ? <SpinnerSVG className="size-6" /> : "Agregar"}</button>

            </div>

          </form>

        )

      }

      <button className="" onClick={() => setShowForm(prev => !prev)}><PlusSVG className={`size-6 transition-transform duration-300 ${showForm && "rotate-45"}`} /></button>

    </div>
  )
}

export function SectoresList({ sectores }: { sectores: string[] }) {

  return (
    <div className="flex-1 flex flex-col justify-center static z-10 p-2 border-r border-slate-200">
      <fieldset>
        {sectores.map(sector =>

          <div key={sector} className="text-center w-full flex">
            <input
              className="hidden flex-0"
              type="radio" id={sector} name="sector" defaultValue={sector}/>
            <label htmlFor={sector}
              className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">{sector}</label>
          </div>

        )}
      </fieldset>
    </div>
  )
}
