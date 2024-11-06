import DotEmptySVG from "@/app/assets/DotEmptySvg"
import DotFillSVG from "@/app/assets/DotFillSvg"
import { PagoProps } from "@/app/_types/pagos"

export default function PagoCheckbox({ pago }: { pago: PagoProps }) {

  // const { total } = usePagosStore()

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.currentTarget.checked)
  //     addIdTotal(pago._id)
  //   else deleteIdTotal(pago._id)
  // }

  // const isOnTotal = idsTotal.includes(pago._id)

  return (
    <span id="span-checkbox"
      className="flex justify-center items-center">

      <input
        className="hidden"
        // onChange={handleChange}
        // checked={isOnTotal}
        id={`check-${pago._id}`} type="checkbox"
      />

      <label className="label-empty rounded-lg"
        htmlFor={`check-${pago._id}`}
      >
        <DotEmptySVG className="size-5 hover-scale-125" />
      </label>

      <label className="label-fill rounded-lg"
        htmlFor={`check-${pago._id}`}
      >
        <DotFillSVG className="size-5 hover-scale-125" />
      </label>
    </span>
  )

}