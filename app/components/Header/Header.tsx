import HeaderTitle from "./HeaderTitle"
import { RubroFilter } from "./RubroFilter"
import { FechaFilter } from "./FechaFilter"

export default function Header({ page }: { page: string }) {

    return (
        <article className="bg-my-white border">

            {page === "pendientes" &&
                <>
                    <div className="flex-1 flex justify-between items-center mb-2 mx-4">
                        <span className="text-my-black">Total</span>
                        <RubroFilter />
                    </div>
                    <HeaderTitle page={page} />
                </>
            }

            {
                page === "realizados" &&
                <>
                    <div className="flex-1 flex justify-between items-center mb-2 mx-4">
                        <FechaFilter />
                        <RubroFilter />
                    </div>
                    <HeaderTitle page={page} />
                </>
            }

        </article>
    )
}

