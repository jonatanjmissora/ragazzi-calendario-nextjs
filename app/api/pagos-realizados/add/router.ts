import { addPagoRealizadoDB } from "@/app/db/pagos"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { pagoRealizado } = await request.json()
    console.log("ROUTE", pagoRealizado)
    const res = await addPagoRealizadoDB(pagoRealizado)

    return new NextResponse(JSON.stringify(res), { status: 200 })
  } catch (e) {
    if (e instanceof Error) {
      console.log("SERVER ERROR: ", e.message)
      return new NextResponse(JSON.stringify(e.message), { status: 500 })
    }
  }

}
