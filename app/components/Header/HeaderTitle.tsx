
export default function HeaderTitle({ page }: { page: string }) {

  if (page === "pendientes")
    return (
      <div className="grid pagos-grid-6 tracking-wide font-semibold text-my-black mx-4">
        <span id="checkbox"></span>
        <span>vence</span>
        <span>rubro</span>
        <span>sector</span>
        <span>monto</span>
        <span id="menu"></span>
      </div>
    )

  if (page === "realizados")
    return (
      <div className="grid pagos-grid-6 tracking-wide font-semibold text-my-black mx-4">
        <span></span>
        <span>vence</span>
        <span>rubro</span>
        <span>sector</span>
        <span>monto</span>
        <span className="mr-10">pagado</span>
      </div>
    )
}
