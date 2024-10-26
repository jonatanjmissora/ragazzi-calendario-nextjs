"use client"

import filteredRealByRubro from "@/app/utils/filteredRealByRubro"
import { usePagosStore } from "@/app/zustand/usePagosStore"
import PagoRealizado from "./PagoRealizado"

export default function PagosRealizadosList() {

  const { pagosReal: pagosRealizados, filter } = usePagosStore()

  if (pagosRealizados.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p>

  const filteredPagosRealizados = filteredRealByRubro(pagosRealizados, filter)
  const sortedData = filteredPagosRealizados.sort((a, b) => a.pagado.localeCompare(b.pagado))

  return (
    <div
      className=" py-2 relative">
      {sortedData.map(pago =>
        <PagoRealizado
          key={pago._id.toString()}
          pago={pago}
        />)}
    </div>
  )
}