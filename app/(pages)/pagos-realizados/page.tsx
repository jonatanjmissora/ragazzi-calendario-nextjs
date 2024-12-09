import DashboardContainer from "@/app/_components/Dashboard/DashboardContainer";
import PagosList from "@/app/_components/Dashboard/PagosList/PagosList";
import SkeltonPagos from "@/app/_components/SkeltonPagos";
import { addOneMonth, getActualDate } from "@/app/_lib/utils/date";
import { Suspense } from "react";

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
      <DashboardContainer page={"realizados"}>
        <Suspense key={Math.random()} fallback={<SkeltonPagos />}>
          <PagosList
            page={"realizados"}
            filterRubro={filterRubro}
            filterSector={filterSector}
            filterDesde={filterDesde}
            filterHasta={filterHasta} />
        </Suspense>
      </DashboardContainer>
    </div>
  );
}