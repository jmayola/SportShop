import { Link, useLocation } from "react-router-dom";
function HeaderCliente(data) {
  let setus = data.values;
  let location = useLocation();
  console.log(
    location.pathname.toString().slice(1, location.pathname.toString().length)
  );
  return (
    <>
      <header className=" flex w-full bg-white justify-between align-middle line border-b border-gray-500 list-none max-lg:flex-col  top-0">
        <div className="flex flex-row">
          <img
            className="mx-2 w-16 max-lg:m-auto"
            src="/logo-empresa.png"
            alt="imagen "
          />
          <h2 className="mt-4 text-lg font-bold text-black ">SportShop</h2>

          <h1 className="flex items-center text-xl font-semibold text-gray p-2">
            {location.pathname
              .toUpperCase()
              .toString()
              .slice(1, location.pathname.toString().length)}
          </h1>
        </div>
        <nav className="flex flex-row gap-x-1 font-sans place-items-center justify-between max-lg:flex-col">
          <Link to={`/`}>
            <li className="link-animation link-typography  text-sm font-inter">
              Inicio
            </li>
          </Link>
          <Link to={`/products`}>
            <li className=" link-animation link-typography text-sm font-inter">
              Productos
            </li>
          </Link>
          <a href={`/#aboutus`}>
            <li className="link-animation link-typography font-inter">
              Nosotros
            </li>
          </a>
          <a href={`/ContactUs`}>
            <li className="link-animation link-typography font-inter">
              Contacto
            </li>
          </a>
          <Link to={`/Cart`} className="px-3 ">
            <img src="bx-cart.svg" alt="" />
          </Link>

          <button className="text-white rounded-lg mx-2 text-sm py-2 no-underline font-medium  bg-black hover:bg-neutral-900 active:bg-neutral-900 ">
            <Link to={`/User`}>
              <li className=" mx-3 ">{setus[0].username}</li>
            </Link>
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("usuario");
              location.reload();
            }}
            className="text-white rounded-lg text-sm py-2 mb-1 mx-1 no-underline font-medium  bg-red-500 px-2 hover:bg-red-700 active:bg-neutral-900"
          >
            Salir
          </button>
        </nav>
      </header>
    </>
  );
}

export default HeaderCliente;
