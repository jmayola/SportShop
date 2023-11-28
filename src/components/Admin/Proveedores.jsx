import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Proveedores() {
  const [Provider, setProvider] = useState([]);
  const [Search, SetSearch] = useState([]);
  const [ModObj, setModObj] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:3000/providers").then((res) => {
      let data = res.data;
      return setProvider(data);
    });
  }, [Provider]);
  function FindProdcuts(e) {
    let arr = [];
    Provider.map((val, i) => {
      if (val.provider.includes(e)) {
        arr.push(Provider[i].provider);
      }
      SetSearch(arr);
    });
  }
  function setValue(e) {
    let arr = Provider.filter((val, i) => {
      if (e == val.provider) return true;
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
                document.getElementById("selectProd").style.display = "block";
              }}
              className="block w-1/2 rounded-lg text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Buscar Usuario"
            />
            <select
              className="hidden rounded-lg min-w-[300px] text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              name=""
              onClick={(e) => setValue(e.target.value)}
              id="selectProd"
            >
              {Search.map((val, i) => {
                return (
                  <option value={val} key={i}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between w-full  px-10">
            <div className="   w-full  ">
              <img src="./public/logo-empresa.png" alt="" className="w-auto" />
            </div>
            <div method="post" action="" className="w-full py-10">
              <div className="flex place-content-center place-items-center flex-col ">
                <div className="w-full">
                  <h2 className="flex justify-start px-2 ">Página web</h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Dirección</h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Teléfono</h2>
                  <input
                    name="usuario"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">E-mail </h2>
                  <input
                    name="usuario"
                    type="text"
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
            <Link className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white">
              Insertar
            </Link>
            <Link
              onClick={() => confirm("Desea eliminar el proveedor?")}
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Borrar Proveedor
            </Link>
            <Link className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white">
              Modificar
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Proveedores;
