import { Link } from "react-router-dom"
function Header() {
    return (
        <header className="">
            <nav className="flex flex-row place-items-center justify-between bg-[#9ea5e6]">
                <img className="flex w-auto h-24 p-5 px-14" src="../public/logo-empresa.jpg" alt="imagen " />

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