import { MongoClient } from "mongodb"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

export const mongoClient = new MongoClient(uri)

export async function getMenuRubrosDB() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection("Sectores")
    .find()
    .toArray()

  return data
}

