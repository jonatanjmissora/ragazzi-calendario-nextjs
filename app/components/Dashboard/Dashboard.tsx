"use client"

import Header from "./Header";
import { useEffect } from "react";
import { usePagosStore } from "@/app/zustand/usePagosStore";
import { PagoProps } from "@/app/types/pagos";

export default function Dashboard({ data, page, children }: { data: PagoProps[], page: string, children: React.ReactNode }) {

  return (
    <section className="relative w-3/4 min-h-[300px] primary border border-slate-500 rounded-lg shadow overflow-hidden m-8">

      <div className="h-full">
        <Header page={page} />
        {children}
      </div>

    </section>
  )
}
