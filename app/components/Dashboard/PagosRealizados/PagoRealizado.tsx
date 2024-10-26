"use client"

import { PagoProps } from "@/app/types/pagos"
import montoFormat from "@/app/utils/montoFormat"
import venceFormat from "@/app/utils/venceFormat"

export default function PagoRealizado({ pago }: { pago: PagoProps }) {

  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  return (
    <article className={`grid pagos-grid-5 items-center tracking-wide rounded-lg m-1 mx-4 text-my-black ${pago.rubro}`}>
      <span>{pagoVenceFormat}</span>
      <span>{pago.rubro}</span>
      <span>{pago.sector}</span>
      <span>{pagoMonto}</span>
      <span className="mr-8">{pago.pagado}</span>

    </article>
  )
}