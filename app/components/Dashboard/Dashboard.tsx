"use client"

import { PagoPendienteProps } from "@/app/types/pagosPendientes";
import Header from "./Header";
import PagosPendientesList from "./PagosPendientesList";
import { useEffect } from "react";
import { usePagosStore } from "@/app/zustand/usePagosStore";

export default function Dashboard({ data }: { data: PagoPendienteProps[] }) {

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
