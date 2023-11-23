import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useState, useEffect } from "react";
function Empleados() {
  const [User, setUser] = useState([]);
  const [Search, SetSearch] = useState([]);
  const [ModObj, setModObj] = useState([
    {
      id_products: 1,
      name_products: "peña",
      desc_products: "wapo",
      price_products: 999,
      stock_products: 10,
      category_products: "facha",
      image_products: "botin1.png",
    },
  ]);
  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((res) => {
      let data = res.data;
      return setUser(data);
    });
  }, [User]);

  function FindProdcuts(e) {
    let arr = [];
    User.map((val, i) => {
      if (val.username.includes(e)) {
        arr.push(User[i].username);
      }
      SetSearch(arr);
    });
  }
  function setValue(e) {
    let arr = User.filter((val, i) => {
      if (e == val.username) return true;
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
              placeholder="Buscar empleado"
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
                  <h2 className="flex justify-start px-2 ">
                    Nombre y Apellido
                  </h2>
                  <input
                    name="usuario"
                    type="text"
                    defaultValue={ModObj[0].fullname}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Domicilio</h2>
                  <input
                    name="usuario"
                    type="text"
                    defaultValue={ModObj[0].address}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">DNI</h2>
                  <input
                    name="usuario"
                    type="text"
                    defaultValue={ModObj[0].dni}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Sector de Trabajo</h2>
                  <input
                    name="usuario"
                    type="text"
                    defaultValue={ModObj[0].worksector}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Empleados;
