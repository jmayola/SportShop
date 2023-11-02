import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCard from "../components/Products/ProductsCard";

function Products() {
  const [Data, setData] = useState([]);
  useEffect(() => {
  axios.get("http://localhost:3000").then(res=>{
    let data = res.data;
    return setData(data);
  })
  }, [])
  if (Data == null) {
    return <h1>No hay Productos</h1>;
  } else {
    return (
      <>
        <Header />
        <section className="grid place-content-center gap-5">
          {
            Data.map((val,i)=>{
              return <ProductsCard value={{Data, i}} key={i}></ProductsCard>
            })

          }
        </section>
        <Footer />
      </>
    );
  }
}

export default Products;
