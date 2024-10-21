import { PagoPendienteProps } from "@/app/types/pagosPendientes"
import venceFormat from "@/app/utils/venceFormat"
import DotEmptySVG from "@/app/assets/DotEmptySvg"
import DotFillSVG from "@/app/assets/DotFillSvg"
import CheckSVG from "@/app/assets/CheckSVG"
import CancelSVG from "@/app/assets/CancelSVG"
import EditSVG from "@/app/assets/EditSVG"
import montoFormat from "@/app/utils/montoFormat"
import filteredArrayByRubro from "@/app/utils/filteredArray"

export default function PagosPendientesList({ pagosPendientes, filter }: { pagosPendientes: PagoPendienteProps[], filter: string }) {

  const filteredPagosPendientes = filteredArrayByRubro(pagosPendientes, filter)
  const sortedData = filteredPagosPendientes.sort((a, b) => a.vencimiento.localeCompare(b.vencimiento)) || []

  if (filteredPagosPendientes.length === 0) return <p className="p-8 text-xl">No hay pagos todavia ...</p>

  return (
    <div
      className=" py-4">
      {sortedData.map(pago => <PagoPendiente key={pago._id.toString()} pago={pago} />)}

    </div>
  )
}

const PagoPendiente = ({ pago }: { pago: PagoPendienteProps }) => {

  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  return (
    <article className={`grid pagos-grid items-center tracking-wide rounded-lg m-1 mx-4 text-my-black ${pago.rubro}`}>

      <span id="span-checkbox"
        className="flex justify-center items-center">
        <input className="hidden" id={`check-${pago._id}`} type="checkbox" />
        <label className="label-empty rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200" htmlFor={`check-${pago._id}`}><DotEmptySVG className="size-5" /></label>
        <label className="label-fill rounded-lg hover:bg-slate-400 hover:text-slate-900" htmlFor={`check-${pago._id}`}><DotFillSVG className="size-5" /></label>
      </span>
      <span>{pagoVenceFormat}</span>
      <span>{pago.rubro}</span>
      <span>{pago.sector}</span>
      <span>{pagoMonto}</span>
      <span id="span-menu"
        className="w-10/12 ml-auto bg-slate-200 rounded-lg">

        <div className="flex justify-center gap-6">
          <button type="button" className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200">
            <CheckSVG className="size-7 p-1" currentColor="#00800095" />
          </button>
          <button type="button" className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200">
            <CancelSVG className="size-7 p-1" currentColor="#ff000095" />
          </button>
          <button type="button" className="rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200">
            <EditSVG className="size-7 p-1" currentColor="#00000090" />
          </button>
        </div>
      </span>

    </article>
  )
}