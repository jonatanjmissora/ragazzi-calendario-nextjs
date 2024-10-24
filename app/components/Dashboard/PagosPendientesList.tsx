import filteredArrayByRubro from "@/app/utils/filteredArray"
import PagoPendiente from "./PagosPendientesList/PagoPendiente"
import { usePagosStore } from "@/app/zustand/usePagosStore"

export default function PagosPendientesList() {

  const { pagosPend: pagosPendientes, filter } = usePagosStore()

  if (pagosPendientes.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p> 

  const filteredPagosPendientes = filteredArrayByRubro(pagosPendientes, filter)
  const sortedData = filteredPagosPendientes.sort((a, b) => a.vencimiento.localeCompare(b.vencimiento))

  return (
    <div
      className=" py-2">
      {sortedData.map(pago =>
        <PagoPendiente
          key={pago._id.toString()}
          pago={pago}
        />)}
    </div>
  )
}





