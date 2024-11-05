import filteredByRubro from "@/app/utils/filteredByRubro"
import Pago from "./Pago"
import { getFilteredPagosAction, getPagosAction } from "@/app/_actions/pagosAction"
import { PagoProps } from "@/app/_types/pagos"

export default async function PagosList({ page, filterRubro, filterSector, filterDesde, filterHasta }:
  {
    page: string,
    filterRubro: string,
    filterSector: string,
    filterDesde: string,
    filterHasta: string,
  }) {

  const collection = page === "pendientes" ? "PagosPendientes" : "PagosRealizados"

  let pagos = [] as PagoProps[]

  // if (page === "pendientes") {
  // pagos = await getPagosAction("PagosPendientes", filterF)
  // }
  // if (page === "realizados")
  // pagos = await getPagosAction("PagosRealizados", filterF)

  pagos = await getFilteredPagosAction(collection, filterRubro, filterSector, filterDesde, filterHasta)

  if (pagos.length === 0) return <p className="p-8 text-xl">No hay pagos . . .</p>

  const filteredPagos = filteredByRubro(pagos, filterRubro)

  return (
    <div
      className="py-2">
      {filteredPagos.map(pago =>
        <Pago
          key={pago._id.toString()}
          pago={pago}
        />)}
    </div>
  )
}





