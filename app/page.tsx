import Dashboard from "./components/Dashboard/Dashboard";
import Menu from "./components/Menu/Menu"

export default function Home() {
  return (
    <div className="flex bg-blue-50 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Menu />
      <Dashboard />
    </div>
  );
}

