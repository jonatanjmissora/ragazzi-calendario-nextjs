import DotEmptySVG from "@/app/assets/DotEmptySvg"
import DotFillSVG from "@/app/assets/DotFillSvg"
import { PagoPendienteProps } from "@/app/types/pagosPendientes"

export default function PagoCheckbox({ pago, setPagosTotal }: { pago: PagoPendienteProps, setPagosTotal: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>> }) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked)
      setPagosTotal(prev => {
        const newPagosTotal = [...prev]
        newPagosTotal.push(pago)
        return newPagosTotal
      })
    else setPagosTotal(prev => prev.filter(prevPag => prevPag._id !== pago._id))
  }

  return (
    <span id="span-checkbox"
      className="flex justify-center items-center">
      <input
        className="hidden"
        onChange={handleChange}
        id={`check-${pago._id}`} type="checkbox" />
      <label className="label-empty rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200" htmlFor={`check-${pago._id}`}><DotEmptySVG className="size-5" /></label>
      <label className="label-fill rounded-lg hover:bg-slate-400 hover:text-slate-900" htmlFor={`check-${pago._id}`}><DotFillSVG className="size-5" /></label>
    </span>
  )

}