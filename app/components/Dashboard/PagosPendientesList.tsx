import { getPagosPendientes } from "@/app/db/pagos"
import { PagoPendienteProps } from "@/app/types/pagosPendientes"
import Header from "./Header"
import venceFormat from "@/app/utils/venceFormat"
import DotEmptySVG from "@/app/assets/DotEmptySvg"
import DotFillSVG from "@/app/assets/DotFillSvg"
import CheckSVG from "@/app/assets/CheckSVG"
import CancelSVG from "@/app/assets/CancelSVG"
import EditSVG from "@/app/assets/EditSVG"
import montoFormat from "@/app/utils/montoFormat"

export default async function PagosPendientesList() {

  //const data = await getPagosPendientes()
  const data = [
    {_id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000"},
    {_id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654"},
    {_id: "edf23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385"}
  ]

  const sortedData = data.sort((a, b) => a.vencimiento.localeCompare(b.vencimiento))

  return (
    <section
      className="primary p-4 m-8 rounded-lg shadow">
      <Header />    
      {sortedData.map(pago => <PagoPendiente key={pago._id.toString()} pago={pago} />)}

    </section>
  )
}

const PagoPendiente = ({ pago }: { pago: PagoPendienteProps }) => {

  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  return (
    <article className="grid pagos-grid text-xl tracking-wide">

      <span id="span-checkbox"
        className="flex justify-center items-center">
        <input className="hidden" id={`check-${pago._id}`} type="checkbox"/>
        <label className="label-empty rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200" htmlFor={`check-${pago._id}`}><DotEmptySVG className="size-9"/></label>
        <label className="label-fill rounded-lg hover:bg-slate-400 hover:text-slate-900" htmlFor={`check-${pago._id}`}><DotFillSVG className="size-9"/></label>
      </span>
      <span>{pagoVenceFormat}</span>
      <span>{pago.rubro}</span>
      <span>{pago.sector}</span>
      <span>{pagoMonto}</span>
      <span id="span-menu"
        className="flex justify-between items-center">
        <button type="button" className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200">
          <CheckSVG className="size-9 p-1"/>
        </button>
        <button type="button" className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200">
          <CancelSVG className="size-9 p-1"/>
        </button>
        <button type="button" className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200">
          <EditSVG className="size-9 p-1"/>
        </button>
      </span>
      
    </article>
  )
}