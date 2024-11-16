import Dashboard from "./Dashboard"

export default async function DashboardContainer({ page, children }: { page: string, children: React.ReactNode }) {

  return (
    <div className="flex justify-center h-screen dashboard-container">
      <Dashboard page={page}>
        {children}
      </Dashboard>
    </div>
  )
}
