import { Link } from "react-router-dom"
function Header() {
    return (
        <header className=" flex   h-16 w-full px-1 py-0 bg-white justify-between align-middle line border-b border-gray-500 list-none">
            <img className="flex  px-5 " src="/logo-empresa.png" alt="imagen " />

            {/* Hola gente */}
            <nav className="flex flex-row font-sans place-items-center justify-between px-10 ">
                <Link to={`/`}><li href="" className="link-animation link-typography text-black text-sm font-inter">Inicio</li></Link>
                <Link to={`/products`}><li className=" link-animation link-typography font-inter">Productos</li></Link>
                <Link to={`#aboutus`}><li className="link-animation link-typography font-inter">Nosotros</li></Link>
                <Link to={`https:/github.com/jmayola/sportshop`}><li className="link-animation link-typography font-inter">Contactos</li></Link>
                <Link to={`/register`}><li className="link-animation link-typography font-inter">Ingresar</li></Link>
            </nav>
        </header >
    )
}

export default Header