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
      <section className="flex justify-center w-full">
        <form
          action=""
          className="flex justify-center bg-gray-200 w-1/2 h-1/2 "
        >
          <div>
            <img src="" alt="user" />
            div
            <div>
              <p>{User.username}</p>
              <p>{User.email}</p>
              <p>{User.password}</p>
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
