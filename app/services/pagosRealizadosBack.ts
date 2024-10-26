import { PagoPendienteProps } from "../types/pagosPendientes";


export default async function addPagoRealizadoBack(pagoRealizado: PagoPendienteProps) {
  console.log("EN SERVICIOS", pagoRealizado)
    const res = await fetch(`http://localhost:3000/api/pagos-realizados/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pagoRealizado })
    });
  
    const response = await res.json()
    return response
  }