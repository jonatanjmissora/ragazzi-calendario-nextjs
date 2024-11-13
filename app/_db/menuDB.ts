import { MenuRubroProps } from "../_types/menuRubros"
import { MENURUBROS, MENURUBROSRESET } from "../_lib/utils/constants"
import { mongoClient } from "./clientDB"

export async function deleteSectorDB(collection: string, rubro: string, sectores: string[]) {

  try {
    const data = await mongoClient
      .collection(collection)
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
      return { data: undefined, error: error.message }
    }
  }
}

export async function addSectorDB(collection: string, rubro: string, newSectores: string[]) {

  try {
    const data = await mongoClient
      .collection<MenuRubroProps>(collection)
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
      return { data: undefined, error: error.message }
    }
  }
}

export async function getSectoresDB(collection: string) {

  // const data = collection === "SectoresActuales"
  //   ? MENURUBROS
  //   : MENURUBROSRESET

  const data = await mongoClient
    .collection<MenuRubroProps>(collection)
    .find()
    .toArray() as MenuRubroProps[] | []

  return data
}

export async function resetSectoresDB() {

  try {

    const rubrosReset = await mongoClient
      .collection<MenuRubroProps>("ConsttantMenuSectores")
      .find()
      .toArray() as MenuRubroProps[] | []

      
    const res =  await mongoClient
      .collection<MenuRubroProps>("SectoresActuales")
      .deleteMany({})
      
      if (res.deletedCount !== 1) throw new Error("No se pudo eliminar")

    const res2 = await mongoClient
      .collection<MenuRubroProps>("SectoresActuales")
      .insertMany(rubrosReset)

    if (!res2.insertedIds)  throw new Error(JSON.stringify(res2))
      
    return { data: "ok", error: undefined }
    
  } catch (error) {
    if (error instanceof Error) {
      return { data: undefined, error: error.message }
    }
  }
}