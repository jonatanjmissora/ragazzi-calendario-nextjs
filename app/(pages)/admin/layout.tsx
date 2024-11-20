import Header from "@/app/_components/Admin/HeaderAdmin/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex justify-center animate-appear">
      <div className="w-dvw sm:w-3/4 min-h-[300px] bg-card rounded-lg shadow overflow-hidden mb-8 mt-20 sm:m-8">
        <Header />
        {children}
      </div>
    </div>
  )
}
