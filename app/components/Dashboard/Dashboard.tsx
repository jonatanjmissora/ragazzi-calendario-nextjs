import Header from "../Header/Header";

export default function Dashboard({ page, children }: { page: string, children: React.ReactNode }) {

  return (
    <section className="w-3/4 min-h-[300px] primary border border-slate-500 rounded-lg shadow overflow-hidden m-8">

      <div className="h-full">
        <Header page={page} />
        {children}
      </div>

    </section>
  )
}
