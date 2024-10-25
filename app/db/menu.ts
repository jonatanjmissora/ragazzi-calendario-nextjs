import { MongoClient } from "mongodb"

const uri = "mongodb+srv://jonatanjmissora:kato26794337@ragazzi.jdw5i.mongodb.net/?retryWrites=true&w=majority&appName=Ragazzi"

export const mongoClient = new MongoClient(uri)

export async function getMenuSectoresDB() {
  const data = await mongoClient
    .db("Ragazzi")
    .collection("SectoresActuales")
    .find()
    .toArray()

  return data
}

export async function deleteMenuSectorDB(rubro: string, sector: string) {
  const data = await mongoClient
    .db("Ragazzi")
    .collection("SectoresActuales")
    .updateOne(
      { rubro: 'ragazzi' },
      {
        $set: { 'sectores': [] }
      }
    )

  return data
}

