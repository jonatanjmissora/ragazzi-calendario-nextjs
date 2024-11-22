import HeaderTitle from "@/app/_components/Dashboard/Header/HeaderTitle"
import { addOneMonth, getActualDate } from "@/app/_lib/utils/date"
import { Suspense } from "react"
import SkeltonPagos from "@/app/_components/SkeltonPagos"
import PagosList from "@/app/_components/Dashboard/PagosList/PagosList"

export default async function page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const actualNextMonth = addOneMonth(actualDate)
  const filterRubro = searchParams?.filterRubro || "todos"
  const filterSector = searchParams?.filterSector || "todos"
  const filterDesde = searchParams?.filterDesde || actualDate
  const filterHasta = searchParams?.filterHasta || actualNextMonth

  return (
    <section className='my-4 flex flex-col h-[79%] overflow-auto'>
      <HeaderTitle page="admin" />
      <Suspense key={Math.random()} fallback={<SkeltonPagos />}>
        <PagosList
          page={"admin"}
          filterRubro={filterRubro}
          filterSector={filterSector}
          filterDesde={filterDesde}
          filterHasta={filterHasta}
        />
      </Suspense>
    </section>
  )
}


