import axios from "axios";
import ProductsCard from "./ProductsCard";
import { Form, redirect, useParams } from "react-router-dom";
export default function UpdateProduct(children) {
  const Data = children.values.Data
  const { id } = useParams();
  if(Data.length == 0){
    return <h1>Esperando Objetos</h1>
  }
  else{
  return (
    <>
    <ProductsCard value={{ Data, id }}></ProductsCard>
      <Form method="PUT" action="/products/update/:id" className="grid grid-cols-2 place-content-center gap-2 bg-slate-100">
        <label htmlFor="name_products" className="m-auto">Nombre del Producto:</label>
        <input
          type="text"
          name="name_products"
          defaultValue={Data[id].name_products}
          placeholder="Ingrese un Nombre"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <label htmlFor="desc_products" className="m-auto">Descripción del Producto:</label>
        <textarea
          type="text"
          name="desc_products"
          defaultValue={Data[id].desc_products}
          placeholder="Ingrese una descripcion"
          className="p-4 bg-gray-300 border-slate-950 border-2 resize-none w-full"
          id=""
        />
        <label htmlFor="price_products" className="m-auto">Precio del Producto:</label>

        <input
          type="number"
          name="price_products"
          defaultValue={Data[id].price_products}
          placeholder="Ingrese el Precio"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <label htmlFor="stock_products" className="m-auto">Stock del Producto:</label>

        <input
          type="number"
          name="stock_products"
          defaultValue={Data[id].stock_products}
          placeholder="Ingrese el Stock"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <label htmlFor="category_products" className="m-auto">Categoria del Producto:</label>

        <input
          type="text"
          name="category_products"
          defaultValue={Data[id].category_products}
          placeholder="Ingrese una Categoria"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <label htmlFor="image_products" className="m-auto">Imagen del Producto:</label>

        <input
          type="file"
          name="image_products"
          placeholder="asdjasj"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <input type="hidden"
        name="id_products"
        value={id} />
        <button className="grid col-end-3 col-start-1 p-5 bg-orange-400">Modificar</button>
      </Form>
    </>
  );
}}
export const updateProductAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    name_products: data.get("name_products"),
    desc_products: data.get("desc_products"),
    price_products: data.get("price_products"),
    stock_products: data.get("stock_products"),
    category_products: data.get("category_products"),
    image_products: data.get("image_products"),
    id_products: data.get("id_products")
  };
  console.log(submission);
  axios.put("http://localhost:3000/products", submission);
  return redirect("/products");
};
