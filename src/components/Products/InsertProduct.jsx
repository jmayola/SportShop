import axios from "axios";
import React from "react";
import { Form, redirect } from "react-router-dom";
export default function InsertProduct() {
  return (
    <>
      <Form method="POST" action="/products/insert">
        <input
          type="text"
          name="name_products"
          placeholder="Ingrese un Nombre"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <textarea
          type="text"
          name="desc_products"
          placeholder="Ingrese una descripcion"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <input
          type="number"
          name="price_products"
          placeholder="Ingrese el Precio"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <input
          type="number"
          name="stock_products"
          placeholder="Ingrese el Stock"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />

        <input
          type="text"
          name="category_products"
          placeholder="Ingrese una Categoria"
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <input
          type="file"
          name="image_products"
          placeholder="Ingrese una Imagen"
          className="p-4 bg-gray-300 bg-red-500 border-slate-950 border-2"
          id=""
        />
        <button>submit</button>
      </Form>
    </>
  );
}
export const insertProductAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    name_products: data.get("name_products"),
    desc_products: data.get("desc_products"),
    price_products: data.get("price_products"),
    stock_products: data.get("stock_products"),
    category_products: data.get("category_products"),
    image_products: data.get("image_products"),
  };
  console.log(submission);
  axios.post("http://localhost:3000/products", submission);
  return redirect("/products");
};
