import DashboardContainer from "./components/Dashboard/DashboardContainer";
import Menu from "./components/MenuAccordion/Menu"

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Menu />
      <DashboardContainer />
    </div>
  );
}

