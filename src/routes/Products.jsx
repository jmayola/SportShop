import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCard from "../components/Products/ProductsCard";
import { Await, Link, useLoaderData } from "react-router-dom";

function Products() {
  const [Data, setFetch] = useState([]);
  const { data } = useLoaderData();
  useEffect(() => {
    async function GetData() {
      return setFetch(data);
    }
    if (Data == "") {
      GetData();
    }
  }, [Data, data]);
  if (Data == []) {
    return (
      <>
        <Header></Header>
        <div className="grid place-items-center bg-slate-500 p-10 m-10 rounded-xl">
          <h1 className="text-4xl">No hay Productos</h1>
          <p className="text-lg p-5">Prueba a recargar la pagina</p>
        </div>
        <Footer></Footer>
      </>
    );
  } else {
    return (
      <>
        <Header></Header>
        <div className="grid grid-cols-4">
          <div className="min-h-screen col-start-1 col-end-2 bg-black flex flex-col justify-start">
            <h1 className="m-10 text-center  text-white font-bold underline">
              Filtros y Ayudas de Busqueda
            </h1>
            <input
              type="search"
              name=""
              className=" rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 m-10"
              id=""
            />
            <div className="flex flex-row m-10 gap-4">
              <input
                type="checkbox"
                name="proveedor"
                id=""
                placeholder="sudaj"
                className="text-white"
              />
              <label htmlFor="proveedor" className="text-white">Adidas</label>
            </div>
          </div>
          <section className="grid place-content-center grid-cols-3 m-10 max-md:grid-cols-2 col-start-2 col-end-5 gap-10">
            <Await>
              {Data.map((val, i) => {
                return (
                  <Link key={i} to={"/products/" + i}>
                    <ProductsCard value={{ Data, i }} key={i}></ProductsCard>
                  </Link>
                );
              })}
            </Await>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Products;
