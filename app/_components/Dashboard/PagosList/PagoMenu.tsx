import EditSVG from "@/app/_assets/EditSVG"
import CancelSVG from "@/app/_assets/CancelSVG"
import CheckSVG from "@/app/_assets/CheckSVG"
import { useState } from "react"
import { getActualDate } from "@/app/_lib/utils/date"
import SpinnerSVG from "@/app/_assets/SpinnerSVG"
import { PagoProps } from "@/app/_types/pagos"
import { addPagoAction, deletePagoAction } from "@/app/_actions/pagosAction"
import toast from "react-hot-toast"
import DotsSVG from "@/app/_assets/DotsSVG"

export default function PagoMenu({ pago, setShowModal, setShowConfirm }
  : { pago: PagoProps, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, setShowConfirm: React.Dispatch<React.SetStateAction<boolean>> }) {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handlePagado = async () => {
    setIsLoading(true)
    let errorActual = ""

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
    if (res?.error) errorActual += res?.error

    else {
      const res2 = await deletePagoAction("PagosPendientes", pago)
      if (res2?.error) errorActual += res2?.error
    }
    if (errorActual === "")
      toast.success("Pago realizado correctamente")
    else {
      toast.error("No se pudo realizar el pago")
      setError(errorActual)
    }

    setIsLoading(false)

  }

  const handleCancel = async () => {
    setShowConfirm(true)
  }

  const handleEdit = () => {
    setShowModal(true)
  }

  return (
    <div id="span-menu"
      className="w-10/12 ml-auto sm:flex items-center justify-center bg-pago-menu h-full">

      {
        isLoading
          ? (<div className="flex justify-center"><SpinnerSVG className="size-7 p-1 origin-center hover:scale-150 duration-200" currentColor={"#dd0000"} /></div>)
          : (
            <>

              <MenuIcons style="desktop" handlePagado={handlePagado} handleCancel={handleCancel} handleEdit={handleEdit} />

              <div className="flex sm:hidden justify-center items-center h-full">
                <details name="menu" className="relative">
                  <summary className="list-none">
                    <DotsSVG className="size-5 p-1 relative z-0" currentColor="#cacaca" />
                  </summary>

                  <MenuIcons style="mobil" handlePagado={handlePagado} handleCancel={handleCancel} handleEdit={handleEdit} />

                </details>
              </div>

            </>
          )
      }

      <span className="absolute -bottom-4 left-4 text-xs text-red-700 bg-my-white">{error}</span>

    </div>
  )
}

const MenuIcons = ({ style, handlePagado, handleCancel, handleEdit }
  : { style: string, handlePagado: () => void, handleCancel: () => void, handleEdit: () => void }) => {

  const styleClass = style === "desktop"
    ? "hidden sm:flex justify-center items-center gap-6"
    : "absolute z-10 top-[100%] -right-[10%] bg-my-white p-2 rounded-md"

  return (
    <div className={styleClass}>
      <button id="check-btn"
        onClick={handlePagado}
        type="button" >
        <CheckSVG className="size-5 rounded-sm hover:scale-125 hover:bg-my-hover-secondary duration-200" currentColor="#008000" />
      </button>

      <button id="cancel-btn"
        onClick={handleCancel}
        type="button" >
        <CancelSVG className="size-5 rounded-sm hover:scale-125 hover:bg-my-hover-secondary duration-200" currentColor="#ff0000" />
      </button>

      <button id="edit-btn"
        onClick={handleEdit}
        type="button" >
        <EditSVG className="size-5 rounded-sm hover:scale-125 hover:bg-my-hover-secondary duration-200" currentColor="#000000" />
      </button>
    </div>
  )
}