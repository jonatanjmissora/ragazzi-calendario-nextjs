"use server"

import { revalidatePath } from "next/cache"
import { addSectorDB, deleteAllSectoresDB, deleteSectorDB, getSectoresDB } from "../_db/menuDB"

export async function deleteSectorAction(collection: string, rubro: string, sectores: string[]) {
  const res = await deleteSectorDB(collection, rubro, sectores)
  if (!res?.error) {
    revalidatePath("/")
    revalidatePath("/admin/sectores")
  }
  return res
}

export async function addSectorAction(collection: string, rubro: string, newSectores: string[]) {
  const res = await addSectorDB(collection, rubro, newSectores)
  console.log({collection})
  if (!res?.error) {
    revalidatePath("/")
    revalidatePath("/admin/sectores")
  }
  return res
}

export async function getSectoresAction(collection: string) {
  return await getSectoresDB(collection)
}

export async function menuResetAction() {
  await deleteAllSectoresDB()
  revalidatePath("/")
}
