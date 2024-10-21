import { PagoPendienteProps } from "../types/pagosPendientes";

export default function filteredArrayByRubro(array: PagoPendienteProps[], filter: string) {

  if (filter === "todos") return array
  return array.filter(element => element.rubro === filter)

}