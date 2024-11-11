"use server"

import { revalidatePath } from "next/cache"
import { addAllPagosDB, addPagoDB, deleteAllPagosDB, deletePagoDB, getFilteredPagosDB, getPagosDB, updatePagoDB } from "../_db/pagosDB"
import { PagoProps } from "../_types/pagos"
import { addSectorAction, getSectoresAction } from "./menuAction"

export async function addPagoAction(collection: string, newPago: PagoProps) {
    const res = await addPagoDB(collection, newPago)
    if (!res?.error) revalidatePath("/")
    return res
}

export async function deletePagoAction(collection: string, pago: PagoProps) {

    const res = await deletePagoDB(collection, pago._id)

    if (collection === "Pagos realizados") {
        if (!res?.error) revalidatePath("/admin/pagos")
        return res
    }

    else {
        const menuRubros = await getSectoresAction("SectoresActuales")
        const newSectores = menuRubros
            .find(mr => mr.rubro === pago.rubro)?.sectores
            .filter(s => s !== pago.sector) || []
        newSectores.push(pago.sector)
        const res2 = await addSectorAction("SectoresActuales", pago.rubro, newSectores)
        if (!res2?.error) {
            const res3 = await deletePagoDB(collection, pago._id)
            if (!res3?.error) revalidatePath("/")
            return res3
        }
        else {
            return res2
        }
    }

}

export async function getPagosAction(collection: string, filterF: string) {
    return await getPagosDB(collection, filterF)
}

export async function updatePagoAction(collection: string, id: string, newPago: PagoProps) {
    const res = await updatePagoDB(collection, id, newPago)
    if (!res?.error) revalidatePath("/")
    return res
}

export async function deleteAllPagosAction(collection: string) {
    await deleteAllPagosDB(collection)
    if (collection === "PagosRealizados")
        revalidatePath("/")
    else
        revalidatePath("/pagos-realizados")
}

export async function getFilteredPagosAction(collection: string, filterRubro: string, filterSector: string, filterDesde: string, filterHasta: string) {
    return await getFilteredPagosDB(collection, filterRubro, filterSector, filterDesde, filterHasta)
}

export async function addAllPagosAction(collection: string, newPagos: PagoProps[]) {
    return await addAllPagosDB(collection, newPagos)
}