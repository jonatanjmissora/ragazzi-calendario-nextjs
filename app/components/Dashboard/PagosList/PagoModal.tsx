"use client"
import { addPagoAction, deletePagoAction, updatePagoAction } from "@/app/_actions/pagosAction";
import CancelSVG from "@/app/assets/CancelSVG";
import { PagoProps } from "@/app/_types/pagos";
import { useState } from "react";
import { RUBROSARRAY, SECTORESARRAY } from "@/app/utils/constants";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import SubmitBtn from "../../SubmitBtn";

const editPago = async (collection: string, oldPago: PagoProps, newPago: PagoProps) => {
  console.log({ collection })
  let error = ""
  if (oldPago._id !== newPago._id) {
    const res = await deletePagoAction(collection, oldPago._id)
    if (!res?.error) {
      const res2 = await addPagoAction(collection, newPago)
      if (!res2?.error) {
        return ({ error: null })
      }
      else error += res2?.error
    } else error += res?.error
  }

  else
    if (oldPago.monto === newPago.monto &&
      oldPago.pagado === newPago.pagado)
      return { error: "vacio" }
    else {
      const res = await updatePagoAction(collection, oldPago._id, newPago)
      if (!res?.error) return { error: null }
      else
        error += res?.error
    }

  if (error === "") return { error: null }
  else return { error }
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

    let error = ""

    if (isEdit) {
      const res = await editPago(collection, pago, newPago)
      if (res?.error)
        if (res?.error === "vacio") {
          setShowModal(false)
          return
        }
        else error += res.error
    }
    else {
      const res = await addPagoAction("PagosRealizados", newPago)
      if (res?.error) error += res?.error
    }

    if (error !== "") {
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
      <div className="inset-0 absolute z-10 top-0 left-0 backdrop-blur-[1px] bg-[#22222290]"></div>
      <div className="absolute z-10 inset-0 top-0 left-0 flex justify-center items-center">
        <form
          className="relative bg-my-white rounded-xl p-8 text-my-black flex flex-col gap-6"
          action={formAction}
        >

          <i className="absolute -top-10 -right-0" onClick={() => setShowModal(false)}><CancelSVG className="size-7 p-1 hover:bg-slate-500 rounded-lg" currentColor="#cacaca" /></i>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-4">
              <select
                className="w-[11ch] pb-[0.1rem]"
                name="rubro" id="rubro" defaultValue={pago.rubro}>
                {rubrosArray.map(rubro => <option key={rubro} value={rubro}>{rubro}</option>)}
              </select>
              <input className="w-5rem" type="date" name="date" defaultValue={pago.vencimiento} />
            </div>

            <div className="flex flex-col gap-4">
              <select
                className="w-[11ch] pb-[0.1rem]"
                name="sector" id="sector" defaultValue={pago.sector}>
                {sectoresArray.map(sector => <option key={sector} value={sector}>{sector}</option>)}
              </select>
              <input className="w-[6rem] pb-[2px]" type="number" name="monto" defaultValue={pago.monto} onFocus={(e) => e.currentTarget.select()} />
            </div>


          </div>

          {pathname === "/admin/pagos" &&
            <div className="flex items-center gap-4">
              <span>pagado: </span>
              <input type="date" name="paid" defaultValue={pago.pagado} />
            </div>
          }

          <SubmitBtn text="Cambiar" />

          <span className="absolute -bottom-4 left-4 text-xs text-my-white">{error}</span>

        </form>
      </div>
    </>
  )
}