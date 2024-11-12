import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminMenu() {

  const pathname = usePathname()

  return (
    <div>
      <nav className="flex items-center w-6/12 mt-2 ml-2">
        <Link className={`font-bold link-btn ${pathname === "/admin/pagos" && "link-btn-active"} border-b border-gray-500`} href={"/admin/pagos"}>pagos</Link>
        <Link className={`link-btn ${pathname === "/admin/sectores" && "link-btn-active"} border-b border-gray-500`} href={"/admin/sectores"}>sectores</Link>
        <Link className={`link-btn ${pathname === "/admin/weblinks" && "link-btn-active"} border-b border-gray-500`} href={"/admin/weblinks"}>weblinks</Link>
        <Link className={`link-btn ${pathname === "/admin/firebase-mongo" && "link-btn-active"} border-b border-gray-500`} href={"/admin/firebase-mongo"}>base de datos</Link>
      </nav>
    </div>
  )
}
