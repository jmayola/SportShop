import { useState, useEffect } from "react";
import axios from "axios";
import DeleteProducts from "../components/Products/DeleteProducts";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, redirect } from "react-router-dom";
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
    <Header></Header>
    <Form method="POST" action="/products/delete">
     <select name="selectDelete" id="" className="text-center m-auto w-1/2 bg-slate-500 h-1/2">
      {Data.map((val,i)=>{
        return <DeleteProducts values={{Data,i}} key={i}></DeleteProducts>
      })}
      </select>
      <input type="text" name="selectName" id="" />
      <input type="submit" value="Borrar" />
    </Form>
      <Footer></Footer>
    </>
  );
}
export const DeleteProductAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {id_products: data.get("selectDelete")}
  axios.delete("http://localhost:3000/products", {
    data: submission
  });
  return redirect("/");
};
export default Delete;
