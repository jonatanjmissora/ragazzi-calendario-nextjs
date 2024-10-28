import { PagoProps } from "../types/pagos"
import { mongoClient } from "./clientDB"

export async function deletePagoDB(collection: string, id: string) {

  try {
    const data = await mongoClient
      .db("Ragazzi")
      .collection<PagoProps>(collection)
      .deleteOne({ "_id": id })

    console.log({ data })
    return { data: data, error: undefined }

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