"use client"
import { updatePagoAction } from "@/app/_actions/pagosAction";
import CancelSVG from "@/app/assets/CancelSVG";
import { PagoProps } from "@/app/_types/pagos";
import { useState } from "react";

export default function PagoModal({ pago, collection, setShowModal }: { pago: PagoProps, collection: string, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const [error, setError] = useState<string>("")

  const formAction = async (formData: FormData) => {
    const { date: inputDate, monto: inputMonto } = Object.fromEntries(formData);
    const newPago = { ...pago, vencimiento: inputDate.toString(), monto: inputMonto.toString() }

    if (Number(pago.monto) !== Number(newPago.monto)
      || pago.vencimiento !== newPago.vencimiento) {
      const res = await updatePagoAction(collection, pago._id, newPago)
      if (res?.error) {
        setError(res.error)
        return
      }
    }
    setShowModal(false)

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
              <span>{pago.rubro}</span>
              <input className="w-5rem" type="date" name="date" defaultValue={pago.vencimiento} />
            </div>

            <div className="flex flex-col gap-4">
              <span>{pago.sector}</span>
              <input className="w-[6rem] pb-[2px]" type="number" name="monto" defaultValue={pago.monto} onFocus={(e) => e.currentTarget.select()} />
            </div>
          </div>

          <button
            className="font-semibold tracking-wide p-2 px-4 primary rounded-lg"
            type="submit">Cambiar</button>

          <span className="absolute -bottom-4 left-4 text-xs text-my-white">{error}</span>

        </form>
      </div>
    </>
  )
}