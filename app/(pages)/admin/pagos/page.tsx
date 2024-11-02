import { getFilteredPagosAction } from "@/app/actions/pagosAction"
import Pago from "@/app/components/Dashboard/PagosList/Pago"
import { addOneMonth, getActualDate } from "@/app/utils/date"

export default async function page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const actualDate = getActualDate()
  const actualNextMonth = addOneMonth(actualDate)
  const filterRubro = searchParams?.filterRubro ?? "todos"
  const filterSector = searchParams?.filterSector ?? "todos"
  const filterDesde = searchParams?.filterDesde ?? actualDate
  const filterHasta = searchParams?.filterHasta ?? actualNextMonth
  
  const pagos = await getFilteredPagosAction("PagosRealizados", filterRubro, filterSector, filterDesde, filterHasta)

  if(pagos.length === 0) return <p className="p-8 text-xl text-my-white">No hay pagos . . .</p> 

  return (
    <section className='my-4 flex flex-col'>
      {pagos.map(pago => <Pago key={pago._id} pago={pago} />)}
    </section>
  )
}


