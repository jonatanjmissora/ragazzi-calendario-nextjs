export default function Header({setFilter}) {
  return (
    <article className="bg-my-white p-4 pb-0">

        <Filter setFilter={setFilter}/>

        <div className="grid pagos-grid tracking-wide font-semibold text-xl text-my-black">
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

const Filter = ({setFilter}) => {



    return (
        <div className="w-full flex justify-center items-center mb-4">

            <fieldset className="flex gap-6">

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("todos")}
                    type="radio" id="all" name="filter"/>
                <label htmlFor="all"
                     className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">Todos</label>

                <input
                     className="hidden flex-0"
                     onChange={() => setFilter("ragazzi")}
                     type="radio" id="ragazzi" name="filter" />
                <label htmlFor="ragazzi"
                     className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">Ragazzi</label>

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("patricios")}
                    type="radio" id="patricios" name="filter" />
                <label htmlFor="patricios"
                     className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">Patricios</label>

                <input
                    className="hidden flex-0"
                    onChange={() => setFilter("palihue")}
                    type="radio" id="palihue" name="filter" />
                <label htmlFor="palihue"
                     className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">Palihue</label>

                <input
                     className="hidden flex-0"   
                     onChange={() => setFilter("jmolina")}
                    type="radio" id="jmolina" name="filter" />
                <label htmlFor="jmolina"
                     className="text-slate-600 text-center flex-1 border border-transparent hover:text-black ">Jmolina</label>

            </fieldset>

        </div>

    )
}
