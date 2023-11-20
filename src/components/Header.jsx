import { useEffect, useState } from "react";
import HeaderNoRegister from "./Header/HeaderNoRegister";
import HeaderCliente from "./Header/HeaderCliente";
import HeaderAdmin from "./Header/HeaderAdmin";
import axios from "axios";

function Header() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      let data = res.data;
      return setUser(data);
    });
  }, [User]);
  let setus = User.filter((val) => {
    if (val.username == localStorage.getItem("usuario")) {
      return true;
    } else {
      return false;
    }
  });
  if(setus == ""){
    return <HeaderNoRegister></HeaderNoRegister>
  }
  else if(setus[0].tipo == "Admin") {
    console.log("admin")
    return (
      <HeaderAdmin values={setus}></HeaderAdmin>
    );
  } else if(setus[0].tipo == "cliente") {
    return <HeaderCliente values={setus}></HeaderCliente>
  }
  else{
    <h1>asjdajsoid</h1>
  }
}
export default Header;
