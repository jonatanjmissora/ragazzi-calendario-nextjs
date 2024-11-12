
type PagosProps = {
    fecha: string;
    monto: string;
}

export type HistoProps = {
    id: string;
    pagos: PagosProps[];
}