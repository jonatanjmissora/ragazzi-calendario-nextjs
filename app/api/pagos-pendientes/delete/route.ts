import { deletePagoPendienteDB } from "@/app/db/pagos"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest) {

  try {
    const { id } = await request.json()
    const res = await deletePagoPendienteDB(id)

    return new NextResponse(JSON.stringify(res), { status: 200 })
  } catch (e) {
    if (e instanceof Error) {
      console.log("SERVER ERROR: ", e.message)
      return new NextResponse(JSON.stringify(e.message), { status: 500 })
    }
  }

}