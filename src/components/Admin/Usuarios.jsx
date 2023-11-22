import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useState,useEffect } from "react";
function Usuarios() {
  const [User, setUser] = useState([]);
  const [Search, SetSearch] = useState([]);
  const [ModObj, setModObj] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
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
          <div className="flex justify-center   ">
            <img src="./public/logo-empresa.png" alt="" className="w-auto" />
          </div>

          <div className="flex justify-between px-10">
            <div className="">
              <h2 className="flex justify-start px-2 ">Nombre de usuario</h2>
              <input
                type="text"
                defaultValue={ModObj[0].username}
                className="block rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
            <div className="">
              <h2 className="flex justify-start px-2">Tipo</h2>
              <input
                type="text"
                defaultValue={ModObj[0].tipo}
                className="block  rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
          </div>
          <div className="flex justify-between px-10">
            <div className="">
              <h2 className="flex justify-start px-2">E-mail</h2>
              <input
                type="text"
                defaultValue={ModObj[0].email}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
            <div className="">
              <h2 className="flex justify-start px-2">Nombre Completo</h2>
              <input
                type="text"
                defaultValue={ModObj[0].fullname}
                className="block rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Usuarios;
