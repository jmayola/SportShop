import { useState, useEffect } from "react";
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
        <div className="flex flex-col ">
          <div className="flex flex-col py-4 gap-y-5 bg-black ">
            <h1 className=" text-center  text-white font-bold underline">
              Filtros y Ayudas de Busqueda
            </h1>
            <input
              type="search"
              name=""
              className=" mx-4 rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <div className=" flex flex-col mx-4 ">
              <div className="flex gap-x-2">
                <input
                  type="checkbox"
                  name="proveedor"
                  id=""
                  placeholder="sudaj"
                  className="text-white"
                />
                <label htmlFor="proveedor" className="text-white">
                  Adidas
                </label>
              </div>
              <div className="flex gap-x-2">
                <input
                  type="checkbox"
                  name="proveedor"
                  id=""
                  placeholder="sudaj"
                  className="text-white"
                />
                <label htmlFor="proveedor" className="text-white">
                  Nike
                </label>
              </div>
              <div className="flex gap-x-2">
                <input
                  type="checkbox"
                  name="proveedor"
                  id=""
                  placeholder="sudaj"
                  className="text-white"
                />
                <label htmlFor="proveedor" className="text-white">
                  Umbro
                </label>
              </div>
              <div className="flex gap-x-2">
                <input
                  type="checkbox"
                  name="proveedor"
                  id=""
                  placeholder="sudaj"
                  className="text-white"
                />
                <label htmlFor="proveedor" className="text-white">
                  Puma
                </label>
              </div>
            </div>
          </div>
          <section className="grid grid-cols-1 place-content-center gap-5 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
