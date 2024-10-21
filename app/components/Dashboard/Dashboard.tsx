"use client"

import { PagoPendienteProps } from "@/app/types/pagosPendientes";
import Header from "./Header";
import PagosPendientesList from "./PagosPendientesList";
import { useState } from "react";

export default function Dashboard({ pagosPendientes }: { pagosPendientes: PagoPendienteProps[] }) {

  const [filter, setFilter] = useState<string>("todos")

  return (
    <section className="w-3/4 h-full primary rounded-lg shadow overflow-hidden">

      <div className="">
        <Header setFilter={setFilter} />
        <PagosPendientesList pagosPendientes={pagosPendientes} filter={filter} />
      </div>

    </section>
  )
}
