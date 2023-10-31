import { Link } from "react-router-dom"
function Header() {
    return (
        <header className=" flex fixed top-0 left-0 w-full px-10 py-2 bg-[#9ea5e6] justify-between align-middle z-50 ">
            <img className="flex w-auto h-24 p-5 px-14" src="../public/logo-empresa.png" alt="imagen " />

            <nav className="flex flex-row font-sans place-items-center justify-between ">
                <Link to={`/`}><a href="" className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">Inicio</a></Link>
                <Link to={`/galery`}><a className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">Productos</a></Link>
                <Link to={`/aboutus`}><a className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">Nosotros</a></Link>
                <Link to={`https:/github.com/jmayola/sportshop`}><a className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2  hover:after:scale-x-100 hover:after:">Contactos</a></Link>
            </nav>
        </header >
    )
}

export default Header