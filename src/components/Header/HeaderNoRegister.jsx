/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
function HeaderNoRegister() {
  return (
    <header className=" flex w-full bg-white justify-between align-middle px-5 border-b border-gray-500 list-none max-lg:flex-col top-0">
      <div className="flex flex-row ">
        <img
          className="mx-2 w-16 max-lg:m-auto"
          src="/logo-empresa.png"
          alt="imagen "
        />
        <h2 className="mt-4 text-lg font-bold text-black ">SportShop</h2>
      </div>
      <nav className="flex flex-row gap-x-1 mt-2 font-sans place-items-center justify-between max-lg:flex-col">
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
        <Link to={`/Ingresar`}>
          <li className="link-animation link-typography font-inter">
            Ingresar
          </li>
        </Link>
        <button className="text-white rounded-xl text-sm py-2 mb-1 mx-1 no-underline font-medium  bg-black hover:bg-neutral-900 active:bg-neutral-900 ">
          <Link to={`/Registrar`}>
            <li className=" mx-3 ">Registrar</li>
          </Link>
        </button>
      </nav>
    </header>
  );
}

export default HeaderNoRegister;
