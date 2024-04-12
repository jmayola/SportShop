import Presentation from "./Presentation";
import ProductsCard from "./Products/ProductsCard";
import AboutUs from "./AboutUs";
import { useState, useEffect } from "react";
import axios from "axios";
function MainContent() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      let data = res.data;
      return setData(data);
    });
  }, []);
  if (Data.length == 0) {
    return (
      <>
        <Presentation></Presentation>
        <section>
          <div className="flex justify-center mx-4 my-10 font-inter">
            <h1 className="font-semibold text-4xl lg:text-5xl">
              No hay Productos
            </h1>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Presentation></Presentation>
        <section>
          <div className="flex justify-center my-10 font-inter">
            <h1 className="font-semibold text-4xl lg:text-5xl">Productos</h1>
          </div>
          {/* Grid de productos*/}
          <section className=" grid grid-cols-1 mx-4 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Data.map((val, i) => {
              return <ProductsCard value={{ Data, i }} key={i}></ProductsCard>;
            })}
          </section>
        </section>
        <section className="mx-4 mb-4">
          <div className="flex justify-center my-10 font-inter">
            <h2 className="font-semibold text-4xl lg:text-5xl">
              Sobre nosotros
            </h2>
          </div>
          <AboutUs></AboutUs>
        </section>
      </>
    );
  }
}

export default MainContent;
