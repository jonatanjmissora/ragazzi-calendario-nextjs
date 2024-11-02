"use server"

import { revalidatePath } from "next/cache"
import { addPagoDB, deleteAllPagosDB, deletePagoDB, getFilteredPagosDB, getPagosDB, updatePagoDB } from "../db/pagosDB"
import { PagoProps } from "../types/pagos"

export async function addPagoAction(collection: string, newPago: PagoProps) {
    const res = await addPagoDB(collection, newPago)
    if (!res?.error) revalidatePath("/")
    return res
}

export async function deletePagoAction(collection: string, id: string) {
    const res = await deletePagoDB(collection, id)
    if (!res?.error) revalidatePath("/")
    return res
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