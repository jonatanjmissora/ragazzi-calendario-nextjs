import { addPagoPendienteDB } from "@/app/db/pagos"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

  try {
    const { newPagoPend } = await request.json()
    const res = await addPagoPendienteDB(newPagoPend)

    return new NextResponse(JSON.stringify(res), { status: 200 })
  } catch (e) {
    if (e instanceof Error) {
      console.log("SERVER ERROR: ", e.message)
      return new NextResponse(JSON.stringify(e.message), { status: 500 })
    }
  }

}