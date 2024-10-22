import { PagoPendienteProps } from "@/app/types/pagosPendientes"
import PagoPendiente from "./PagosPendientesList/PagoPendiente"

export default function PagosPendientesList({ pagosPendientes, setPagosPend, setPagosTotal }:
  {
    pagosPendientes: PagoPendienteProps[],
    setPagosPend: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>>,
    setPagosTotal: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>>
  }) {

  if (pagosPendientes.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p>

  return (
    <div
      className=" py-2">
      {pagosPendientes.map(pago => <PagoPendiente key={pago._id.toString()} pago={pago} setPagosTotal={setPagosTotal} setPagosPend={setPagosPend} />)}
    </div>
  )
}





