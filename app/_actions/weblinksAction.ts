"use server"

import { getWeblinksDB, updateWeblinkDB } from "../_db/weblinksDB"

export async function getWeblinksAction() {
    return await getWeblinksDB()
}

export async function updateWeblinkAction(id: string, newHref: string) {
    return await updateWeblinkDB(id, newHref)
}