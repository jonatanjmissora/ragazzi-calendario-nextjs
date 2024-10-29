import { MenuRubroProps } from "../types/menuRubros"
import { mongoClient } from "./clientDB"

export async function deleteSectorDB(rubro: string, sectores: string[]) {

  try {
    const data = await mongoClient
      .db("Ragazzi")
      .collection("SectoresActuales")
      .updateOne(
        { rubro },
        {
          $set: { 'sectores': sectores }
        }
      )
    console.log("resultado del update: ", { data })
    return { data: undefined, error: undefined }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return { data: undefined, error: error.message }
    }
  }
}

export async function addSectorDB(rubro: string, newSectores: string[]) {

  try {
    const data = await mongoClient
      .db("Ragazzi")
      .collection<MenuRubroProps>("SectoresActuales")
      .updateOne(
        { rubro },
        {
          $set: { 'sectores': newSectores }
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

export async function getSectoresDB() {

  // const data = [
  //   { _id: "01", rubro: "ragazzi", sectores: ["gas", "luz", "telefono"] },
  //   { _id: "02", rubro: "patricios", sectores: ["municipal", "internet", "patente"] },
  //   { _id: "03", rubro: "palihue", sectores: ["municipal", "monotributo"] },
  //   { _id: "04", rubro: "jmolina", sectores: [] },
  // ]

  const data = await mongoClient
    .db("Ragazzi")
    .collection<MenuRubroProps>("SectoresActuales")
    .find()
    .toArray()

  return data
}
