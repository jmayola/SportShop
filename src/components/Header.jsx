import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="">
        <nav className="flex flex-row place-items-center justify-between bg-yellow-100">
            <h1 className="flex text-2xl p-5">SportShop</h1>
            <div className="flex flex-row h-full text-xl list-none">
                <Link to={`contacts/`}><li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Tienda</li></Link>
                <li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Galeria</li>
                <li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Acerca de Nosotros</li>
                <li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Github</li>
            </div>
        </nav>
    </header>
    )
}

export default Header