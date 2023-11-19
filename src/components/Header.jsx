import { Link } from "react-router-dom";
function Header() {
  return (
    <header className=" flex w-full bg-white justify-between align-middle line border-b border-gray-500 list-none max-lg:flex-col sticky top-0">
      <img
        className="mx-2 w-16 max-lg:m-auto"
        src="/logo-empresa.png"
        alt="imagen "
      />

      <nav className="flex flex-row font-sans place-items-center  justify-between px-10 max-lg:flex-col">
        <Link to={`/`}>
          <li className="link-animation link-typography text-black text-sm font-inter">
            Inicio
          </li>
        </Link>
        <Link to={`/products`}>
          <li className=" link-animation link-typography font-inter">
            Productos
          </li>
        </Link>
        <Link to={`#aboutus`}>
          <li className="link-animation link-typography font-inter">
            Nosotros
          </li>
        </Link>
        <Link to={`https:/github.com/jmayola/sportshop`}>
          <li className="link-animation link-typography font-inter">Github</li>
        </Link>
        <Link to={`/Ingresar`}>
          <li className="link-animation link-typography font-inter">
            Ingresar
          </li>
        </Link>
        <Link to={`/Empleados`}>
          <li className="link-animation link-typography text-black text-sm font-inter">
            EMPLEADOS
          </li>
        </Link>
        <button className="text-white rounded-xl text-sm py-2 no-underline font-medium  bg-black hover:bg-neutral-900 active:bg-neutral-900 ">
          <Link to={`/Registrar`}>
            <li className=" mx-3 ">Registrar</li>
          </Link>
        </button>
      </nav>
    </header>
  );
}

export default Header;
