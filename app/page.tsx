import Dashboard from "./components/Dashboard/Dashboard";
import Menu from "./components/MenuAccordion/Menu"

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Menu />
      <Dashboard />
    </div>
  );
}

