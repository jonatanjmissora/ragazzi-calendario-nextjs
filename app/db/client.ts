import { MongoClient } from "mongodb"
import { NewPagoPendienteProps, PagoPendienteProps } from "../types/pagosPendientes"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

const mongoClient = new MongoClient(uri)

export async function getMenuRubrosDB() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection("Sectores")
    .find()
    .toArray()

  return data
}

export async function addPagoPendienteDB(newPagoPendiente: NewPagoPendienteProps) {

}