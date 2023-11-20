import { Link } from "react-router-dom";
function SubHeader() {
  return (
    <header className=" flex w-full bg-white justify-between align-middle line border-b border-gray-500 list-none max-lg:flex-col sticky top-0">
      <nav className="flex flex-row font-sans place-items-center  justify-between px-10 max-lg:flex-col">
        <Link to={`/Empleados`}>
          <li className=" link-animation link-typography font-inter">
            Empleados
          </li>
        </Link>
        <Link to={`/Usuarios`}>
          <li className="link-animation link-typography font-inter">
            Usuarios
          </li>
        </Link>
        <Link to={`/Proveedores`}>
          <li className="link-animation link-typography font-inter">
            Proveedores
          </li>
        </Link>
        <Link to={`/ProductosAdmin`}>
          <li className="link-animation link-typography font-inter">
            Productos
          </li>
        </Link>
      </nav>
    </header>
  );
}

export default SubHeader;
