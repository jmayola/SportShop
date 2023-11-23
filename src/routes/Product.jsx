import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
function Product() {
  const [Data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getdata() {
      axios.get("http://localhost:3000/").then((res) => {
        setData(res.data);
      });
    }
    if (Data == "") {
      getdata();
    }
  }, [Data]);
  if (Data == "") {
    return <h1>Esperando Datos</h1>;
  } else {
    console.log(Data[id]);
    return (
      <>
        <Header></Header>
        <div className="grid grid-cols-2 m-auto w-2/3 h-2/3 border max-xl:grid-cols-1  border-gray-300">
          <div className=" flex justify-center w-fit m-auto">
            <img
              src={"../" + Data[id].image_products}
              className="w-96 min-h-[200px]  border-gray-300 object-contain"
              alt=""
            />
          </div>
          <div className="flex gap-5 flex-col justify-between m-5 bg-slate-400 rounded-md p-5">
            <h3 className="text-4xl">{Data[id].name_products}</h3>
            <h3 className="text2xl">Descripcion:</h3>
            <h3 className="p-5 bg-gray-300 rounded-md">
              {Data[id].desc_products}
            </h3>
            <div className="flex align-middle justify-between rounded-md bg-gray-300 p-5">
              <h3 className="text-right justify-end text-4xl">
                ${Data[id].price_products}
              </h3>
              <input
                type="number"
                readOnly
                defaultValue={0}
                className="rounded-md w-1/3 text-center text-4xl"
              />
              <button className="p-5 bg-orange-500 rounded-md font-medium text-white">
                Comprar
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default Product;
