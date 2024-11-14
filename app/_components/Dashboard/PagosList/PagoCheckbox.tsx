"use client"

import DotEmptySVG from "@/app/_assets/DotEmptySvg"
import DotFillSVG from "@/app/_assets/DotFillSvg"
import { useCountStore } from "@/app/_lib/zustand/counter";
import { PagoProps } from "@/app/_types/pagos"
import { useEffect, useRef } from "react";

export default function PagoCheckbox({ pago }: { pago: PagoProps }) {

  const inputRef = useRef<HTMLInputElement>(null)
  const { addId, eliminateId, totalIds } = useCountStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.checked) addId(pago._id, Number(pago.monto))
      else eliminateId(pago._id)
  }

  return (
    <span id="span-checkbox"
      className="flex justify-center items-center">

      <input
      ref={inputRef}
        className="hidden"
          onChange={handleChange}
          checked={totalIds.includes(pago._id)}
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