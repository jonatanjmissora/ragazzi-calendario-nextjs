import { PagoProps } from "../types/pagos";

export function sortedByProp(array: PagoProps[], page: string) {

  const property = page === "pendientes" ? "vencimiento" : "pagado"

  return array.sort((a, b) => a[property].localeCompare(b[property]))
}

export function sortedAlpha(array: string[]) {
  return array.sort((a, b) => a.localeCompare(b))
}