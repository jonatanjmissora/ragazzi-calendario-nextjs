import montoFormat from "@/app/utils/montoFormat"
import { usePagosStore } from "@/app/zustand/usePagosStore"

export default function Header() {

    const { getTotal, deleteAllIdsTotal, setFilter } = usePagosStore()

    const total = getTotal()

    return (
        <article className="bg-my-white p-2 pb-0 border">

            <div className="flex-1 flex justify-between items-center mb-2 mx-2">
                <div className="flex justify-between items center gap-12">
                    <span
                        className={`flex items-center text-my-black font-bold tracking-wide ${total == 0 && "opacity-0"}`}>
                        $ {montoFormat(total)}
                    </span>
                    <button
                        className={`text-slate-400 ${total == 0 && "opacity-0"} p-1 px-2 text-xl rounded-lg hover:bg-slate-300 hover:text-slate-700`}
                        onClick={deleteAllIdsTotal}
                    >
                        x
                    </button>
                </div>
                <Filter setFilter={setFilter} />
            </div>

            <div className="grid pagos-grid tracking-wide font-semibold text-my-black">
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

const Filter = ({ setFilter }: { setFilter: (value: string) => void }) => {

    return (
        <div className="">

            <fieldset className="flex gap-6 text-xs">

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("todos")}
                    type="radio" id="all" name="filter" defaultChecked />
                <label htmlFor="all"
                    className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">Todos</label>

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("ragazzi")}
                    type="radio" id="ragazzi" name="filter" />
                <label htmlFor="ragazzi"
                    className="text-slate-600 text-center flex-1 border border-transparent hover:text-black px-1">Ragazzi</label>

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("patricios")}
                    type="radio" id="patricios" name="filter" />
                <label htmlFor="patricios"
                    className="text-slate-600 text-center flex-1 border border-transparent hover:text-black px-1">Patricios</label>

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("palihue")}
                    type="radio" id="palihue" name="filter" />
                <label htmlFor="palihue"
                    className="text-slate-600 text-center flex-1 border border-transparent hover:text-black px-1">Palihue</label>

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("jmolina")}
                    type="radio" id="jmolina" name="filter" />
                <label htmlFor="jmolina"
                    className="text-slate-600 text-center flex-1 border border-transparent hover:text-black px-1">Jmolina</label>

            </fieldset>

        </div>

    )
}
