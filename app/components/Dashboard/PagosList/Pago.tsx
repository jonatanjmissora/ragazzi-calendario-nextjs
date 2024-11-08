"use client"

import { PagoProps } from "@/app/_types/pagos"
import montoFormat from "@/app/utils/montoFormat"
import venceFormat from "@/app/utils/venceFormat"
import { useState } from "react"
import PagoModal from "./PagoModal"
import PagoCheckbox from "./PagoCheckbox"
import PagoMenu from "./PagoMenu"
import { usePathname } from "next/navigation"
import ChartSVG from "@/app/assets/ChartSVG"
import Histogram from "./Histogram"
import ArrowDownSVG from "@/app/assets/ArrowDownSVG"
import EditSVG from "@/app/assets/EditSVG"
import TrashSVG from "@/app/assets/TrashSVG"
import toast from "react-hot-toast"
import { deletePagoAction } from "@/app/_actions/pagosAction"

export default function Pago({ pago }: { pago: PagoProps }) {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [showHistogram, setShowHistogram] = useState<boolean>(false)
  const pathname = usePathname()
  const collection = pathname.includes("admin") ? "PagosRealizados" : "PagosPendientes"

  const pagoVenceFormat = venceFormat(pago.vencimiento)
  const pagoMonto = montoFormat(Number(pago.monto))

  const handleDeletePago = async () => {
    const res = await deletePagoAction("PagosRealizados", pago._id)
    if (res?.error) toast.error(res.error)
    else toast.success("Pago eliminado")
  }

  return (
    <>
      <article
        className={`grid pagos-grid-6 hover-light items-center tracking-wide rounded-lg 
      ${pathname.includes("admin") ? "m-[0.125rem]" : "m-1"} mx-4 text-my-black  ${pago.rubro}`}
      >
        {pathname === "/" && <PagoCheckbox pago={pago} />}
        {pathname === "/pagos-realizados" &&
          <span
            className="ml-4"
            onClick={() => setShowHistogram(prev => !prev)}>
            {
              showHistogram
                ? <ArrowDownSVG className="size-6 p-1 hover-scale-125" currentColor="#aa0000" />
                : <ChartSVG className="size-6 p-1 hover-scale-125" />
            }
          </span>
        }
        {
          pathname === "/admin/pagos" &&
          <span
            className="flex justify-between items-center"
          >
            <button onClick={() => setShowModal(true)}>
              <EditSVG className="size-7 p-1 hover-scale-125" currentColor="#222" />
            </button>
            <button onClick={handleDeletePago}>
              <TrashSVG className="size-7 p-1 hover-scale-125" currentColor="#222" />
            </button>
          </span>
        }

        {
          pathname === "/"
            ? <span>{pagoVenceFormat}</span>
            : <span>{pago.vencimiento}</span>
        }

        <span>{pago.rubro}</span>
        <span>{pago.sector}</span>
        <span>{pagoMonto}</span>

        {
          pathname === "/"
            ? <PagoMenu pago={pago} setShowModal={setShowModal} />
            : <span className="mr-10">{pago.pagado}</span>
        }

      </article>


      {showHistogram && <Histogram pago={pago} />}

      {
        showModal && <PagoModal pago={pago} collection={collection} setShowModal={setShowModal} isEdit={1} />
      }

    </>
  )
}

