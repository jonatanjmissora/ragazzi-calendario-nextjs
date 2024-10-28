import { mongoClient } from "./clientDB"

export async function deleteSectorDB(rubro: string, sectores: string[]) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection("SectoresActuales")
    .updateOne(
      { rubro },
      {
        $set: { 'sectores': sectores }
      }
    )

  return data
}

