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

export async function deleteAllSectoresDB() {
  const rubrosReset = await mongoClient
    .collection<MenuRubroProps>("ConstantMenuSectores")
    .find()
    .toArray() as MenuRubroProps[] | []

  await mongoClient
    .collection<MenuRubroProps>("SectoresActuales")
    .deleteMany({})

  await mongoClient
    .collection<MenuRubroProps>("SectoresActuales")
    .insertMany(rubrosReset)
}