import axios from "axios";
import React from "react";
import { Form, redirect, useParams } from "react-router-dom";
export default function UpdateProduct() {
  const { id } = useParams();
  return (
    <>
      <Form method="PUT" action="/products/update/:id">
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
          className="p-4 bg-gray-300 border-slate-950 border-2"
          id=""
        />
        <input type="hidden"
        name="id_products"
        value={id} />
        <button>submit</button>
      </Form>
    </>
  );
}
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
