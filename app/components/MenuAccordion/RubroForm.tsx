"use client"

import SpinnerSVG from "@/app/assets/SpinnerSVG"
import addPagoPendiente from "@/app/services/pagosPendientes"
import getActualLocaleDate from "@/app/utils/date"
import { useMenuStore } from "@/app/zustand/useMenuStore"
import { usePagosStore } from "@/app/zustand/usePagosStore"
import { useRef, useState } from "react"

// const delay = () => new Promise(res => {
//   setTimeout(() => {
//     res("")
//   }, 2000)
// })

type RubroFormProps = {
  rubro: string;
  sectores: string[];
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RubroForm({ rubro, sectores, showForm, setShowForm }: RubroFormProps) {

  const { addPagoPend } = usePagosStore()
  const { deleteMenuSector } = useMenuStore()
  const currentLocaleDate = getActualLocaleDate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const dateRef = useRef<HTMLInputElement>(null)
  const showDateRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { sector: inputSector, date: inputDate, monto: inputMonto } = Object.fromEntries(formData);

    if (!inputSector) {
      alert("Falta elegir servicio")
      return
    }

    try {
      setIsLoading(true)
      setError("")
      const newPagoPend = {
        _id: `${inputDate.toString()}-${rubro}-${inputSector.toString()}`,
        rubro,
        sector: inputSector.toString(),
        monto: inputMonto.toString(),
        vencimiento: inputDate.toString(),
      }

      const res = await addPagoPendiente(newPagoPend)

      if (!res.insertedId) throw new Error(res)

      console.log("Pago pendiente creado, ", res.insertedId)
      deleteMenuSector(rubro, inputSector.toString())
      addPagoPend(newPagoPend)
      reset()
    } catch (error) {
      if (error instanceof Error)
        setError(error.message)
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
    <div className="">

      {
        showForm
        && (
          <form onSubmit={handleSubmit}
            className="min-h-[300px] w-full flex-1 flex justify-between bg-my-white border">

            <div
              className="absolute -inset-[100%] bg-transparent z-10"
              onClick={() => setShowForm(prev => !prev)}
            ></div>

            <SectoresList sectores={sectores} />

            <div className="relative z-10 flex-1 flex flex-col justify-between p-2 border-l">

              <div className="relative">

                <input name="date"
                  className="absolute top-[20%] right-0 w-full py-1 text-center"
                  onClick={() => dateRef.current?.showPicker()} ref={showDateRef} readOnly defaultValue={currentLocaleDate} />

                <input name="calendar"
                  className="w-0 absolute -top-[25%] right-[100%]"
                  ref={dateRef} type="date" onChange={handleCalendarChange} />

              </div>

              <input name="monto"
                className="text-center w-full py-1 bg-transparent border-b-2 border-red-900 text-black"
                type="number" placeholder="monto" onFocus={(e) => e.currentTarget.select()} defaultValue="0" />

              <button
                className={`tracking-wider w-full h-[2.6rem] mb-2 self-end flex justify-center primary p-4 py-2 rounded-lg ${isLoading && "opacity-80"} duration-200 hover:text-my-black hover:border-slate-400`}
                type="submit" disabled={isLoading}>{isLoading ? <SpinnerSVG className="size-6" /> : "Agregar"}</button>

              <span className="w-[300px] fixed bottom-4 left-0 text-xs">{error}</span>

            </div>

          </form>

        )

      }

    </div>
  )
}

export function SectoresList({ sectores }: { sectores: string[] }) {

  return (
    <div className="flex-1 flex flex-col justify-center static z-10 p-2 border-r border-slate-400">
      <fieldset>
        {sectores.map(sector =>

          <div key={sector} className="text-center w-full flex">
            <input
              className="hidden flex-0"
              type="radio" id={sector} name="sector" defaultValue={sector} />
            <label htmlFor={sector}
              className={`${sectores.length > 12 && "text-xs"} text-slate-600 text-center flex-1 border-b-2 border-transparent hover:bg-slate-200 hover:text-my-black`} >{sector}</label>
          </div>

        )}
      </fieldset>
    </div>
  )
}
