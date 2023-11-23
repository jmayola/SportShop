import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../SubHeader";
function HeaderAdmin(data) {
  let setus = data.values;
  return (
    <div>
      <header className=" flex w-full bg-white justify-between align-middle line border-b border-gray-500 list-none max-lg:flex-col  top-0">
        <img
          className="mx-2 w-16 max-lg:m-auto"
          src="/logo-empresa.png"
          alt="imagen "
        />

        <nav className="flex flex-row gap-1 font-sans place-items-center  justify-between px-10 max-lg:flex-col">
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
          <Link to={`https:/github.com/jmayola/sportshop`}>
            <li className="link-animation link-typography font-inter">
              Github
            </li>
          </Link>
          <button className="text-white rounded-xl text-sm py-2 no-underline font-medium  bg-black hover:bg-neutral-900 active:bg-neutral-900 gap-4 ">
            <Link to={`/Empleados`}>
              <li className=" mx-3 ">{setus[0].username}</li>
            </Link>
          </button>
          <button
            onClick={() => localStorage.removeItem("usuario")}
            className="text-white rounded-xl text-sm py-2 no-underline font-medium  bg-red-500 px-2 hover:bg-red-700 active:bg-neutral-900 gap-4"
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
