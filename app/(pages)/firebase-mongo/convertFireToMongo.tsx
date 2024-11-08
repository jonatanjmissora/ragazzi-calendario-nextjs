import { PagoProps } from "@/app/_types/pagos";
import { FireDataProps } from "@/app/lib/hooks/useFirebase";
import { SECTORESARRAY } from "@/app/utils/constants";

const OLDSECTORS = ["auton", "compl", "ing br", "muni", "reporte z1",
   "reporte z2", "reporte z3", "reporte z4", "sueldo g", "sueldo r",
    "sueldo j", "transp a", "transp b", "visa prov", "visa rio"]
const CONVERTED = {
  "auton": "autonomo", "compl": "complement", "ing br": "ing brutos",
   "muni": "municipal", "reporte z1": "reporte Z1", "reporte z2": "reporte Z2",
    "reporte z3": "reporte Z3", "reporte z4": "reporte Z4", "sueldo g": "sueldo Gus",
    "sueldo r": "sueldo Rod", "sueldo j": "sueldo Jon", "transp a": "tran Alo",
    "transp b": "tran Bal", "visa prov": "visa Prov", "visa rio": "visa Rio"
}

const invDate = (date: string) => {
    const [day, month] = date.split("-")
    return month + "-" + day
  }

export const correctSector = (oldSector: string) => {

  if(SECTORESARRAY.includes(oldSector)) return oldSector

  else 
    if(OLDSECTORS.includes(oldSector)) return CONVERTED[oldSector]

    else return oldSector

}

export function convertFireToMongo(oldDocs: FireDataProps[], docYear: string) {

    const convToMongo = oldDocs.map(doc => {

      const newSector = correctSector(doc.rubro.toLowerCase())
      const newId = `${docYear}-${invDate(doc.date)}-${doc.sector}-${newSector.replaceAll(" ", "-")}`

        return {
          _id: newId,
          vencimiento: `${docYear}-${invDate(doc.date)}`,
          rubro: doc.sector,
          sector: newSector,
          monto: doc.monto,
          pagado: `${docYear}-${invDate(doc.fechaPagado)}`,
        }
    
      }) as PagoProps[]

  return convToMongo

}