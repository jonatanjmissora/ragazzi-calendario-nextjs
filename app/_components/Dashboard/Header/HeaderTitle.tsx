
export default function HeaderTitle({ page }: { page: string }) {

  if (page === "pendientes")
    return (
      <div className="hidden sm:grid grid-cols-my-6 pagos-container tracking-wide font-semibold text-my-black mx-4">
        <span id="checkbox"></span>
        <span>vence</span>
        <span>rubro</span>
        <span>sector</span>
        <span>monto</span>
        <span id="menu"></span>
      </div>
    )

  if (page === "realizados" || page === "admin")
    return (
      <div className={`hidden sm:grid grid-cols-my-6 pagos-container tracking-wide font-semibold mx-4 ${page === "admin" ? "text-my-white" : "text-my-black"}`}>
        <span></span>
        <span>vence</span>
        <span>rubro</span>
        <span>sector</span>
        <span>monto</span>
        <span className="mr-10">pagado</span>
      </div>
    )
}
