import HeaderTitle from "./HeaderTitle"
import { RubroFilter } from "./RubroFilter"
import { FechaFilter } from "./FechaFilter"
import TotalCounter from "./TotalCounter"

export default function Header({ page }: { page: string }) {

    return (
        <article className="bg-header py-4 sm:pb-0">

            {page === "pendientes" &&
                <>
                    <div className="flex-1 flex-wrap flex justify-between items-center mb-2 mx-4">
                        <TotalCounter />
                        <RubroFilter />
                    </div>
                    <HeaderTitle page={page} />
                </>
            }

            {
                page === "realizados" &&
                <>
                    <div className="flex-1 flex flex-wrap justify-between items-center mb-2 mx-4 text-sm sm:text-base">
                        <FechaFilter />
                        <RubroFilter />
                    </div>
                    <HeaderTitle page={page} />
                </>
            }

        </article>
    )
}

