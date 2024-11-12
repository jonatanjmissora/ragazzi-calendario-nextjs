import absa_logo from "../assets/absa_logo.webp"
import arba_logo from "../assets/arba_logo.webp"
import bahia_logo from "../assets/bahia_logo.webp"
import camuzzi_logo from "../assets/camuzzi_logo.webp"
import edes_logo from "../assets/edes_logo.webp"

export const MENURUBROSRESET = [
  { _id: "01", rubro: "ragazzi", sectores: ["agua", "luz", "municipal"] },
  { _id: "02", rubro: "patricios", sectores: [] },
  { _id: "03", rubro: "palihue", sectores: ["internet", "rentas"] },
  { _id: "04", rubro: "jmolina", sectores: [] },
]

export const MENURUBROS = [
  { _id: "01", rubro: "ragazzi", sectores: ["gas", "luz", "telefono"] },
  { _id: "02", rubro: "patricios", sectores: ["municipal", "internet", "patente"] },
  { _id: "03", rubro: "palihue", sectores: ["municipal", "monotributo"] },
  { _id: "04", rubro: "jmolina", sectores: [] },
]

export const PAGOSPENDIENTES = [
  { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000", pagado: "" },
  { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654", pagado: "" },
  { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385", pagado: "" },
  { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854", pagado: "" },
]

export const PAGOSREALIZADOS = [
  { _id: "edf23", vencimiento: "2024-11-20", rubro: "jmolina", sector: "municipal", monto: "12", pagado: "2024-10-10" },
  { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "autonomos", monto: "85", pagado: "2024-10-10" },
  { _id: "e2f23", vencimiento: "2024-09-20", rubro: "jmolina", sector: "municipal", monto: "12", pagado: "2024-09-10" },
  { _id: "rt323", vencimiento: "2023-11-15", rubro: "patricios", sector: "autonomos", monto: "85", pagado: "2023-10-10" },
  { _id: "edf43", vencimiento: "2024-08-20", rubro: "jmolina", sector: "municipal", monto: "12", pagado: "2024-08-10" },
  { _id: "rtf25", vencimiento: "2024-10-15", rubro: "ragazzi", sector: "autonomos", monto: "85", pagado: "2024-10-10" },
]

export const MONTHSARRAY = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export const RUBROSARRAY = ["todos", "ragazzi", "patricios", "palihue", "jmolina"]
export const SECTORESARRAY = [
  "todos",
  "agua",
  "alquiler",
  "autonomo",
  "celular",
  "cochera",
  "complement",
  "contador",
  "gas",
  "federada",
  "ing brutos",
  "internet",
  "iva",
  "luz",
  "master",
  "municipal",
  "patente",
  "seguro",
  "sindicato",
  "sueldo Gus",
  "sueldo Rod",
  "sueldo Jon",
  "suss",
  "tasa",
  "telefono",
  "tran Alo",
  "tran Bal",
  "rentas",
  "reporte Z1",
  "reporte Z2",
  "reporte Z3",
  "reporte Z4",
  "visa",
  "visa Rio",
  "visa Pro",
]

export const SECTORESRESET = [
  { "_id": "ragazzi-reset", "rubro": "ragazzi", "sectores": ["agua", "contador", "gas", "ing brutos", "iva", "luz", "municipal", "seguro", "sindicato", "sueldo Gus", "sueldo Rod", "sueldo Jon", "suss", "tasa", "telefono", "tran Alon", "tran Bal", "reporte Z1", "reporte Z2", "reporte Z3", "reporte Z4", "alquiler"] },
  { "_id": "patricios-reset", "rubro": "patricios", "sectores": ["autonomo", "celular", "cochera", "complement", "federada", "gas", "luz", "master", "municipal", "rentas", "visa", "patente"] },
  { "_id": "palihue-reset", "rubro": "palihue", "sectores": ["agua", "gas", "luz", "municipal", "rentas"] },
  { "_id": "jmolina-reset", "rubro": "jmolina", "sectores": ["agua", "gas", "luz", "municipal", "patente", "rentas", "visa Rio", "visa Prov"] }
]

export const WEBLINKS = [
  {
    _id: "aguas bonaerenses",
    href: "https://oficinavirtual.aguasbonaerenses.com.ar/login",
    img: absa_logo
  },
  {
    _id: "camuzzi gas pampeana",
    href: "https://oficinavirtual.camuzzigas.com.ar/#/landing",
    img: camuzzi_logo
  },
  {
    _id: "edes",
    href: "https://oficinavirtual.infoedes.com/ingreso",
    img: edes_logo
  },
  {
    _id: "municipilada bahia blanca",
    href: "https://www.bahia.gob.ar/apex/f?p=204:LOGIN_DESKTOP:9560258291395:::::",
    img: bahia_logo
  },
  {
    _id: "arba rentas",
    href: "https://app.arba.gov.ar/LiqPredet/InicioLiquidacion.do",
    img: arba_logo
  }
]

export const HISTOGRAM = {
  id: "ragazzi-agua",
  pagos: [
    { fecha: "2024-10", monto: "2595" },
    { fecha: "2024-09", monto: "3850" },
    { fecha: "2024-08", monto: "4580" },
    { fecha: "2024-07", monto: "2595" },
    { fecha: "2024-06", monto: "7890" },
    { fecha: "2024-05", monto: "3050" },
    { fecha: "2024-04", monto: "5580" },
    { fecha: "2024-03", monto: "7580" },
    { fecha: "2024-04", monto: "5580" },
    { fecha: "2024-03", monto: "7580" },
  ]
}