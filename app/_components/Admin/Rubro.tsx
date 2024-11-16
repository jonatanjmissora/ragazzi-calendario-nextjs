"use client"

import { addSectorAction, deleteSectorAction } from "@/app/_actions/menuAction";
import CancelSVG from "@/app/_assets/CancelSVG";
import PlusSVG from "@/app/_assets/PlusSVG";
import { MenuRubroProps } from "@/app/_types/menuRubros";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Rubro({ rubro }: { rubro: MenuRubroProps }) {

  const formRef = useRef<HTMLFormElement>(null)
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "actuales"

  const formAction = async (formData: FormData) => {
    const sector = formData.get("sector") as string
    if (!sector || sector.trim() === "") return

    const newSectores = [...rubro.sectores, sector]
    const collection = type === "actuales" ? "SectoresActuales" : "ConstantMenuSectores"
    const res = await addSectorAction(collection, rubro.rubro, newSectores)
    if (!res?.error) {
      toast.success("Sector añadido con exito")
      formRef.current?.reset()
    }
    else toast.error("Fallo al añadir sector")

  }

  return (
    <div className="p-2 bg-header rounded-lg shadow text-my-black">

      <div className="flex justify-between items-center">
        <span className="font-bold tracking-wide">{rubro.rubro}</span>
        <form
          className="flex items-center justify-center gap-1"
          ref={formRef}
          action={formAction}
        >
          <input className="text-sm text-center w-[15ch] mb-2" type="text" name="sector" />
          <button type="submit">
            <PlusSVG className="size-7 p-1 pb-2" />
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-2">
        {rubro.sectores.map(sector => <SectorCard key={sector} sector={sector} rubro={rubro.rubro} sectores={rubro.sectores} type={type} />)}
      </div>

    </div>
  )
}

const SectorCard = ({ sector, rubro, sectores, type }: { sector: string, rubro: string, sectores: string[], type: string }) => {

  const handleDelete = async () => {

    const collection = type === "actuales" ? "SectoresActuales" : "ConstantMenuSectores"
    const sectoresWithoutActualSector = sectores.filter(sect => sect !== sector)
    const res = await deleteSectorAction(collection, rubro, sectoresWithoutActualSector)
    if (!res?.error) toast.success("Sector eliminado con exito")
    else toast.error("Fallo al eliminar sector")
  }

  return (
    <div className="text-my-white flex gap-2 justify-center items-center px-1 rounded-lg duration-200 bg-my-black hover:scale-110 hover:bg-my-hover-secondary">
      <span>{sector}</span>
      <button
        className="pt-[0.15rem]"
        onClick={handleDelete}
      >
        <CancelSVG className="size-5 p-1" currentColor="currentColor" />
      </button>
    </div>
  )
}