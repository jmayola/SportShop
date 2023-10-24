import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="">
        <nav className="flex flex-row place-items-center justify-between bg-yellow-100">
            <h1 className="flex text-2xl p-5">SportShop</h1>
            <div className="flex flex-row h-full text-xl list-none">
                <Link to={`/contacts`}><li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Tienda</li></Link>
                <Link to={`/galery`}><li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Galeria</li></Link>
                <Link to={`/aboutus`}><li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Acerca de Nosotros</li></Link>
                <Link to={`https:/github.com/jmayola/sportshop`}><li className="p-10 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Github</li></Link>
            </div>
        </nav>
    </header>
    )
}

export default Header