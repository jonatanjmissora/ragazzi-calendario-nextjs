import DashboardContainer from "./components/Dashboard/DashboardContainer";
import PagosList from "./components/Dashboard/PagosList/PagosList";

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const filterR = searchParams?.filterR ?? "todos"

  return (

    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"pendientes"}>
        <PagosList page={"pendientes"} filterR={filterR} />
      </DashboardContainer>
    </div>
  );
}

