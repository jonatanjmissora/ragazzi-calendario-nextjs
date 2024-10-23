import { MongoClient } from "mongodb"
import { PagoPendienteProps } from "../types/pagosPendientes"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

const mongoClient = new MongoClient(uri)

export async function getPagosPendientes() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoPendienteProps>("PagosPendientes")
    .find()
    .toArray()

  return data
}