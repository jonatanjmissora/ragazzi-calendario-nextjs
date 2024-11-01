import Pago from "@/app/components/Dashboard/PagosList/Pago"
import { PagoProps } from "@/app/types/pagos"
import { PAGOSREALIZADOS } from "@/app/utils/constants"
import { addOneMonth, getActualDate } from "@/app/utils/date"
import { sortedByProp } from "@/app/utils/sort"

const filteredPagos = (pagos: PagoProps[], filterRubro: string, filterSector: string, filterDesde: string, filterHasta: string) => {

  const filteredPagos = [] as PagoProps[]
  const result = pagos
    .filter(pago => pago.vencimiento >= filterDesde && pago.vencimiento <= filterHasta)




  return filteredPagos
}


export default async function page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const actualDate = getActualDate()
  const actualNextMonth = addOneMonth(actualDate)
  const filterRubro = searchParams?.filterRubro ?? "todos"
  const filterSector = searchParams?.filterSector ?? "todos"
  const filterDesde = searchParams?.filterDesde ?? actualDate
  const filterHasta = searchParams?.filterHasta ?? actualNextMonth

  const pagos = filteredPagos(PAGOSREALIZADOS, filterRubro, filterSector, filterDesde, filterHasta)
  console.log({ pagos })
  // const pagos = await getAdminPagosAction("PagosRealizados", filterRubro, filterSector, filterDesde, filterHasta)
  const sortedPagos = sortedByProp(pagos, "realizados")

  return (
    <section className='my-4 flex flex-col'>
      {sortedPagos.map(pago => <Pago key={pago._id} pago={pago} />)}
    </section>
  )
}
