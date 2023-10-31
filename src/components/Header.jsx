import { Link } from "react-router-dom"
function Header() {
    return (
        <header className="">
            <nav className="flex flex-row font-sans place-items-center justify-between bg-[#9ea5e6]">
                <img className="flex w-auto h-24 p-5 px-14" src="../public/logo-empresa.png" alt="imagen " />

                <div className="flex flex-row h-full text-xl list-none">
                    <Link to={`/`}><a href="" className="relative text-sm text-white no-underline font-medium mx-10">Inicio</a></Link>
                    <Link to={`/galery`}><a className="">Productos</a></Link>
                    <Link to={`/aboutus`}><a className="">Acerca de Nosotros</a></Link>
                    <Link to={`https:/github.com/jmayola/sportshop`}><a className="">Contactos</a></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header