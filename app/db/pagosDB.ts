import { PagoProps } from "../types/pagos"
import { mongoClient } from "./clientDB"

export async function deletePagoDB(collection: string, id: string) {

  try {
    const data = await mongoClient
      .db("Ragazzi")
      .collection<PagoProps>(collection)
      .deleteOne({ "_id": id })

    console.log({ data })

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

// const pagosPendientes = [
//   { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000", pagado: "" },
//   { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654", pagado: "" },
//   { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385", pagado: "" },
//   { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854", pagado: "" },
// ]

// const pagosRealizados = [
//   { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "municipal", monto: "12", pagado: "2024-10-10" },
//   { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "autonomos", monto: "85", pagado: "2024-10-10" },
// ]

export async function getPagosDB(collection: string) {

  // const data = collection === "pendientes"
  //   ? pagosPendientes
  //   : pagosRealizados

  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>(collection)
    .find()
    .toArray()

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

    console.log("resultado del update: ", { data })
    if (!data.acknowledged) throw new Error(JSON.stringify(data))
    return { data: undefined, error: undefined }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { data: undefined, error: error.message }
    }
  }
}