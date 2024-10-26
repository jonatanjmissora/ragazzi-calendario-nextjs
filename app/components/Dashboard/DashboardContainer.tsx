import { getPagosPendientes } from "@/app/db/pagos"
import Dashboard from "./Dashboard"

export default async function DashboardContainer({ page, children }: { page: string, children: React.ReactNode }) {

  let data = []
  if (page === "pendientes") {


    // const data = await getPagosPendientes()
    data = [
      { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000", pagado: "" },
      { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654", pagado: "" },
      { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385", pagado: "" },
      { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854", pagado: "" },
    ]
  }
  else {


    //const data = await getPagosRealizados()
    data = [
      { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000", pagado: "2024-10-10" },
      { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654", pagado: "2024-10-10" },
      { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385", pagado: "2024-10-10" },
      { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854", pagado: "2024-10-10" },
    ]
  }

  return (
    <div className="flex justify-center h-screen">
      <Dashboard data={data} page={page}>
        {children}
      </Dashboard>
    </div>
  )
}
