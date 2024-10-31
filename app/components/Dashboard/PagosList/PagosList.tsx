import filteredByRubro from "@/app/utils/filteredByRubro"
import { sortedByProp } from "@/app/utils/sort"
import Pago from "./Pago"
import { getPagosAction } from "@/app/actions/pagosAction"
import getActualDate from "@/app/utils/date"

export default async function PagosList({ page, filterR, filterF }: { page: string, filterR: string, filterF?: string }) {

  const fechaActual = getActualDate().substring(0, 7)
  if (!filterF) filterF = fechaActual

  let pagos = []

  if (page === "pendientes") {
    pagos = await getPagosAction("PagosPendientes", filterF)
  }
  else {
    pagos = await getPagosAction("PagosRealizados", filterF)
  }

  if (pagos.length === 0) return <p className="p-8 text-xl">No hay pagos . . .</p>

  const filteredPagos = filteredByRubro(pagos, filterR)
  const sortedData = sortedByProp(filteredPagos, page)

  return (
    <div
      className="py-2">
      {sortedData.map(pago =>
        <Pago
          key={pago._id.toString()}
          pago={pago}
        />)}
    </div>
  )
}





