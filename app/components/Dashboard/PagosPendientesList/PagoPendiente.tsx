"use client"

import { PagoPendienteProps } from "@/app/types/pagosPendientes"
import montoFormat from "@/app/utils/montoFormat"
import venceFormat from "@/app/utils/venceFormat"
import { useState } from "react"
import PagoCheckbox from "./PagoCheckbox"
import PagoMenu from "./PagoMenu"
import PagoModal from "./PagoModal"

export default function PagoPendiente({ pago, setPagosTotal, setPagosPend }: { pago: PagoPendienteProps, setPagosTotal: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>>, setPagosPend: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>> }) {

  const [showModal, setShowModal] = useState<boolean>(false)

  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  return (
    <>
      <article className={`relative grid pagos-grid items-center tracking-wide rounded-lg m-1 mx-4 text-my-black ${pago.rubro}`}>

        <PagoCheckbox pago={pago} setPagosTotal={setPagosTotal} />

        <span>{pagoVenceFormat}</span>
        <span>{pago.rubro}</span>
        <span>{pago.sector}</span>
        <span>{pagoMonto}</span>

        <PagoMenu pago={pago} setPagosPend={setPagosPend} setShowModal={setShowModal} setPagosTotal={setPagosTotal} />

      </article>

      {
        showModal && <PagoModal pago={pago} setPagosPend={setPagosPend} setShowModal={setShowModal} setPagosTotal={setPagosTotal} />
      }

    </>
  )
}