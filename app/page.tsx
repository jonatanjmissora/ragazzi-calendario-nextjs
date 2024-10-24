import DashboardContainer from "./components/Dashboard/DashboardContainer";
import MenuContainer from "./components/MenuAccordion/MenuContainer";

export default function Page() {
  return (
    <div className="flex min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <MenuContainer />
      <DashboardContainer />
    </div>
  );
}

