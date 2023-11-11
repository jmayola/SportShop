import Presentation from "./Presentation";
import ProductsCard from "./Products/ProductsCard";
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
  console.log(Data);
  if (Data.length == 0) {
    return (
      <>
        <Presentation></Presentation>
        <section>
          <div className="flex justify-center p-10 font-inter">
            <h1 className="font-semibold text-4xl">No hay Productos</h1>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Presentation></Presentation>

        <section>
          <div className="flex justify-center p-10 font-inter">
            <h1 className="font-semibold text-4xl">Productos</h1>
          </div>
          {/* Grid de productos*/}
          <section className=" grid grid-cols-5 gap-5  ">
            {Data.map((val, i) => {
              return <ProductsCard value={{ Data, i }} key={i}></ProductsCard>;
            })}
          </section>
        </section>
      </>
    );
  }
}

export default MainContent;
