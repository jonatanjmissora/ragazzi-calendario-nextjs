"use server"

import { revalidatePath } from "next/cache"
import { addPagoDB, deletePagoDB } from "../db/pagosDB"
import { PagoProps } from "../types/pagos"

export async function addPagoAction(collection: string, newPago: PagoProps) {
    const res = await addPagoDB(collection, newPago)
    revalidatePath("/")
    return res
}

export async function deletePagoAction(collection: string, id: string) {
    const res = await deletePagoDB(collection, id)
    revalidatePath("/")
    return res
}