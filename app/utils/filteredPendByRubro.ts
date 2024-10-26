import { PagoProps } from "../types/pagos";

export default function filteredPendByRubro(array: PagoProps[], filter: string) {

  if (filter === "todos") return array
  return array.filter(element => element.rubro === filter)

}