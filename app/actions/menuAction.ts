"use server"

import { revalidatePath } from "next/cache"
import { deleteSectorDB } from "../db/menuDB"

export async function deleteSectorAction(rubro: string, sectores: string[]) {
  const res = await deleteSectorDB(rubro, sectores)
  revalidatePath("/")
  return res
}