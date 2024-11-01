import DashboardContainer from "@/app/components/Dashboard/DashboardContainer";
import Header from "@/app/components/HeaderAdmin/Header";

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex-1 flex justify-center">
        <div className="w-3/4 min-h-[300px] primary border border-slate-500 rounded-lg shadow overflow-hidden m-8">
            <Header />
            {children}
        </div>

    </div>
  )
}
