import { Suspense } from "react"
import DashboardContainer from "../_components/Dashboard/DashboardContainer"
import PagosList from "../_components/Dashboard/PagosList/PagosList"
import { addOneMonth, getActualDate } from "../_lib/utils/date"
import SkeltonPagos from "../_components/SkeltonPagos"

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const actualNextMonth = addOneMonth(actualDate)
  const filterRubro = (await searchParams)?.filterR || "todos"
  const filterSector = "todos"
  const filterDesde = (await searchParams)?.filterDesde || actualDate
  const filterHasta = (await searchParams)?.filterHasta || actualNextMonth

  return (

    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"pendientes"}>

        <Suspense key={Math.random()} fallback={<SkeltonPagos />}>
          <PagosList
            page={"pendientes"}
            filterRubro={filterRubro}
            filterSector={filterSector}
            filterDesde={filterDesde}
            filterHasta={filterHasta}
          />
        </Suspense>

      </DashboardContainer>
    </div>
  );
}

