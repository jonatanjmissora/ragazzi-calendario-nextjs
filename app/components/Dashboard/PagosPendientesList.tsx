import { getPagosPendientes } from "@/app/db/pagos"
import { PagoPendienteProps } from "@/app/types/pagosPendientes"
import venceFormat from "@/app/utils/venceFormat"
import DotEmptySVG from "@/app/assets/DotEmptySvg"
import DotFillSVG from "@/app/assets/DotFillSvg"
import CheckSVG from "@/app/assets/CheckSVG"
import CancelSVG from "@/app/assets/CancelSVG"
import EditSVG from "@/app/assets/EditSVG"
import montoFormat from "@/app/utils/montoFormat"

export default function PagosPendientesList({pagosPendientes, filter}: {pagosPendientes: PagoPendienteProps[]}) {

  
  
  const sortedData = pagosPendientes.sort((a, b) => a.vencimiento.localeCompare(b.vencimiento)) || []

  return (
    <div
      className=" py-4">    
      {filter}
      {sortedData.map(pago => <PagoPendiente key={pago._id.toString()} pago={pago} />)}

    </div>
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