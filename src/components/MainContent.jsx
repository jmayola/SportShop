import Presentation from "./Products/Presentation";
import ProductsCard from "./Products/ProductsCard";
import { useState, useEffect } from "react";
import axios from "axios";
function MainContent() {
     const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000").then(res => {
      let data = res.data;
      return setData(data);
    })
  }, [])
  if (Data == null) {
    return <h1>No hay Productos</h1>;
  } else {
    return (
      <>
        <Presentation></Presentation>
        <section className="grid place-content-center gap-5">
          {
            Data.map((val, i) => {
              return <ProductsCard value={{ Data, i }} key={i}></ProductsCard>
            })

          }
        </section>
        </>
    )
  }}

export default MainContent;
