import { MongoClient } from "mongodb"
import { PagoProps } from "../types/pagos"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

const mongoClient = new MongoClient(uri)

/*
          PAGOS PENDIENTES
*/

export async function getPagosPendientes() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>("PagosPendientes")
    .find()
    .toArray()

  return data
}

export async function addPagoPendienteDB(newPagoPend: PagoProps) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>("PagosPendientes")
    .insertOne(newPagoPend)

  return data
}

export async function deletePagoPendienteDB(id: string) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>("PagosPendientes")
    .deleteOne({ "_id": id })

  return data
}

/*
          PAGOS REALIZADOS
*/

export async function addPagoRealizadoDB(pagoRealizado: PagoProps) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>("PagosRealizados")
    .insertOne(pagoRealizado)

  return data
}

export async function getPagosRealizados() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection<PagoProps>("PagosRealizados")
    .find()
    .toArray()

  return data
}