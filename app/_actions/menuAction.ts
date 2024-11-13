"use server"

import { revalidatePath } from "next/cache"
import { addSectorDB, deleteSectorDB, getSectoresDB, resetSectoresDB } from "../_db/menuDB"

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
  const res = await resetSectoresDB()
  if(!res?.error) revalidatePath("/")
  return res
}
