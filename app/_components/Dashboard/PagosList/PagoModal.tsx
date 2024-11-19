"use client"
import { addPagoAction, deletePagoAction, updatePagoAction } from "@/app/_actions/pagosAction";
import CancelSVG from "@/app/_assets/CancelSVG";
import { PagoProps } from "@/app/_types/pagos";
import { useState } from "react";
import { RUBROSARRAY, SECTORESARRAY } from "@/app/_lib/utils/constants";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import SubmitBtn from "../../SubmitBtn";

const editPago = async (collection: string, oldPago: PagoProps, newPago: PagoProps) => {

  if (oldPago._id !== newPago._id) {

    const res = await deletePagoAction(collection, oldPago)
    if (res?.error) return { error: res?.error, data: null }

    const res2 = await addPagoAction(collection, newPago)
    if (res?.error) return { error: res?.error, data: null }
  }

  else
    if (oldPago.monto === newPago.monto &&
      oldPago.pagado === newPago.pagado)
      return { error: "vacio", data: null }
    else {
      const res3 = await updatePagoAction(collection, oldPago._id, newPago)
      if (res3?.error) return { error: res3?.error, data: null }
    }

}

export default function PagoModal({ pago, collection, setShowModal, isEdit }: { pago: PagoProps, collection: string, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, isEdit: number }) {

  const [error, setError] = useState<string>("")
  const rubrosArray = RUBROSARRAY.filter(rubro => rubro !== "todos")
  const sectoresArray = SECTORESARRAY.filter(sector => sector !== "todos")
  const pathname = usePathname()

  const formAction = async (formData: FormData) => {

    const { rubro: inputRubro, sector: inputSector, date: inputDate, monto: inputMonto, paid: inputPaid } = Object.fromEntries(formData);

    const newPago = {
      _id: `${inputDate.toString()}-${inputRubro.toString()}-${inputSector.toString()}`,
      rubro: inputRubro.toString(),
      sector: inputSector.toString(),
      vencimiento: inputDate.toString(),
      monto: inputMonto.toString(),
      pagado: inputPaid ? inputPaid.toString() : "",
    }

    let errorActual = ""

    if (isEdit) {
      const res = await editPago(collection, pago, newPago)
      if (res?.error)
        if (res?.error === "vacio") {
          setShowModal(false)
          return
        }
        else errorActual += res.error
    }
    else {
      const res = await addPagoAction("PagosRealizados", newPago)
      if (res?.error) errorActual += res?.error
    }

    if (errorActual !== "") {
      setError(error)
      toast.error(`No se pudo ${isEdit ? "editar" : "añadir"} pago`)
    }
    else {
      toast.success(`Pago ${isEdit ? "editado" : "añadido"} con éxito`)
      setShowModal(false)
    }
  }

  return (
    <>
      <div className="inset-0 fixed z-10 top-0 left-0 backdrop-blur-[1px] bg-[#22222290]"></div>
      <div className="fixed z-10 inset-0 top-0 left-0 flex justify-center items-center">
        <form
          className="relative h-max bg-my-white rounded-xl p-8 text-my-black flex flex-col gap-8 items-center justify-center"
          action={formAction}
        >

          <i className="absolute -top-10 -right-0" onClick={() => setShowModal(false)}><CancelSVG className="size-7 p-1 rounded-sm text-my-white hover:scale-125 hover:bg-my-hover-secondary hover:text-my-black duration-200" currentColor="currentColor" /></i>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-8">
              <select
                className="w-28 sm:w-40 pb-[0.1rem]"
                name="rubro" id="rubro" defaultValue={pago.rubro}>
                {rubrosArray.map(rubro => <option key={rubro} value={rubro}>{rubro}</option>)}
              </select>
              <input className="w-28 sm:w-40" type="date" name="date" defaultValue={pago.vencimiento} />
            </div>

            <div className="flex flex-col gap-8">
              <select
                className="w-28 sm:w-40 pb-[0.1rem]"
                name="sector" id="sector" defaultValue={pago.sector}>
                {sectoresArray.map(sector => <option key={sector} value={sector}>{sector}</option>)}
              </select>
              <input className="w-28 sm:w-40 pb-[2px]" type="number" name="monto" defaultValue={pago.monto} onFocus={(e) => e.currentTarget.select()} />
            </div>


          </div>

          {pathname === "/admin/pagos" &&
            <div className="flex items-center gap-4">
              <span>pagado: </span>
              <input type="date" name="paid" defaultValue={pago.pagado} />
            </div>
          }

          <SubmitBtn text={isEdit ? "Cambiar" : "Agregar"} className={"w-3/4"} />

          <span className="text-xs text-red-700 w-60">{error}</span>

        </form>
      </div>
    </>
  )
}