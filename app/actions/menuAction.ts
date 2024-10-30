"use server"

import { revalidatePath } from "next/cache"
import { addSectorDB, deleteAllSectoresDB, deleteSectorDB, getSectoresDB } from "../db/menuDB"

export async function deleteSectorAction(rubro: string, sectores: string[]) {
  const res = await deleteSectorDB(rubro, sectores)
  if (!res?.error) revalidatePath("/")
  return res
}

export async function addSectorAction(rubro: string, newSectores: string[]) {
  const res = await addSectorDB(rubro, newSectores)
  if (!res?.error) revalidatePath("/")
  return res
}

export async function getSectoresAction() {
  return await getSectoresDB()
}

export async function menuResetAction() {
  await deleteAllSectoresDB()
  revalidatePath("/")
}
