import { useState, useEffect } from "react";
import axios from "axios";
import DeleteProducts from "../components/Products/DeleteProducts";

function Delete() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      let data = res.data;
      return setData(data);
    });
  }, []);
  return (
    <>
    <select name="" id="">
      {Data.map((val,i)=>{
        return <DeleteProducts values={{Data,i}} key={i}></DeleteProducts>
      })}
      </select>
    </>
  );
}

export default Delete;
