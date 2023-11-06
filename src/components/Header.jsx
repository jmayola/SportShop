import { Link } from "react-router-dom"
function Header() {
    return (
        <header className=" flex   h-16 w-full px-1 py-0 bg-white justify-between align-middle line border-b border-gray-500 list-none">
            <img className="flex  px-5 " src="../public/logo-empresa.png" alt="imagen " />
            <nav className="flex flex-row font-sans place-items-center justify-between ">
                <Link to={`/products`} className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">Productos</Link>
                <Link to={`/aboutus`} className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2 hover:after:scale-x-100">Nosotros</Link>
                <Link to={`https:/github.com/jmayola/sportshop`} className="relative text-sm text-white no-underline font-medium mx-3 after:absolute after:left-0 after:bottom-1.5 after:w-full after:h-0.5 after:bg-white after:rounded-md after:scale-x-0 after:transition-transform hover:py-2  hover:after:scale-x-100 hover:after:">Contactos</Link>
=======
            <nav className="flex flex-row font-sans place-items-center justify-between px-10 ">
                <Link to={`/`}><li href="" className="link-animation link-typography text-black text-sm font-inter">Inicio</li></Link>
                <Link to={`/galery`}><li className=" link-animation link-typography font-inter">Productos</li></Link>
                <Link to={`/aboutus`}><li className="link-animation link-typography font-inter">Nosotros</li></Link>
                <Link to={`https:/github.com/jmayola/sportshop`}><li className="link-animation link-typography font-inter">Contactos</li></Link>
                <Link to={`/register`}><li className="link-animation link-typography font-inter">Ingresar</li></Link>
            </nav>
        </header >
    )
}

export default Header