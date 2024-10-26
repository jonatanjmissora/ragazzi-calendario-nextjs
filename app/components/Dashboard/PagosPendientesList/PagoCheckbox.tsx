import DotEmptySVG from "@/app/assets/DotEmptySvg"
import DotFillSVG from "@/app/assets/DotFillSvg"
import { PagoProps } from "@/app/types/pagos"
import { usePagosStore } from "@/app/zustand/usePagosStore"

export default function PagoCheckbox({ pago }: { pago: PagoProps }) {

  const { idsTotal, addIdTotal, deleteIdTotal } = usePagosStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked)
      addIdTotal(pago._id)
    else deleteIdTotal(pago._id)
  }

  const isOnTotal = idsTotal.includes(pago._id)

  return (
    <span id="span-checkbox"
      className="flex justify-center items-center">
      <input
        className="hidden"
        onChange={handleChange}
        checked={isOnTotal}
        id={`check-${pago._id}`} type="checkbox" />
      <label className="label-empty rounded-lg hover:bg-slate-400 hover:text-slate-900 duration-200" htmlFor={`check-${pago._id}`}><DotEmptySVG className="size-5" /></label>
      <label className="label-fill rounded-lg hover:bg-slate-400 hover:text-slate-900" htmlFor={`check-${pago._id}`}><DotFillSVG className="size-5" /></label>
    </span>
  )

}