import EditSVG from "@/app/assets/EditSVG"
import CancelSVG from "@/app/assets/CancelSVG"
import CheckSVG from "@/app/assets/CheckSVG"
import { PagoPendienteProps } from "@/app/types/pagosPendientes"
import { usePagosStore } from "@/app/zustand/usePagosStore"
import { useMenuStore } from "@/app/zustand/useMenuStore"
import addPagoRealizadoBack from "@/app/services/pagosRealizadosBack"

export default function PagoMenu({ pago, setShowModal }: { pago: PagoPendienteProps, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const { deleteIdTotal, deletePagoPendienteFront } = usePagosStore()
  const { addMenuSectorFront } = useMenuStore()

  const handleCheck = () => {
    deleteIdTotal(pago._id)
    deletePagoPendienteFront(pago._id)
    //TODO quitar de "Pagos Pendientes" en DB
    //TODO agregar a "Pagos Realizados" en DB
    const pagoRealizado = {
      _id: pago._id,
      vencimiento: pago.vencimiento,
      rubro: pago.rubro,
      sector: pago.sector,
      monto: pago.monto,
      pagado: "2024-10-33",
    }
    addPagoRealizadoBack(pagoRealizado)
  }

  const handleCancel = () => {
    deleteIdTotal(pago._id)
    deletePagoPendienteFront(pago._id)
    addMenuSectorFront(pago.rubro, pago.sector)
    //TODO quitar de "Pagos Pendientes" en DB
    //TODO agregar a "Menu" en DB
  }

  const handleEdit = () => {
    setShowModal(true)
  }

  return (
    <div id="span-menu"
      className="w-10/12 ml-auto bg-slate-200 rounded-lg">

      <div className="flex justify-center gap-6">
        <button id="check-btn"
          className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200"
          onClick={handleCheck}
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

    </div>
  )
}