export type PagoPendienteProps = {
  _id: string;
  vencimiento: string;
  rubro: string;
  sector: string;
  monto: string;
}

export type NewPagoPendienteProps = {
  vencimiento: string;
  rubro: string;
  sector: string;
  monto: string;
}