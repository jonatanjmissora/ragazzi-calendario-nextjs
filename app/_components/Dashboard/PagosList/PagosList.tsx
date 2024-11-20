import filteredByRubro from "@/app/_lib/utils/filteredByRubro"
import Pago from "./Pago"
import { getFilteredPagosAction } from "@/app/_actions/pagosAction"

export default async function PagosList({ page, filterRubro, filterSector, filterDesde, filterHasta }:
  {
    page: string,
    filterRubro: string,
    filterSector: string,
    filterDesde: string,
    filterHasta: string,
  }) {

  const collection = page === "pendientes" ? "PagosPendientes" : "PagosRealizados"

  const pagos = await getFilteredPagosAction(collection, filterRubro, filterSector, filterDesde, filterHasta)

  if (pagos.length === 0) return <p className="p-8 text-xl">No hay pagos . . .</p>

  const filteredPagos = filteredByRubro(pagos, filterRubro)

  return (
    <div
      className="py-2 h-max sm:h-[90%] sm:overflow-auto">
      {filteredPagos.map(pago =>
        <Pago
          key={pago._id.toString()}
          pago={pago}
        />)}

    </div>
  )
}





