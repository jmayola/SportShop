import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
function Empleados() {
  const [User, setUser] = useState([]);
  const [Search, SetSearch] = useState([]);
  const [ModObj, setModObj] = useState([{}]);
  const [DNI, setDNI] = useState("")
  const [Address, setAddress] = useState("")
  const [Fullname, setFullname] = useState("")
  const [Username, setUsername] = useState("")
  const [Work, setWork] = useState("")
  const {data} = useLoaderData()
  useEffect(() => {
    async function getData() {
      return setUser(data);
    }
    if(User == ""){
      getData()
    }
  }, [User, data]); 

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
    let arr = User.filter((val) => {
      if (e == val.username) return true;
    });
    setModObj(arr);
    ModObj[0].username
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
                setUsername(e.target.value)
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
                    name="fullname"
                    type="text"
                    defaultValue={ModObj[0].fullname}
                    onChange={(e)=>setFullname(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Domicilio</h2>
                  <input
                    name="address"
                    type="text"
                    defaultValue={ModObj[0].address}
                    onChange={(e)=>setAddress(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">DNI</h2>
                  <input
                    name="dni"
                    type="text"
                    onChange={(e)=>setDNI(e.target.value)}
                    defaultValue={ModObj[0].dni}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  />
                </div>
                <div className="w-full">
                  <h2 className="flex justify-start px-2">Sector de Trabajo</h2>
                  <input
                    name="worksector"
                    type="text"
                    onChange={(e)=>setWork(e.target.value)}
                    defaultValue={ModObj[0].worksector}
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
              to={"/Empleados/insert"}
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Insertar
            </Link>
            <button
              onClick={() => {if(confirm("Desea eliminar el empleado?")){
                axios.delete("http://localhost:3000/employees",{
                  data: { username: ModObj[0].username },
                }).then((res)=>{
                  if(res.status == 200){
                    alert("Eliminacion de Empleado Exitosa")
                    location.reload()
                  }
                  else{
                    alert("se ha detectado un error en la base de datos, vuelve a intentarlo")
                    location.reload()
                  }
                }).catch((res)=>{
                  alert("Error, prueba a ingresar un empleado.")
                  alert("Se a detectado un error: "+ res.message)
                })}
              }}
              className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white"
            >
              Borrar Empleado
            </button>
            <button onClick={() => {if(confirm("Desea modificar el empleado?")){
                axios.put("http://localhost:3000/employees",{
                  data: { username: Username, fullname: Fullname, dni: DNI, address: Address, worksector: Work },
                }).then((res)=>{
                  if(res.status == 200){
                    alert("Modificacion de Empleado Exitosa")
                    location.reload()
                  }
                  else{
                    alert("se ha detectado un error en la base de datos, vuelve a intentarlo")
                    location.reload()
                  }
                }).catch((res)=>{
                  alert("Error, prueba a ingresar un empleado.")
                  alert("Se a detectado un error: "+ res.message)
                })
              }
              }} className="p-5 bg-black border hover:shadow-2xl duration-500  rounded-md font-medium text-white">
              Modificar
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Empleados;
