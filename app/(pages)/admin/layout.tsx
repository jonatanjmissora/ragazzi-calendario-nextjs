import Header from "@/app/_components/Admin/HeaderAdmin/Header";
import Dashboard from "@/app/_components/Dashboard/Dashboard";
import DashboardContainer from "@/app/_components/Dashboard/DashboardContainer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex justify-center dashboard-container animate-appear">
      <div className="w-3/4 min-h-[300px] bg-card rounded-lg shadow overflow-hidden m-8">
        <Header />
        {children}
      </div>
    </div>
  )
}
