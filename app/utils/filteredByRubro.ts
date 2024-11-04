import { PagoProps } from "../_types/pagos";

export default function filteredByRubro(array: PagoProps[], filter: string) {

  if (filter === "todos") return array
  return array.filter(element => element.rubro === filter)

}