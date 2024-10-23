import Dashboard from "./Dashboard"

export default async function DashboardContainer() {

  //const data = await getPagosPendientes()
  const data = [
    { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000" },
    { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654" },
    { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385" },
    { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854" },
  ]

  return (
    <div className="flex-1 flex justify-center m-8">
      <Dashboard data={data} />
    </div>
  )
}
