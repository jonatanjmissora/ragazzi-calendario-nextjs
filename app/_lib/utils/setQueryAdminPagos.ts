import { QueryProps } from "../../_types/pagos"

export const setQueryAdminPagos = (filterRubro: string, filterSector: string, filterDesde: string, filterHasta: string) => {
  let query = {} as QueryProps
  if (filterDesde) query = { ...query, vencimiento: { $gte: filterDesde } }
  if (filterHasta) query = { ...query, vencimiento: { $lte: filterHasta } }
  if (filterHasta && filterHasta) query = { ...query, vencimiento: { $gte: filterDesde, $lt: filterHasta } }

  if (filterRubro) query = { ...query, rubro: filterRubro }
  if (filterSector) query = { ...query, sector: filterSector }
  if (filterRubro && filterSector) query = { ...query, rubro: filterRubro, sector: filterSector }

  if (query?.rubro === "todos") delete query?.rubro
  if (query?.sector === "todos") delete query?.sector

  return query
}