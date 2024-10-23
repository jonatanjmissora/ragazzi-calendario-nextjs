import PagoPendiente from "./PagosPendientesList/PagoPendiente"
import { usePagosStore } from "@/app/zustand/usePagosStore"

export default function PagosPendientesList() {

  const { pagosPend: pagosPendientes } = usePagosStore()

  if (pagosPendientes.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p>

  return (
    <div
      className=" py-2">
      {pagosPendientes.map(pago =>
        <PagoPendiente
          key={pago._id.toString()}
          pago={pago}
        />)}
    </div>
  )
}





