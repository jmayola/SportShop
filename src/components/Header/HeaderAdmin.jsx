import { Link } from "react-router-dom";
import SubHeader from "../SubHeader";
function HeaderAdmin(data) {
  let setus = data.values;
  return (
    <div>
      <header className=" flex w-full bg-white justify-between align-middle px-5 border-b border-gray-500 list-none max-lg:flex-col  top-0">
        <div className="flex flex-row">
          <img
            className="mx-2 w-16 max-lg:m-auto"
            src="/logo-empresa.png"
            alt="imagen "
          />
          <h2 className="mt-4 text-lg font-bold text-black ">SportShop</h2>
        </div>
        <nav className="flex flex-row gap-x-1 mt-2 font-sans place-items-center justify-between max-lg:flex-col ">
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
          <Link to={`/Cart`} className="pr-3 mb-1 ">
            <img src="bx-cart.svg" alt="" />
            <img
              src="bx-cart-animation.svg"
              alt=""
              className="opacity-0 hover:opacity-10"
            />
          </Link>

          <button className="text-white rounded-xl text-sm py-2 mb-1 mx-1 no-underline font-medium bg-black hover:bg-neutral-700 active:bg-neutral-900">
            <Link to={`/User`}>
              <li className=" mx-3 ">{setus[0].username}</li>
            </Link>
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("usuario");
              location.reload();
            }}
            className="text-white rounded-xl mb-1 text-sm py-2 px-4 no-underline font-medium bg-red-500 hover:bg-red-700 active:bg-neutral-900"
          >
            Salir
          </button>
        </nav>
      </header>
      <SubHeader></SubHeader>
    </div>
  );
}

export default HeaderAdmin;
