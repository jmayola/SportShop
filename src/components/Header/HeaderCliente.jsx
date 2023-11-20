import React from 'react'
import { Link } from 'react-router-dom'
function HeaderCliente(data) {
  let setus = data.values
  return (
    <>
    <header className=" flex w-full bg-white justify-between align-middle line border-b border-gray-500 list-none max-lg:flex-col  top-0">
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
        <button
          onClick={() => localStorage.removeItem("usuario")}
          className="text-white rounded-xl text-sm py-2 no-underline font-medium  bg-red-500 px-2 hover:bg-red-700 active:bg-neutral-900"
        >
          Salir
        </button>
        <button className="text-white rounded-xl text-sm py-2 no-underline font-medium  bg-black hover:bg-neutral-900 active:bg-neutral-900 ">
          <Link to={`/admin`}>
            <li className=" mx-3 ">{setus[0].username}</li>
          </Link>
        </button>
      </nav>
    </header>
  </>
  )
}

export default HeaderCliente