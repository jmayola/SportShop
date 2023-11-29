import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import axios from "axios";
import Product from "./Product";
import { Link } from "react-router-dom";
function Cart() {
  const [Data, setData] = useState([]);
  const [Products, setProducts] = useState([]);
  const Datos = useLoaderData();
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("http://localhost:3000/");
      setProducts(data);
      console.log(data);
    }
    if (Products == "") {
      getProducts();
    }
    function getData() {
      setData(Datos.data);
    }
    if (Data == "") {
      getData();
    }
  }, [Data, Datos, Products]);
  if (Data == "" || Products == "") {
    return (
      <>
        <Header></Header>
        <section className="flex justify-center max-[800px]: m-5  ">
          <form className="flex flex-col w-3/4 border border-gray-300 shadow-lg   ">
            <div className="">
              <div className="flex  justify-between p-10">
                <div className="px-10">
                  <div className="flex px-1 0 border-b border-black font-semibold ">
                    <h1>Carrito</h1>
                    <img src="bx-cart.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <Footer></Footer>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <section className="flex justify-center max-[800px]: m-5  ">
          <form className="flex flex-col w-3/4 border border-gray-300 shadow-lg   ">
            <div className="">
              <div className="flex  justify-between p-10">
                <div className="px-10">
                  <div className="flex px-1 0 border-b border-black font-semibold ">
                    <h1>Carrito</h1>
                    <img src="bx-cart.svg" alt="" />
                  </div>
                  <div className="grid grid-cols-5 justify-between text-center gap-10 px-10 py-2 items-center">
                    <h1 className="flex place-content-center">Imagen</h1>
                    <h1 className="flex place-content-center">Producto</h1>
                    <h1 className="flex place-content-center">Precio</h1>
                    <h1 className="flex place-content-center">Cant.</h1>
                    <h1 className="flex place-content-center">Marca</h1>
                    {Data.map((val, i) => {
                      return (
                        <>
                          <img
                            src={Products[Data[i].id_products].image_products}
                            alt=""
                            className="w-40 bg-gray-500"
                          />
                          <h1>{Products[Data[i].id_products].name_products}</h1>
                          <h2>
                            {Products[Data[i].id_products].price_products}
                          </h2>
                          <h1>{Data[i].cant}</h1>
                          <h1>{Products[Data[i].id_products].mark_products}</h1>
                        </>
                      );
                    })}
                  </div>
                    <Link>Finalizar</Link>
                </div>
              </div>
            </div>
          </form>
        </section>

        <Footer />
      </>
    );
  }
}

export default Cart;
