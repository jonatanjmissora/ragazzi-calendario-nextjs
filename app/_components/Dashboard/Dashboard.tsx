import Header from "./Header/Header";

export default function Dashboard({ page, children }: { page: string, children: React.ReactNode }) {

  return (
    <section className="w-dvw sm:w-3/4 min-h-[300px] bg-card rounded-lg shadow sm:overflow-hidden my-16 sm:m-8">

      <div className="h-full">
        <Header page={page} />
        {children}
      </div>

    </section>
  )
}
