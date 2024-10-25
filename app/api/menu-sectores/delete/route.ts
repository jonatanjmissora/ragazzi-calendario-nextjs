import { deleteMenuSectorDB } from "@/app/db/menu"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

  try {
    const { rubro, sector } = await request.json()
    const res = await deleteMenuSectorDB(rubro, sector)

    return new NextResponse(JSON.stringify(res), { status: 200 })
  } catch (e) {
    if (e instanceof Error) {
      console.log("SERVER ERROR: ", e.message)
      return new NextResponse(JSON.stringify(e.message), { status: 500 })
    }
  }

}