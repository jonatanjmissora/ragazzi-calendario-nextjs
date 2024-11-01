import { PagoProps } from "../types/pagos"
import { PAGOSPENDIENTES, PAGOSREALIZADOS } from "../utils/constants"
import { mongoClient } from "./clientDB"

export async function deletePagoDB(collection: string, id: string) {

  try {
    await mongoClient
      .db("Ragazzi")
      .collection<PagoProps>(collection)
      .deleteOne({ "_id": id })

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
      .db("Ragazzi")
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

  let data = [] as PagoProps[]
  const rawData = collection === "PagosPendientes"
    ? PAGOSPENDIENTES
    : PAGOSREALIZADOS

  if (collection === "PagosRealizados") {
    const filteredData = rawData.filter(rdata => rdata.vencimiento.includes(filterF))
    data = [...filteredData]
  }

  else {
    data = [...rawData]
  }

  //TODO hacer el filtro por fecha
  // const data = await mongoClient
  //   .db("Ragazzi")
  //   .collection<PagoProps>(collection)
  //   .find()
  //   .toArray()

  return data
}

export async function updatePagoDB(id: string, newPago: PagoProps) {
  try {
    const data = await mongoClient
      .db("Ragazzi")
      .collection<PagoProps>("PagosPendientes")
      .updateOne(
        { _id: id },
        {
          $set: { 'monto': newPago.monto, "vencimiento": newPago.vencimiento }
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
    .db("Ragazzi")
    .collection<PagoProps>(collection)
    .deleteMany({})
}

export async function getFilteredPagosDB(collection, filterRubro, filterSector, filterDesde, filterHasta) {

  const data = PAGOSREALIZADOS

  // const data = await mongoClient
  //   .db("Ragazzi")
  //   .collection<PagoProps>(collection)
  //   .find()
  //   .toArray()

  return data
}