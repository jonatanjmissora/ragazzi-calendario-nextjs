"use server"

import { revalidatePath } from "next/cache"
import { addPagoDB, deleteAllPagosDB, deletePagoDB, getPagosDB, updatePagoDB } from "../db/pagosDB"
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

export async function getPagosAction(collection: string) {
    return await getPagosDB(collection)
}

export async function updatePagoAction(id: string, newPago: PagoProps) {
    const res = await updatePagoDB(id, newPago)
    if (!res?.error) revalidatePath("/")
    return res
}

export async function deleteAllPagosAction(collection: string) {
    await deleteAllPagosDB(collection)
    collection === "PagosRealizados" ? revalidatePath("/") : revalidatePath("/pagos-realizados")
}