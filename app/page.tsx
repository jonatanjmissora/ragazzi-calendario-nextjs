import DashboardContainer from "./components/Dashboard/DashboardContainer";
import PagosPendientesList from "./components/Dashboard/PagosPendientesList/PagosPendientesList";

export default function Page() {
  return (
    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"pendientes"}>
        {/*<PagosPendientesList />*/}
        <span>Hola</span>
      </DashboardContainer>
    </div>
  );
}

