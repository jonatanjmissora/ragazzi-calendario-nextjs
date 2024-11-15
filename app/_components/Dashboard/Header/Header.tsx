import HeaderTitle from "./HeaderTitle"
import { RubroFilter } from "./RubroFilter"
import { FechaFilter } from "./FechaFilter"
import TotalCounter from "./TotalCounter"

export default function Header({ page }: { page: string }) {

    return (
        <article className="bg-header pt-4">

            {page === "pendientes" &&
                <>
                    <div className="flex-1 flex justify-between items-center mb-2 mx-4">
                        <TotalCounter />
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

