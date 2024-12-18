"use client"

import { addPagoAction } from "@/app/_actions/pagosAction"
import { getActualDate } from "@/app/_lib/utils/date"
import { useRef, useState } from "react"
import SubmitBtn from "../SubmitBtn"
import { deleteSectorAction } from "@/app/_actions/menuAction"
import toast from "react-hot-toast"

type RubroFormProps = {
  rubro: string;
  sectores: string[];
}

export default function RubroForm({ rubro, sectores }: RubroFormProps) {

  const currentLocaleDate = getActualDate()

  const [error, setError] = useState<string>("")
  const dateRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const showDateRef = useRef<HTMLInputElement>(null)

  const formAction = async (formData: FormData) => {
    const { sector: inputSector, date: inputDate, monto: inputMonto } = Object.fromEntries(formData);
    setError("")
    let errorFlag = false

    if (!inputSector) {
      toast.error("Falta elegir servicio", { position: "top-left" })
      return
    }

    const newPago = {
      _id: `${inputDate.toString()}-${rubro}-${inputSector.toString()}`,
      rubro,
      sector: inputSector.toString(),
      monto: inputMonto.toString(),
      vencimiento: inputDate.toString(),
      pagado: "",
    }

    const res = await addPagoAction("PagosPendientes", newPago)
    if (res?.error) {
      setError(res?.error)
      errorFlag = true
    }
    else {
      const sectoresWithoutActualSector = sectores.filter(sect => sect !== newPago.sector)
      const res2 = await deleteSectorAction("SectoresActuales", rubro, sectoresWithoutActualSector)
      if (res2?.error) {
        setError(prev => prev + res2?.error)
        errorFlag = true
      }
    }
    if (errorFlag) toast.error("No se pudo agregar el pago")
    else {
      toast.success("Pago añadido exitosamente")
      formRef?.current?.reset()
    }
  }

  const handleCalendarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showDateRef.current)
      showDateRef.current.value = e.currentTarget.value
  }

  if (sectores.length === 0) return

  return (

    <form ref={formRef} action={formAction}
      className={`min-h-[300px] w-full flex-1 flex justify-between ${rubro} border-b border-gray-500`}>

      <SectoresList sectores={sectores} />

      <div className="relative z-10 flex-1 flex flex-col justify-between p-2">

        <div className="relative">

          <input name="date"
            className="absolute top-[20%] right-0 w-full py-1 text-center hover:bg-my-white"
            onClick={() => dateRef.current?.showPicker()} ref={showDateRef} readOnly defaultValue={currentLocaleDate} />

          <input name="calendar"
            className="w-0 absolute -top-[25%] right-[100%]"
            ref={dateRef} type="date" onChange={handleCalendarChange} />

        </div>

        <input name="monto"
          className="text-center w-full py-1 bg-transparent border-b-2 border-red-900 text-black hover:bg-my-white"
          type="number" placeholder="monto" onFocus={(e) => e.currentTarget.select()} defaultValue="0" />

        <SubmitBtn text="Agregar" className={"w-full"} />

        <span className="w-[300px] fixed bottom-4 left-0 text-xs">{error}</span>

      </div>

    </form>

  )
}

export function SectoresList({ sectores }: { sectores: string[] }) {

  return (
    <div className="flex-1 flex flex-col justify-center static z-10 p-2">
      <fieldset>
        {sectores.map(sector =>

          <div key={sector} className="text-center w-full flex">
            <input
              className="flex-0"
              type="radio" id={sector} name="sector" defaultValue={sector} />
            <label htmlFor={sector}
              className={`${sectores.length > 12 && "text-xs"} text-my-black text-center flex-1 border-b-2 border-transparent hover:bg-my-white hover:text-my-black`} >{sector}</label>
          </div>

        )}
      </fieldset>
    </div>
  )
}
