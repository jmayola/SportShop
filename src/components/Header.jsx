import { Link } from "react-router-dom"
function Header() {
    return (
        <header className=" flex fixed top-0 left-0 w-full px-2 py-0  justify-between align-middle line border-b border-black list-none">
            <img className="flex w-auto h-28 p-5 px-14" src="../public/logo-empresa.png" alt="imagen " />

            <nav className="flex flex-row font-sans place-items-center justify-between ">
                <Link to={`/`}><li href="" className="link-animation">Inicio</li></Link>
                <Link to={`/galery`}><li className=" link-animation">Productos</li></Link>
                <Link to={`/aboutus`}><li className="link-animation ">Nosotros</li></Link>
                <Link to={`https:/github.com/jmayola/sportshop`}><li className="link-animation ">Contactos</li></Link>
            </nav>
        </header >
    )
}

export default Header