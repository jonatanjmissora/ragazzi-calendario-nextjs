import DashboardContainer from "./components/Dashboard/DashboardContainer";
import PagosList from "./components/Dashboard/PagosList/PagosList";

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const filter = searchParams?.filter ?? "todos"

  return (

    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"pendientes"}>
        <PagosList page={"pendientes"} filter={filter} />
      </DashboardContainer>
    </div>
  );
}

