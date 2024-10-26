import { PagoProps } from "../types/pagos";

export async function addPagoPendienteBack(newPagoPendiente: PagoProps) {
  const res = await fetch(`http://localhost:3000/api/pagos-pendientes/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newPagoPendiente })
  });

  const response = await res.json()
  return response
}

export async function deletePagoPendienteBack(id: string) {
  const res = await fetch(`http://localhost:3000/api/pagos-pendientes/delete`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  });

  const response = await res.json()
  return response
}