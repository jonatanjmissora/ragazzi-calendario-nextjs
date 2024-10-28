import { MongoClient } from "mongodb"
import { PagoProps } from "../types/pagos"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

const mongoClient = new MongoClient(uri)

export async function deletePago(collection: string, id: string) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>(collection)
    .deleteOne({"_id": id})

  return data
}

export async function addPago(collection: string, newPago: PagoProps) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>(collection)
    .insertOne(newPago)

  return data
}

export async function getPagos(collection: string) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>(collection)
    .find()
    .toArray()

  return data
}