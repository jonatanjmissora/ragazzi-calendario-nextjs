import DashboardContainer from "@/app/components/Dashboard/DashboardContainer";
import PagosList from "@/app/components/Dashboard/PagosList/PagosList";

export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const filterR = searchParams?.filterR ?? "todos"
  const filterF = searchParams?.filterF ?? ""

  return (
    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"realizados"}>
        <PagosList page={"realizados"} filterR={filterR} filterF={filterF} />
      </DashboardContainer>
    </div>
  );
}