import { MenuRubroProps } from "../types/menuRubros"
import { PagoProps } from "../types/pagos"
import { mongoClient } from "./clientDB"

const pagosPendientes = [
  { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000", pagado: "" },
  { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654", pagado: "" },
  { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385", pagado: "" },
  { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854", pagado: "" },
]

const pagosRealizados = [
  { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "municipal", monto: "12", pagado: "2024-10-10" },
  { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "autonomos", monto: "85", pagado: "2024-10-10" },
]

export async function getPagosDB(collection: string) {

  const data = collection === "pendientes"
    ? pagosPendientes
    : pagosRealizados

  // const data = await mongoClient
  //   .db("Ragazzi")
  //   .collection<PagoProps>(collection)
  //   .find()
  //   .toArray()

  return data
}

export async function getSectoresDB(collection: string) {

  const data = [
    { _id: "01", rubro: "ragazzi", sectores: ["gas", "luz", "telefono"] },
    { _id: "02", rubro: "patricios", sectores: ["municipal", "internet", "patente"] },
    { _id: "03", rubro: "palihue", sectores: ["municipal", "monotributo"] },
    { _id: "04", rubro: "jmolina", sectores: [] },
  ]

  // const data = await mongoClient
  //   .db("Ragazzi")
  //   .collection<MenuRubroProps>(collection)
  //   .find()
  //   .toArray()

  return data
}

