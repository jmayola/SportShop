import React from "react";
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
        <div className="flex justify-between gap-10">
          <img
            className="mx-2 w-16 max-lg:m-auto"
            src="/logo-empresa.png"
            alt="imagen "
          />
          <h1 className="flex items-center text-xl font-semibold text-gray p-2">
            {location.pathname
              .toUpperCase()
              .toString()
              .slice(1, location.pathname.toString().length)}
          </h1>
        </div>
        <nav className="flex flex-row font-sans place-items-center  justify-between px-10 max-lg:flex-col">
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
          <Link to={`/Cart`} className="px-3 ">
            <img src="bx-cart.svg" alt="" />
            <img
              src="bx-cart-animation.svg"
              alt=""
              className="opacity-0 hover:opacity-10"
            />
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
            className="text-white rounded-lg text-sm py-2 no-underline font-medium  bg-red-500 px-2 hover:bg-red-700 active:bg-neutral-900"
          >
            Salir
          </button>
        </nav>
      </header>
    </>
  );
}

export default HeaderCliente;
