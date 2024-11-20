import FilterRubro from "./FilterRubro"
import FilterSector from "./FilterSector"
import FilterDesde from "./FilterDesde"
import FilterHasta from "./FilterHasta"
import { useState } from "react"
import AddPagoBtn from "./AddPagoBtn"
import PagoModal from "@/app/_components/Dashboard/PagosList/PagoModal"

export default function PagosMenu() {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <article className="flex flex-wrap text-sm sm:text-base justify-center sm:justify-between items-center pb-2 m-4 sm:pb-0 sm:h-[5rem] sm:my-0">

      <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-4 sm:gap-8">

        <FilterRubro />

        <FilterSector />

        <FilterDesde />

        <FilterHasta />

      </div>

      <AddPagoBtn setShowModal={setShowModal} />

      {
        showModal && <PagoModal pago={{
          _id: "",
          vencimiento: "",
          rubro: "",
          sector: "",
          monto: "",
          pagado: "",
        }} collection={"PagosRealizados"} setShowModal={setShowModal} isEdit={0} />
      }

    </article>
  )
}
