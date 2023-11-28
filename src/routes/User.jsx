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
      <section className="flex justify-center max-[800px]: m-5 ">
        <form
          action=""
          className="flex flex-col w-1/2 border border-gray-300 shadow-lg  "
        >
          <div className="flex justify-center py-2 ">
            <img
              src="/public/about2.png"
              alt="user"
              className="w-1/3 rounded-full aspect-square"
            />
          </div>
          <div className="flex justify-between p-5 gap-10">
            <div className="w-full">
              <h2 className="text-lg font-medium">Usuario:</h2>
              <div className="w-full rounded-md bg-gray-100 py-2 text-center">
                {User.username}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-medium">Email:</h2>
              <div className="w-full rounded-md bg-gray-100 py-2 text-center">
                {User.email}
              </div>
            </div>
          </div>
          <div className="flex justify-between p-5 gap-10">
            <div className="w-full">
              <h2 className="text-lg font-medium">Contraseña:</h2>
              <div className="rounded-md bg-gray-100 py-2 text-center">
                {User.password}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-medium">Tipo de Usuario:</h2>
              <div className="rounded-md bg-gray-100 py-2 text-center">
                {User.tipo}
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default User;
