import { PagoPendienteProps } from "../types/pagosPendientes";

export default async function addPagoPendienteBack(newPagoPend: PagoPendienteProps) {
  const res = await fetch(`http://localhost:3000/api/pagos-pendientes/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newPagoPend })
  });

  const response = await res.json()
  return response
}
