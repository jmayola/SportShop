import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
function User() {
  const [Data, setData] = useState([]);
  const [User, setUser] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios.get("http://localhost:3000/users").then((res) => {
        setData(res.data);
      });
    }
    if (Data == "") {
      getData();
    }
    Data.map((val, i) => {
      if (localStorage.getItem("usuario") == val.username) {
        setUser(val);
      }
    });
  }, [Data]);

  return (
    <>
      <Header />
      <section className="flex justify-center ">
        <form
          action=""
          className="flex justify-center bg-gray-200 w-2/5 h-full "
        >
          <div>
            <img src="" alt="user" />
            <div className="flex justify-between">
              <p className=" bg-gray-500">Usuario</p>
              <p>{User.username}</p>
            </div>
            <div className="flex justify-between">
              <p className="p-2 bg-gray-500">Email</p>
              <p>{User.email}</p>
            </div>
            <div className="flex justify-between">
              <p className="p-2 bg-gray-500">Contraseña</p>
              <p>{User.password}</p>
            </div>
            <div className="flex justify-between">
              <p className="p-2 bg-gray-500">Tipo de Usuario</p>
              <p>{User.tipo}</p>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default User;
