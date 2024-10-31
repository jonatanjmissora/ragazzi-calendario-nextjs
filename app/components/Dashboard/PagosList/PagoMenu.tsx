import EditSVG from "@/app/assets/EditSVG"
import CancelSVG from "@/app/assets/CancelSVG"
import CheckSVG from "@/app/assets/CheckSVG"
import { useState } from "react"
import { getActualDate } from "@/app/utils/date"
import SpinnerSVG from "@/app/assets/SpinnerSVG"
import { PagoProps } from "@/app/types/pagos"
import { addPagoAction, deletePagoAction } from "@/app/actions/pagosAction"
import { addSectorAction, getSectoresAction } from "@/app/actions/menuAction"

export default function PagoMenu({ pago, setShowModal }: { pago: PagoProps, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  // const { deleteIdTotal } = usePagosStore()

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
    //Agregar a "PagosRealizados" en DB
    const res = await addPagoAction("PagosRealizados", newPago)
    if (res?.error) setError(res?.error)
    else {
      //Quitar de "PagosPendientes" en DB
      await deletePagoAction("PagosPendientes", pago._id)
    }

  }

  const handleCancel = async () => {
    setIsLoading(true)
    //Quitar de "PagosPendientes" en DB
    await deletePagoAction("PagosPendientes", pago._id)
    //Agregar a "SectoresActuales" en DB
    const menuRubros = await getSectoresAction()
    const newSectores = menuRubros
      .find(mr => mr.rubro === pago.rubro)?.sectores
      .filter(s => s !== pago.sector) || []
    newSectores.push(pago.sector)
    console.log(pago.rubro, newSectores)
    await addSectorAction(pago.rubro, newSectores)
  }

  const handleEdit = () => {
    setShowModal(true)
  }

  return (
    <div id="span-menu"
      className="w-10/12 ml-auto bg-slate-200 rounded-lg">

      {
        isLoading
          ? (<div className="flex justify-center"><SpinnerSVG className="size-7 p-1" currentColor={"#dd0000"} /></div>)
          : (
            <div className="flex justify-center gap-6">
              <button id="check-btn"
                className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200"
                onClick={handlePagado}
                type="button" >
                <CheckSVG className="size-7 p-1" currentColor="#00800095" />
              </button>

              <button id="cancel-btn"
                className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200"
                onClick={handleCancel}
                type="button" >
                <CancelSVG className="size-7 p-1" currentColor="#ff000095" />
              </button>

              <button id="edit-btn"
                className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200"
                onClick={handleEdit}
                type="button" >
                <EditSVG className="size-7 p-1" currentColor="#00000090" />
              </button>
            </div>
          )
      }

      <span className="absolute -bottom-4 left-4 text-xs text-my-white">{error}</span>

    </div>
  )
}