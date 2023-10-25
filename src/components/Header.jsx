import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="">
        <nav className="flex flex-row place-items-center justify-between bg-[#88CC55]">
            <h1 className="flex text-2xl p-5">SportShop</h1>
            <div className="flex flex-row h-full text-xl list-none">
                <Link to={`/`}><li className="p-5 h-16 text-white text-base cursor-pointer hover:bg-black">Inicio</li></Link>
                <Link to={`/galery`}><li className="p-5 h-16 text-white text-base cursor-pointer hover:bg-black">Productos</li></Link>
                <Link to={`/aboutus`}><li className="p-5 h-16 text-white text-base cursor-pointer hover:bg-black">Acerca de Nosotros</li></Link>
                <Link to={`https:/github.com/jmayola/sportshop`}><li className="p-5 h-16 text-white text-base cursor-pointer hover:bg-black">Contactos</li></Link>
            </div>
        </nav>
    </header>
    )
}

export default Header