"use server"

import { revalidatePath } from "next/cache"
import { addPago, deletePago } from "../db/pagos"
import { PagoProps } from "../types/pagos"

export async function addPagoAction(collection: string, newPago: PagoProps) {
    const res = await addPago(collection, newPago)
    revalidatePath("/")
    return res
}

export async function deletePagoAction(collection: string, id: string) {
    const res = await deletePago(collection, id)
    revalidatePath("/")
    return res
}