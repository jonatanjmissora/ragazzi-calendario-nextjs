"use client"
import { addPagoAction, deletePagoAction, updatePagoAction } from "@/app/_actions/pagosAction";
import CancelSVG from "@/app/assets/CancelSVG";
import { PagoProps } from "@/app/_types/pagos";
import { useState } from "react";
import { RUBROSARRAY, SECTORESARRAY } from "@/app/utils/constants";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import SubmitBtn from "../../SubmitBtn";

export default function PagoModal({ pago, collection, setShowModal, isEdit }: { pago: PagoProps, collection: string, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, isEdit: number }) {

  const [error, setError] = useState<string>("")
  const rubrosArray = RUBROSARRAY.filter(rubro => rubro !== "todos")
  const sectoresArray = SECTORESARRAY.filter(sector => sector !== "todos")
  const pathname = usePathname()

  const addNewPago = async (formData: FormData) => {

    //TODO ver si estoy editando o agregando pago    

    const { rubro: inputRubro, sector: inputSector, date: inputDate, monto: inputMonto } = Object.fromEntries(formData);
    const newPago = {
      _id: `${inputDate.toString()}-${inputRubro.toString()}-${inputSector.toString()}`,
      rubro: inputRubro.toString(),
      sector: inputSector.toString(),
      vencimiento: inputDate.toString(),
      monto: inputMonto.toString(),
      pagado: inputDate.toString(),
    }

    console.log({ newPago })

    let error = ""
    if (newPago._id !== pago._id ||
      newPago.monto !== pago.monto) {

      if (newPago._id === pago._id) {

        //es un update del monto
        const res = await updatePagoAction(collection, pago._id, newPago)
        if (res?.error) {
          setError(res.error)
          return
        }
      }
      else {

        //borro el pago, agrego el newPago
        const res = await deletePagoAction("PagosRealizados", pago._id)
        if (!res?.error) {
          const res2 = await addPagoAction("PagosRealizados", newPago)
          if (res2?.error) {
            error = res2?.error
            setError(res2?.error)
          }

        }
        else {
          error = res.error
          setError(prev => prev + ". " + res.error)
        }

      }
      if (error !== "") toast.error("No se pudo editar el pago")
      else {
        toast.success("Pago agregado/editado correctamente")
        setShowModal(false)
      }
    }

  }

  return (
    <>
      <div className="inset-0 absolute z-10 top-0 left-0 backdrop-blur-[1px] bg-[#22222290]"></div>
      <div className="absolute z-10 inset-0 top-0 left-0 flex justify-center items-center">
        <form
          className="relative bg-my-white rounded-xl p-8 text-my-black flex flex-col gap-6"
          action={addNewPago}
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
              <input type="date" defaultValue={pago.vencimiento} />
            </div>
          }

          <SubmitBtn text="Cambiar" />

          <span className="absolute -bottom-4 left-4 text-xs text-my-white">{error}</span>

        </form>
      </div>
    </>
  )
}