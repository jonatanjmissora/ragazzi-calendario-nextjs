"use client"

import { PagoProps } from "@/app/types/pagos"
import montoFormat from "@/app/utils/montoFormat"
import venceFormat from "@/app/utils/venceFormat"
import { useState } from "react"
import PagoCheckbox from "./PagoCheckbox"
import PagoMenu from "./PagoMenu"
import PagoModal from "./PagoModal"

export default function PagoPendiente({ pago }: { pago: PagoProps }) {

  const [showModal, setShowModal] = useState<boolean>(false)

  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  return (
    <>
      <article className={`grid pagos-grid-6 items-center tracking-wide rounded-lg m-1 mx-4 text-my-black ${pago.rubro}`}>

        <PagoCheckbox pago={pago} />

        <span>{pagoVenceFormat}</span>
        <span>{pago.rubro}</span>
        <span>{pago.sector}</span>
        <span>{pagoMonto}</span>

        <PagoMenu pago={pago} setShowModal={setShowModal} />

      </article>

      {
        showModal && <PagoModal pago={pago} setShowModal={setShowModal} />
      }

    </>
  )
}