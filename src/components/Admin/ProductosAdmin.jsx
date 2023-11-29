import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Await, Link, redirect, useLoaderData } from "react-router-dom";
function ProductosAdmin() {
  const [Products, setProducts] = useState([]);
  const [Search, SetSearch] = useState([]);
  const [ModObj, setModObj] = useState([{}]);
  const { data } = useLoaderData();
  useEffect(() => {
    async () => {
      console.log(Products);
    };
  }, [data]);
  if (Products == "") {
    setProducts(data);
  }
  function FindProdcuts(e) {
    let arr = [];
    Products.map((val, i) => {
      if (val.name_products.includes(e)) {
        arr.push(Products[i].name_products);
      }
      SetSearch(arr);
    });
  }
  function setValue(e) {
    let arr = Products.filter((val, ) => {
      if (e == val.name_products) return true;
    });
    setModObj(arr);
  }
  return (
    <>
      <Header></Header>
      <section className="flex justify-center max-[800px]: m-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-lg  p-10">
          <div className="flex justify-center gap-5">
            <input
              type="search"
              autoFocus
              onChange={(e) => {
                FindProdcuts(e.target.value);
                console.log(document.getElementById("selectProd").value);

                document.getElementById("selectProd").style.display = "block";
                if (document.getElementById("selectProd").value == undefined) {
                  console.log("no hay datos");
                  document.getElementById("selectProd").value = "No Hay Datos";
                }
              }}
              className="block w-1/2 rounded-lg text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Buscar producto"
            />
            <select
              className="hidden rounded-lg min-w-[300px] text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              name=""
              onClick={(e) => setValue(e.target.value)}
              id="selectProd"
            >
              <Await>
                {Search.map((val, i) => {
                  return (
                    <option value={val} key={i}>
                      {val}
                    </option>
                  );
                })}
              </Await>
            </select>
          </div>
          <div className="flex justify-between w-full  px-10">
            <div className="   w-full  ">
              <img src="./public/logo-empresa.png" alt="" className="w-auto" />
            </div>
            <div method="post" action="" className="w-full py-10">
              <div className="flex place-content-center place-items-center flex-col ">
                <div className="w-full">
                  <h2 className="flex justify-start px-2 ">
                    Precio por unidad
                  </h2>
                  <input
                    name="usuario"
                    type="text"
                    defaultValue={ModObj[0].price_products}
                    readOnly
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Cantidad en stock</h2>
                  <input
                    name="usuario"
                    type="text"
                    defaultValue={ModObj[0].stock_products}
                    readOnly
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Proveedor</h2>
                  <input
                    name="usuario"
                    type="text"
                    readOnly
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Marca</h2>
                  <input
                    name="usuario"
                    type="text"
                    readOnly
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center max-[800px]: m-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-lg  p-10">
          <div className="flex justify-center gap-5">
            <Link
              to={"/products/Insert"}
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Insertar
            </Link>
            <button
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
              onClick={() => {
                if (confirm("desea eliminar el producto?")) {
                  axios.delete("http://localhost:3000/products", {
                    data: { id_products: ModObj[0].id_products },
                  });
                  return axios
                    .get("http://localhost:3000")
                    .then(async () => redirect("/products"));
                }
              }}
            >
              Borrar Producto
            </button>
            <Link
              to={
                "/products/update/" +
                Products.findIndex((val, ) => {
                  if (val.id_products == ModObj[0].id_products) {
                    return true;
                  } else {
                    return false;
                  }
                })
              }
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Modificar
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
export default ProductosAdmin;
