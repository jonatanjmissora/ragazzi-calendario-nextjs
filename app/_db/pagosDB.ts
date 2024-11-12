import { PagoProps } from "../_types/pagos"
import { PAGOSPENDIENTES, PAGOSREALIZADOS } from "../_lib/utils/constants"
import { setQueryAdminPagos } from "../_lib/utils/setQueryAdminPagos"
import { mongoClient } from "./clientDB"

export async function deletePagoDB(collection: string, id: string) {

  try {
    const data = await mongoClient
      .collection<PagoProps>(collection)
      .deleteOne({ "_id": id })

    if (data.deletedCount !== 1) throw new Error("No se pudo eliminar")
    return { data: data.deletedCount, error: undefined }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { data: undefined, error: error.message }
    }
  }
}

export async function addPagoDB(collection: string, newPago: PagoProps) {

  try {
    const data = await mongoClient
      .collection<PagoProps>(collection)
      .insertOne(newPago)

    if (!data.insertedId) throw new Error(JSON.stringify(data))
    return { data: data.insertedId, error: undefined }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { data: undefined, error: error.message }
    }
  }
}

export async function getPagosDB(collection: string, filterF: string) {

  // let data = [] as PagoProps[]
  // const rawData = collection === "PagosPendientes"
  //   ? PAGOSPENDIENTES
  //   : PAGOSREALIZADOS

  // if (collection === "PagosRealizados") {
  //   const filteredData = rawData.filter(rdata => rdata.vencimiento.includes(filterF))
  //   data = [...filteredData]
  // }

  // else {
  //   data = [...rawData]
  // }

  const sortedByProp = collection === "PagosPendientes" ? "vencimiento" : "pagado"

  const data = await mongoClient
    .collection<PagoProps>(collection)
    .find()
    .sort({ [sortedByProp]: 1 })
    .toArray()

  return data
}

export async function updatePagoDB(collection: string, id: string, newPago: PagoProps) {

  try {
    const data = await mongoClient
      .collection<PagoProps>(collection)
      .updateOne(
        { _id: id },
        {
          $set: { 'monto': newPago.monto, "pagado": newPago.pagado }
        }
      )

    if (!data.acknowledged) throw new Error(JSON.stringify(data))
    return { data: undefined, error: undefined }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { data: undefined, error: error.message }
    }
  }
}

export async function deleteAllPagosDB(collection: string) {
  await mongoClient
    .collection<PagoProps>(collection)
    .deleteMany()
}

export async function getFilteredPagosDB(collection: string, filterRubro: string, filterSector: string, filterDesde: string, filterHasta: string) {

  // const data = PAGOSREALIZADOS

  const query = setQueryAdminPagos(filterRubro, filterSector, filterDesde, filterHasta)

  const data = await mongoClient
    .collection<PagoProps>(collection)
    .find(query)
    .sort({ vencimiento: 1 })
    .toArray()

  return data
}

export async function addAllPagosDB(collection: string, newPagos: PagoProps[]) {

  try {
    const data = await mongoClient
      .collection<PagoProps>(collection)
      .insertMany(newPagos)
    if (!data.insertedIds) throw new Error(JSON.stringify(data))
    return { data: data.insertedIds, error: undefined }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { data: undefined, error: error.message }
    }
  }
}