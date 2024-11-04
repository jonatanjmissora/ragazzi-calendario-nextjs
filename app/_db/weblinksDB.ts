import { WebLinksProps } from "../_types/webLinks"
import { mongoClient } from "./clientDB"

export async function getWeblinksDB() {

  const data = await mongoClient
    .collection<WebLinksProps>("ConstantAdminLinks")
    .find()
    .sort({ vencimiento: 1 })
    .toArray()

  return data
}

export async function updateWeblinkDB(id: string, newHref: string) {

  const data = await mongoClient
    .collection<WebLinksProps>("ConstantAdminLinks")
    .updateOne(
      { _id: id },
      {
        $set: { 'href': newHref }
      }
    )
    return data
}