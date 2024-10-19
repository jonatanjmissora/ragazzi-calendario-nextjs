import { MongoClient } from "mongodb"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

const mongoClient = new MongoClient(uri)

export async function getPagosPendientes() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection("PagosPendientes")
    .find()
    .toArray()

  return data
}