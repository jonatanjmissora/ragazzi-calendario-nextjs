"use server"

import { revalidatePath } from "next/cache"
import { addAllPagosDB, addPagoDB, deleteAllPagosDB, deletePagoDB, getFilteredPagosDB, getPagosDB, updatePagoDB } from "../_db/pagosDB"
import { PagoProps } from "../_types/pagos"
import { getActualDate, subtractOneYear } from "../_lib/utils/date"

export async function addPagoAction(collection: string, newPago: PagoProps) {
    const res = await addPagoDB(collection, newPago)
    if (!res?.error) revalidatePath("/")
    return res
}

export async function deletePagoAction(collection: string, pago: PagoProps) {

    const pathToRevalidate = collection === "PagosPendientes" ? "/" : "/admin/pagos"

    const res = await deletePagoDB(collection, pago._id)
    if (!res?.error) revalidatePath(pathToRevalidate)
    return res
}

export async function getPagosAction(collection: string) {
    return await getPagosDB(collection)
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

export async function getHistogramAction(rubro: string, sector: string) {
    const actualDate = getActualDate()
    const prevYearDate = subtractOneYear(actualDate)
    const filteredPagosArray = await getFilteredPagosDB("PagosRealizados", rubro, sector, prevYearDate, actualDate)
    const pagosArray = filteredPagosArray.map(pago => { return { fecha: pago.vencimiento, monto: pago.monto } })
    const histogramObj = { id: `${rubro}-${sector}`, pagos: pagosArray }
    return { error: null, data: histogramObj }
}