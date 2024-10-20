export default function Header() {
  return (
    <article>

        <Filter />

        <div className="grid pagos-grid tracking-wide font-semibold text-xl border-b border-slate-300 pb-2 mb-2">
            <span id="checkbox"></span>
            <span>vence</span>
            <span>rubro</span>
            <span>sector</span>
            <span>monto</span>
            <span id="menu"></span>
        </div>

    </article>
  )
}

const Filter = () => {
    return (
        <div>
            Filter
        </div>
    )
}
