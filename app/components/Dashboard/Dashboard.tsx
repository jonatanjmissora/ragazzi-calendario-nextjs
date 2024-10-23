"use client"

import { PagoPendienteProps } from "@/app/types/pagosPendientes";
import Header from "./Header";
import PagosPendientesList from "./PagosPendientesList";
import { useEffect } from "react";
import { usePagosStore } from "@/app/zustand/usePagosStore";

export default function Dashboard({ data }: { data: PagoPendienteProps[] }) {

  // const [pagosPend, setPagosPend] = useState<PagoPendienteProps[]>(data)
  // const [filter, setFilter] = useState<string>("todos")
  // const [pagosTotal, setPagosTotal] = useState<PagoPendienteProps[]>([])

  // const filteredPagosPendientes = filteredArrayByRubro(pagosPend, filter)
  // const sortedData = filteredPagosPendientes.sort((a, b) => a.vencimiento.localeCompare(b.vencimiento))
  // const total = pagosTotal.reduce((acc, pago) => acc + Number(pago.monto), 0)

  const { setPagosPend } = usePagosStore()
  useEffect(() => {
    setPagosPend(data)
  }, [setPagosPend, data])

  return (
    <section className="w-3/4 h-full primary rounded-lg shadow overflow-hidden">

      <div className="">
        <Header />
        <PagosPendientesList />
      </div>

    </section>
  )
}
