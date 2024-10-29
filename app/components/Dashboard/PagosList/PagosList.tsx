import filteredByRubro from "@/app/utils/filteredByRubro"
import { sortedByProp } from "@/app/utils/sort"
import Pago from "./Pago"
import { getPagosAction } from "@/app/actions/pagosAction"

export default async function PagosList({ page, filter }: { page: string, filter: string }) {

  let pagos = []
  if (page === "pendientes") {
    pagos = await getPagosAction("PagosPendientes")
  }
  else {
    pagos = await getPagosAction("PagosRealizados")
  }

  if (pagos.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p>

  const filteredPagos = filteredByRubro(pagos, filter)
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





