import DashboardContainer from "@/app/components/Dashboard/DashboardContainer";
import PagosRealizadosList from "@/app/components/Dashboard/PagosRealizados/PagosRealizadosList";

export default function Page() {
  return (
    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"realizados"}>
        <PagosRealizadosList />
      </DashboardContainer>
    </div>
  );
}