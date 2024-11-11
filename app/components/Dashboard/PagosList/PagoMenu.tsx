import EditSVG from "@/app/assets/EditSVG"
import CancelSVG from "@/app/assets/CancelSVG"
import CheckSVG from "@/app/assets/CheckSVG"
import { useState } from "react"
import { getActualDate } from "@/app/utils/date"
import SpinnerSVG from "@/app/assets/SpinnerSVG"
import { PagoProps } from "@/app/_types/pagos"
import { addPagoAction, deletePagoAction } from "@/app/_actions/pagosAction"
import toast from "react-hot-toast"

export default function PagoMenu({ pago, setShowModal, setShowConfirm }
  : { pago: PagoProps, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, setShowConfirm: React.Dispatch<React.SetStateAction<boolean>> }) {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handlePagado = async () => {
    setIsLoading(true)

    const actualDate = getActualDate()
    const newPago = {
      _id: pago._id,
      vencimiento: pago.vencimiento,
      rubro: pago.rubro,
      sector: pago.sector,
      monto: pago.monto,
      pagado: actualDate,
    }
    const res = await addPagoAction("PagosRealizados", newPago)
    if (res?.error) {
      setError(res?.error)
      toast.error("No se pudo realizar el pago")
    }
    else {
      await deletePagoAction("PagosPendientes", pago._id)
      toast.success("Pago realizado correctamente")
    }

  }

  const handleCancel = async () => {
    setShowConfirm(true)
  }

  const handleEdit = () => {
    setShowModal(true)
  }

  return (
    <div id="span-menu"
      className="w-10/12 ml-auto bg-slate-200 rounded-lg">

      {
        isLoading
          ? (<div className="flex justify-center"><SpinnerSVG className="size-7 p-1 origin-center hover:scale-150 duration-200" currentColor={"#dd0000"} /></div>)
          : (
            <div className="flex justify-center gap-6">
              <button id="check-btn"
                onClick={handlePagado}
                type="button" >
                <CheckSVG className="size-7 p-1 hover-scale-125" currentColor="#008000" />
              </button>

              <button id="cancel-btn"
                onClick={handleCancel}
                type="button" >
                <CancelSVG className="size-7 p-1 hover-scale-125" currentColor="#ff0000" />
              </button>

              <button id="edit-btn"
                onClick={handleEdit}
                type="button" >
                <EditSVG className="size-7 p-1 hover-scale-125" currentColor="#000000" />
              </button>
            </div>
          )
      }

      <span className="absolute -bottom-4 left-4 text-xs text-my-white">{error}</span>

    </div>
  )
}