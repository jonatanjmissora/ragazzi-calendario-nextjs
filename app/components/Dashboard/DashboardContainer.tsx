import Dashboard from "./Dashboard"

export default function DashboardContainer() {

//const data = await getPagosPendientes()
const data = [
    {_id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000"},
    {_id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654"},
    {_id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385"}
  ]

  return (
    <div className="w-8/12 flex justify-center mt-16">
        <Dashboard pagosPendientes={data} />
    </div>
  )
}
