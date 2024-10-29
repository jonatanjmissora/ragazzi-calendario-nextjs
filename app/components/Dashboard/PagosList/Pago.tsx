"use client"

import { PagoProps } from "@/app/types/pagos"
import montoFormat from "@/app/utils/montoFormat"
import venceFormat from "@/app/utils/venceFormat"
import { useState } from "react"
import PagoModal from "./PagoModal"
import PagoCheckbox from "./PagoCheckbox"
import PagoMenu from "./PagoMenu"
import { usePathname } from "next/navigation"

export default function Pago({ pago }: { pago: PagoProps }) {

  const [showModal, setShowModal] = useState<boolean>(false)
  const pathname = usePathname()


  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  return (
    <>
      <article className={`grid pagos-grid-6 items-center tracking-wide rounded-lg m-1 mx-4 text-my-black ${pago.rubro}`}>

        {
          pathname === "/"
            ? <PagoCheckbox pago={pago} />
            : <span></span>
        }

        <span>{pagoVenceFormat}</span>
        <span>{pago.rubro}</span>
        <span>{pago.sector}</span>
        <span>{pagoMonto}</span>

        {
          pathname === "/"
            ? <PagoMenu pago={pago} setShowModal={setShowModal} />
            : <span className="mr-10">{pago.pagado}</span>
        }

      </article>

      {
        showModal && <PagoModal pago={pago} setShowModal={setShowModal} />
      }

    </>
  )
}