"use client"

import filteredPendByRubro from "@/app/utils/filteredPendByRubro"
import { usePagosStore } from "@/app/zustand/usePagosStore"
import PagoPendiente from "./PagoPendiente"

export default function PagosPendientesList() {

  const { pagosPend: pagosPendientes, filter } = usePagosStore()

  if (pagosPendientes.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p>

  const filteredPagosPendientes = filteredPendByRubro(pagosPendientes, filter)
  const sortedData = filteredPagosPendientes.sort((a, b) => a.vencimiento.localeCompare(b.vencimiento))

  return (
    <div
      className="py-2 relative">
      {sortedData.map(pago =>
        <PagoPendiente
          key={pago._id.toString()}
          pago={pago}
        />)}
    </div>
  )
}





