import DashboardContainer from "@/app/components/Dashboard/DashboardContainer";
import PagosList from "@/app/components/Dashboard/PagosList/PagosList";

export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const filter = searchParams?.filter ?? "todos"

  return (
    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"realizados"}>
        <PagosList page={"realizados"} filter={filter} />
      </DashboardContainer>
    </div>
  );
}