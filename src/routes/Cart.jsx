import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import axios from "axios";
import Product from "./Product";
function Cart() {
  const [Data, setData] = useState([]);
  const [Products, setProducts] = useState([])
  const data = useLoaderData();
  useEffect(() => {
    async function getProducts(){
      const {data} = await axios.get("http://localhost:3000/cart")
      setProducts(data)
    }
    if(Products == ""){
      getProducts()
    }
    function getData() {}
    if (Data == "") {
      getData();
    }
  }, [Data, data, Products]);
  console.log(Data)
  console.log(Products)
  if (Data == "") {
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
                  <div className="flex justify-between gap-36 px-10 py-2 font-semibold  ">
                    <h1>Imagen</h1>
                    <h1>Producto</h1>
                    <h1>Cant.</h1>
                    <h1>Marca</h1>
                  </div>
                  <div className="flex justify-between gap-36 px-10 py-2 items-center">
                    {Data.map((val, i) => {
                      return (
                        <>
                          <img
                            src={Products[Data[i].id_products].image_products}
                            alt=""
                            className="w-1/12 bg-gray-500"
                          />
                          <div className="flex flex-col">
                            <h1>Producto</h1>
                            <h2>$$$$$$</h2>
                          </div>
                          <h1>1</h1>
                          <h1>Nombre</h1>
                        </>
                      );
                    })}
                  </div>
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
