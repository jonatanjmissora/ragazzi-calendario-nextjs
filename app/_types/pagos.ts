export type PagoProps = {
  _id: string;
  vencimiento: string;
  rubro: string;
  sector: string;
  monto: string;
  pagado: string;
}

export type QueryProps = {
  rubro?: string;
  sector?: string;
  vencimiento?: {
    $gte?: string;
    $gt?: string;
    $lte?: string;
    $lt?: string;
  }
}