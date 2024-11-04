import DashboardContainer from "./components/Dashboard/DashboardContainer";
import PagosList from "./components/Dashboard/PagosList/PagosList";
import { addOneMonth, getActualDate } from "./utils/date";

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  let actualDate = getActualDate()
  actualDate = actualDate.substring(0, 8) + "01"
  const actualNextMonth = addOneMonth(actualDate)
  const filterRubro = searchParams?.filterR || "todos"
  const filterSector = "todos"
  const filterDesde = searchParams?.filterDesde || actualDate
  const filterHasta = searchParams?.filterHasta || actualNextMonth

  return (

    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"pendientes"}>
        <PagosList 
          page={"pendientes"} 
          filterRubro={filterRubro} 
          filterSector={filterSector} 
          filterDesde={filterDesde}
          filterHasta={filterHasta}
        />
      </DashboardContainer>
    </div>
  );
}

