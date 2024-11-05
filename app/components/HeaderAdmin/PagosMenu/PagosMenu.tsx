import FilterRubro from "./FilterRubro"
import FilterSector from "./FilterSector"
import FilterDesde from "./FilterDesde"
import FilterHasta from "./FilterHasta"
import PagoModal from "../../Dashboard/PagosList/PagoModal"
import { useState } from "react"
import AddPagoBtn from "./AddPagoBtn"

export default function PagosMenu() {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <article className="flex justify-between items-center h-[5rem] mx-4">

      <div className="flex justify-center items-center gap-8">

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
