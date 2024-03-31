import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Proveedores() {
  const [Provider, setProvider] = useState([]);
  const [Search, SetSearch] = useState([]);
  const [ModObj, setModObj] = useState([{}]);
  const [Address, setAddress] = useState("");
  const [Webpage, setWebpage] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Provid, setProvid] = useState("");
  const [Email, setEmail] = useState("");
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
    let arr = Provider.filter((val) => {
      if (e == val.provider) return true;
    });
    setModObj(arr);
  }
  return (
    <>
      <Header></Header>
      <section className="flex justify-center my-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-md p-8">
          <div className="flex justify-center gap-x-5">
            <input
              type="search"
              autoFocus
              onChange={(e) => {
                FindProdcuts(e.target.value);
                document.getElementById("selectProd").style.display = "block";
              }}
              className="block w-1/2 rounded-lg text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black "
              placeholder="Buscar Proveedor"
            />
            <select
              className="hidden rounded-lg text-center border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black "
              name=""
              onClick={(e) => {
                setValue(e.target.value);
                setProvid(e.target.value);
              }}
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
            <div className="w-full  ">
              <img src="./public/logo-empresa.png" alt="" className="w-auto" />
            </div>
            <div method="post" action="" className="w-full py-10">
              <div className="flex place-content-center place-items-center flex-col ">
                <div className="w-full">
                  <h2 className="flex justify-start px-2 ">Página web</h2>
                  <input
                    name="webpage"
                    type="text"
                    onChange={(e) => setWebpage(e.target.value)}
                    defaultValue={ModObj[0].webpage}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black "
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Dirección</h2>
                  <input
                    name="usuario"
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    defaultValue={ModObj[0].address}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black "
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Teléfono</h2>
                  <input
                    name="usuario"
                    type="text"
                    onChange={(e) => setTelephone(e.target.value)}
                    defaultValue={ModObj[0].telephone}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black "
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">E-mail </h2>
                  <input
                    name="usuario"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={ModObj[0].email}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-md p-8">
          <div className="flex justify-center gap-x-4">
            <Link
              to={"/Proveedores/insert"}
              className="p-5 bg-black border hover:shadow-2xl duration-500 rounded-md font-medium text-white"
            >
              Insertar
            </Link>
            <button
              onClick={() => {
                if (confirm("Desea eliminar el Proveedor?")) {
                  axios
                    .delete("http://localhost:3000/providers", {
                      data: { provider: Provid },
                    })
                    .then((res) => {
                      if (res.status == 200) {
                        alert("Eliminacion de Proveedor Exitosa");
                        location.reload();
                      } else {
                        alert(
                          "se ha detectado un error en la base de datos, vuelve a intentarlo"
                        );
                        location.reload();
                      }
                    })
                    .catch((res) => {
                      alert("Error, prueba a ingresar un Proveedor.");
                      alert("Se a detectado un error: " + res.message);
                    });
                }
              }}
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Borrar Proveedor
            </button>
            <button
              onClick={() => {
                if (confirm("Desea modificar el Proveedor?")) {
                  axios
                    .put("http://localhost:3000/providers", {
                      data: {
                        provider: Provid,
                        webpage: Webpage,
                        address: Address,
                        telephone: Telephone,
                        email: Email,
                      },
                    })
                    .then((res) => {
                      if (res.status == 200) {
                        alert("Modificacion de Proveedor Exitosa");
                        location.reload();
                      } else {
                        alert(
                          "se ha detectado un error en la base de datos, vuelve a intentarlo"
                        );
                        location.reload();
                      }
                    })
                    .catch((res) => {
                      alert("Error, prueba a ingresar un Proveedor.");
                      alert("Se a detectado un error: " + res.message);
                    });
                }
              }}
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Modificar
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Proveedores;
