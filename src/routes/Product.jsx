import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Product() {
  const [Data, setData] = useState([]);
  const [Cant, setCant] = useState();
  const { id } = useParams();
  useEffect(() => {
    setInterval(() => {
      async function getdata() {
        axios.get("http://localhost:3000/").then((res) => {
          setData(res.data);
        });
      }
      if (Data == "") {
        getdata();
      }
    });
  }, [Data]);
  async function PostData(){
    if(Cant <=  Data[id].stock_products){
      await axios.post("http://localhost:3000/cart", {username: localStorage.getItem("usuario"), id_products: Data[id].id_products, cant: Cant }).then(()=>{
        alert("producto añadido al carrito")
        location.href = "/products"
        }).catch((err)=>{
          alert("Ingresa una cantidad a comprar.")
          alert("Ha ocurrido un error: "+ err)
        })
      }
    else{
      alert("No hay suficiente Stock")
    }
    }
    
  if (Data == "") {
    return <h1>Esperando Datos</h1>;
  } else {
    console.log(Data[id]);
    return (
      <>
        <Header></Header>
        <div className="grid grid-cols-2 m-auto  w-2/3 h-2/3 justify-around border max-xl:grid-cols-1  border-gray-300">
          <div className=" flex justify-center font-black w-fit m-auto">
            <img
              src={"../" + Data[id].image_products}
              className="w-96 min-h-[200px]  border-gray-300 object-contain"
              alt=""
            />
          </div>
          <div className="flex gap-5 flex-col justify-between m-5 border border-gray-300 rounded-md p-5">
            <div className="gap-2 py-5">
              <h3 className="text-3xl">{Data[id].name_products}</h3>
              <h3 className="text2xl">Descripcion:</h3>
              <h3 className="p-2 bg-gray-100 rounded-md">
                {Data[id].desc_products}
              </h3>
            </div>
            <div className="flex align-middle justify-between rounded-md p-2">
              <h3 className="text-right justify-end text-4xl font-light">
                ${Data[id].price_products}
              </h3>
            </div>
            <input
              type="number"
              defaultValue={0}
              onChange={(e) => setCant(e.target.value)}
              className="rounded-md w-1/3 text-center text-4xl border border-gray-200"
            />
            <p>{Data[id].stock_products} disponibles</p>
            <button onClick={()=>PostData()}  className="p-5 bg-red-600  rounded-md font-medium text-white">
              Comprar
            </button>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default Product;
